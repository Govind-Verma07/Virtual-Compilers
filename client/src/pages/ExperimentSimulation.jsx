import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { experiments } from '../data/experimentsData';
import Navbar from '../components/Navbar';
import JavaEditor from '../components/Editor';
import Console from '../components/Console';
import InputPanel from '../components/InputPanel';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Book, ScrollText, PlayCircle, Terminal as TerminalIcon, ChevronLeft } from 'lucide-react';

const SUBMISSION_URL = 'https://ce.judge0.com/submissions?base64_encoded=false';
const STATUS_URL = 'https://ce.judge0.com/submissions';

import ExperimentSection from '../components/ExperimentSection';
import { Target, Lightbulb, ClipboardList, CheckCircle2, Info } from 'lucide-react';

const ExperimentSimulation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const experiment = experiments.find(e => e.id === parseInt(id));

    const [activeTab, setActiveTab] = useState('theory');
    const [code, setCode] = useState(experiment?.defaultCode || '');
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (!experiment) navigate('/');
    }, [experiment, navigate]);

    const handleRun = async () => {
        setActiveTab('output');
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

    const tabs = [
        { id: 'theory', label: 'Theory', icon: <Book className="w-4 h-4" /> },
        { id: 'procedure', label: 'Procedure', icon: <ScrollText className="w-4 h-4" /> },
        { id: 'editor', label: 'Code Editor', icon: <PlayCircle className="w-4 h-4" /> },
        { id: 'output', label: 'Output Console', icon: <TerminalIcon className="w-4 h-4" /> },
    ];

    if (!experiment) return null;

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-[#020617]">
            {/* Mini Top Nav */}
            <div className="h-14 w-full shrink-0 border-b border-white/5 flex items-center justify-between px-4 sm:px-6 bg-[#0f172a] z-30">
                <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                    <button
                        onClick={() => navigate('/')}
                        className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all shrink-0"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="h-4 w-px bg-white/10 shrink-0" />
                    <h2 className="font-bold text-slate-200 uppercase tracking-tight text-xs sm:text-sm truncate">
                        Expt {experiment.id}: {experiment.title}
                    </h2>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-3 sm:px-5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                        {isRunning ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <PlayCircle className="w-4 h-4" />}
                        <span className="hidden xs:inline">Run Code</span>
                        <span className="xs:hidden">Run</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full flex flex-col sm:flex-row overflow-hidden relative">
                {/* Sidebar/Bottom Bar - Tabs */}
                <div className="w-full sm:w-16 h-14 sm:h-full border-t sm:border-t-0 sm:border-r border-white/5 flex sm:flex-col items-center justify-around sm:justify-start py-0 sm:py-6 gap-0 sm:gap-6 bg-[#0f172a] z-20 order-last sm:order-first shrink-0">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`p-3 rounded-none sm:rounded-xl transition-all relative group flex-1 sm:flex-none flex items-center justify-center ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-500 hover:text-slate-300'
                                }`}
                            title={tab.label}
                        >
                            {tab.icon}
                            <div className="hidden sm:block absolute left-16 bg-slate-800 text-white px-2 py-1 rounded text-[10px] invisible group-hover:visible whitespace-nowrap z-50">
                                {tab.label}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 w-full relative overflow-hidden bg-[#020617] min-h-0">
                    <AnimatePresence mode="wait">
                        {activeTab === 'theory' && (
                            <motion.div
                                key="theory"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 p-4 sm:p-10 overflow-auto scrollbar-hide w-full"
                            >
                                <div className="max-w-4xl mx-auto space-y-6">
                                    <ExperimentSection title="Objective" icon={Target} color="blue">
                                        <p className="text-lg text-slate-300">{experiment.objective}</p>
                                    </ExperimentSection>

                                    <ExperimentSection title="Theory" icon={Lightbulb} color="purple">
                                        <p className="whitespace-pre-wrap">{experiment.theory}</p>
                                    </ExperimentSection>

                                    <ExperimentSection title="Algorithm" icon={ClipboardList} color="amber">
                                        <ol className="list-decimal ml-6 space-y-4">
                                            {experiment.algorithm.map((step, i) => (
                                                <li key={i} className="pl-2 group/step">
                                                    <span className="text-slate-300 group-hover/step:text-white transition-colors">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </ExperimentSection>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'procedure' && (
                            <motion.div
                                key="procedure"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 p-4 sm:p-10 overflow-auto scrollbar-hide w-full"
                            >
                                <div className="max-w-4xl mx-auto space-y-6">
                                    <ExperimentSection title="Procedure" icon={ScrollText} color="green">
                                        <ul className="space-y-4">
                                            {experiment.procedure.map((step, i) => (
                                                <li key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <div className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-green-500/20">
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-slate-300">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </ExperimentSection>

                                    <ExperimentSection title="Result" icon={CheckCircle2} color="blue">
                                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-300 font-medium">
                                            {experiment.result}
                                        </div>
                                    </ExperimentSection>

                                    <ExperimentSection title="Conclusion" icon={Info} color="purple">
                                        <p className="italic text-slate-400">
                                            {experiment.conclusion}
                                        </p>
                                    </ExperimentSection>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'editor' && (
                            <motion.div
                                key="editor"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col p-0 w-full h-full"
                            >
                                <div className="flex-1 w-full flex flex-col lg:flex-row gap-0 min-h-0">
                                    <div className="flex-[0.8] w-full relative border-b lg:border-b-0 lg:border-r border-white/10">
                                        <JavaEditor code={code} onChange={setCode} theme={theme} fontSize={16} />
                                    </div>
                                    <div className="flex-[0.2] w-full flex flex-col h-full bg-[#020617]">
                                        <InputPanel value={userInput} onChange={setUserInput} />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'output' && (
                            <motion.div
                                key="output"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 p-0 w-full h-full"
                            >
                                <div className="h-full w-full border-0 shadow-none">
                                    <Console output={output} onClear={() => setOutput('')} isRunning={isRunning} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ExperimentSimulation;
