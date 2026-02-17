import React, { useState, useEffect } from 'react';
import DSEditor from '../components/DSEditor';
import DSConsole from '../components/DSConsole';
import DSInputPanel from '../components/DSInputPanel';
import DSLanguageSelector from '../components/DSLanguageSelector';
import axios from 'axios';
import { PlayCircle } from 'lucide-react';

const SUBMISSION_URL = 'https://ce.judge0.com/submissions?base64_encoded=false&wait=true';

const DSCompiler = ({ defaultCodeC, defaultCodeCPP }) => {
    const [language, setLanguage] = useState('c');
    const [code, setCode] = useState(defaultCodeC || '');
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (language === 'c') {
            setCode(defaultCodeC);
        } else {
            setCode(defaultCodeCPP);
        }
    }, [language, defaultCodeC, defaultCodeCPP]);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput('');
        try {
            setOutput('Compiling and Running...');
            const languageId = language === 'c' ? 50 : 54;

            const response = await axios.post(SUBMISSION_URL, {
                source_code: code,
                language_id: languageId,
                stdin: userInput
            });

            const { stdout, stderr, compile_output, status } = response.data;
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
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        DS Online Compiler
                    </span>
                    <DSLanguageSelector language={language} setLanguage={setLanguage} />
                </div>
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2"
                >
                    {isRunning ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <PlayCircle className="w-4 h-4" />}
                    Run Program
                </button>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row min-h-0">
                <div className="flex-[0.7] border-r border-white/5 h-full relative">
                    <DSEditor code={code} onChange={setCode} theme="dark" fontSize={16} />
                </div>
                <div className="flex-[0.3] flex flex-col h-full">
                    <div className="flex-1 overflow-hidden border-b border-white/5">
                        <DSInputPanel value={userInput} onChange={setUserInput} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <DSConsole output={output} onClear={() => setOutput('')} isRunning={isRunning} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSCompiler;
