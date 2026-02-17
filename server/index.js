const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const TEMP_DIR = path.join(__dirname, 'temp');

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR);
}

app.post('/run', (req, res) => {
    const { code } = req.body;
    
    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    const sessionId = uuidv4();
    const sessionDir = path.join(TEMP_DIR, sessionId);
    fs.mkdirSync(sessionDir);

    const filePath = path.join(sessionDir, 'Main.java');
    
    // Save Java code to file
    fs.writeFile(filePath, code, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save code' });
        }

        // Compile Java code
        exec(`javac Main.java`, { cwd: sessionDir }, (compileErr, stdout, stderr) => {
            if (compileErr) {
                // Return compilation error
                cleanup(sessionDir);
                return res.json({ output: stderr || stdout, isError: true });
            }

            // Run Java code
            exec(`java Main`, { cwd: sessionDir }, (runErr, runStdout, runStderr) => {
                cleanup(sessionDir);
                if (runErr) {
                    return res.json({ output: runStderr || runStdout, isError: true });
                }
                res.json({ output: runStdout, isError: false });
            });
        });
    });
});

function cleanup(dir) {
    try {
        fs.rmSync(dir, { recursive: true, force: true });
    } catch (err) {
        console.error('Cleanup error:', err);
    }
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
