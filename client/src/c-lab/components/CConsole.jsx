import React from 'react';
import { Terminal as TerminalIcon, Trash2 } from 'lucide-react';

const CConsole = ({ output, onClear, isRunning }) => {
    return (
        <div className="flex flex-col h-full bg-[#020617] border-t border-white/5">
            <div className="h-10 px-4 flex items-center justify-between border-b border-white/5 bg-slate-900/50">
                <div className="flex items-center gap-2">
                    <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">C Console Output</span>
                </div>
                <button
                    onClick={onClear}
                    className="p-1.5 hover:bg-white/5 rounded text-slate-500 hover:text-white transition-colors"
                >
                    <Trash2 className="w-3.5 h-3.5" />
                </button>
            </div>
            <div className="flex-1 p-4 font-mono text-sm overflow-auto scrollbar-hide">
                {isRunning ? (
                    <div className="flex items-center gap-3 text-blue-400 animate-pulse">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                        Executing program...
                    </div>
                ) : output ? (
                    <pre className="text-slate-300 whitespace-pre-wrap">{output}</pre>
                ) : (
                    <span className="text-slate-600 italic">Program output will appear here...</span>
                )}
            </div>
        </div>
    );
};

export default CConsole;
