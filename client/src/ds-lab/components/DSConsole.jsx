import React from 'react';
import { Terminal, Copy, Trash2, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DSConsole = ({ output, onClear, isRunning }) => {
    const copyToClipboard = () => {
        if (output) {
            navigator.clipboard.writeText(output);
        }
    };

    const isError = output && (output.toLowerCase().includes('error') || output.toLowerCase().includes('exception'));

    return (
        <div className="flex flex-col h-full bg-[#020617] text-slate-300 font-mono text-sm relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-xs tracking-wider uppercase opacity-70">Console Output</span>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={copyToClipboard}
                        className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white"
                        title="Copy Output"
                    >
                        <Copy className="w-4 h-4" />
                    </button>
                    <button
                        onClick={onClear}
                        className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-red-400"
                        title="Clear Console"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                <AnimatePresence mode='wait'>
                    {isRunning ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center space-y-3 py-10"
                        >
                            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                            <p className="text-blue-400/70 text-xs animate-pulse font-sans">Executing program...</p>
                        </motion.div>
                    ) : output ? (
                        <motion.div
                            key="output"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1 shrink-0">
                                    {isError ? (
                                        <XCircle className="w-4 h-4 text-red-400" />
                                    ) : (
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    )}
                                </div>
                                <pre className="whitespace-pre-wrap break-words leading-relaxed font-mono text-[13px] text-slate-200">
                                    {output}
                                </pre>
                            </div>
                        </motion.div>
                    ) : (
                        <div key="empty" className="h-full flex flex-col items-center justify-center opacity-10 select-none py-10">
                            <Terminal className="w-16 h-16 mb-2" />
                            <p className="font-sans text-sm">Output will appear here</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DSConsole;
