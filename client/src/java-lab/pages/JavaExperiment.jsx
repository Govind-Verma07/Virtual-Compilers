import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { experiments } from '../../data/experimentsData';
import Navbar from '../../components/Navbar';
import JavaCompiler from '../compiler/JavaCompiler';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ScrollText, PlayCircle, Terminal as TerminalIcon, ChevronLeft, Target, Lightbulb, ClipboardList, CheckCircle2, Info } from 'lucide-react';
import ExperimentSection from '../../components/ExperimentSection';

const JavaExperiment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const experiment = experiments.find(e => e.id === parseInt(id));

    const [activeTab, setActiveTab] = useState('theory');

    useEffect(() => {
        if (!experiment) navigate('/java-lab');
    }, [experiment, navigate]);

    const tabs = [
        { id: 'theory', label: 'Theory', icon: <Book className="w-4 h-4" /> },
        { id: 'procedure', label: 'Procedure', icon: <ScrollText className="w-4 h-4" /> },
        { id: 'editor', label: 'Compiler', icon: <PlayCircle className="w-4 h-4" /> },
    ];

    if (!experiment) return null;

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-[#020617]">
            {/* Header */}
            <div className="h-14 w-full shrink-0 border-b border-white/5 flex items-center justify-between px-4 sm:px-6 bg-[#0f172a] z-30">
                <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                    <button
                        onClick={() => navigate('/java-lab')}
                        className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all shrink-0"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="h-4 w-px bg-white/10 shrink-0" />
                    <h2 className="font-bold text-slate-200 uppercase tracking-tight text-xs sm:text-sm truncate">
                        Java Expt {experiment.id}: {experiment.title}
                    </h2>
                </div>
            </div>

            <div className="flex-1 w-full flex flex-col sm:flex-row overflow-hidden relative">
                {/* Tabs Sidebar */}
                <div className="w-full sm:w-16 h-14 sm:h-full border-t sm:border-t-0 sm:border-r border-white/5 flex sm:flex-col items-center justify-around sm:justify-start py-0 sm:py-6 gap-0 sm:gap-6 bg-[#0f172a] z-20 order-last sm:order-first shrink-0">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`p-3 rounded-none sm:rounded-xl transition-all relative group flex-1 sm:flex-none flex items-center justify-center ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-500 hover:text-slate-300'}`}
                            title={tab.label}
                        >
                            {tab.icon}
                        </button>
                    ))}
                </div>

                {/* Content */}
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
                                                <li key={i} className="pl-2 group/step text-slate-300">{step}</li>
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
                                                    <div className="bg-green-500/20 text-green-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-green-500/20">{i + 1}</div>
                                                    <span className="text-slate-300">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </ExperimentSection>
                                    <ExperimentSection title="Result" icon={CheckCircle2} color="blue">
                                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-300 font-medium">{experiment.result}</div>
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
                                <JavaCompiler defaultCode={experiment.defaultCode} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default JavaExperiment;
