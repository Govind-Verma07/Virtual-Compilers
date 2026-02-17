import React, { useState } from 'react';
import JavaEditor from '../../components/Editor';
import Console from '../../components/Console';
import InputPanel from '../../components/InputPanel';
import axios from 'axios';
import { PlayCircle } from 'lucide-react';

const SUBMISSION_URL = 'https://ce.judge0.com/submissions?base64_encoded=false';
const STATUS_URL = 'https://ce.judge0.com/submissions';

const JavaCompiler = ({ defaultCode }) => {
    const [code, setCode] = useState(defaultCode || '');
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput('');
        try {
            setOutput('Submitting to cloud...');
            const response = await axios.post(SUBMISSION_URL, {
                source_code: code,
                language_id: 62,
                stdin: userInput
            });

            const token = response.data.token;
            if (!token) throw new Error('Token failed');

            let statusId = 1;
            let resultData = null;

            while (statusId <= 2) {
                const res = await axios.get(`${STATUS_URL}/${token}?base64_encoded=false`);
                resultData = res.data;
                statusId = resultData.status.id;
                if (statusId === 1) setOutput('In Queue...');
                else if (statusId === 2) setOutput('Compiling and Running...');
                if (statusId <= 2) await new Promise(r => setTimeout(r, 1000));
            }

            const { stdout, stderr, compile_output, status } = resultData;
            const result = compile_output || stderr || stdout || (status?.description === "Accepted" ? "Execution successful!" : status?.description);
            setOutput(result);
        } catch (err) {
            setOutput('Error: ' + err.message);
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-[#020617]">
            <div className="h-12 w-full border-b border-white/5 flex items-center justify-between px-4 bg-[#0f172a] shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Java Compiler</span>
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2"
                >
                    {isRunning ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <PlayCircle className="w-4 h-4" />}
                    Run
                </button>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row min-h-0">
                <div className="flex-[0.7] border-r border-white/5 h-full relative">
                    <JavaEditor code={code} onChange={setCode} theme="dark" fontSize={16} />
                </div>
                <div className="flex-[0.3] flex flex-col h-full">
                    <div className="flex-1 overflow-hidden border-b border-white/5">
                        <InputPanel value={userInput} onChange={setUserInput} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Console output={output} onClear={() => setOutput('')} isRunning={isRunning} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavaCompiler;
