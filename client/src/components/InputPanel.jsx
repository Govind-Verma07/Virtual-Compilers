import React from 'react';
import { Keyboard, Type } from 'lucide-react';

const InputPanel = ({ value, onChange, theme }) => {
    return (
        <div className="flex flex-col h-full bg-[#020617] text-slate-300 font-mono text-sm relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <Type className="w-4 h-4 text-purple-400" />
                    <span className="font-semibold text-xs tracking-wider uppercase opacity-70">Program Input (Stdin)</span>
                </div>
                <div className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-purple-500/20">
                    Standard Input
                </div>
            </div>
            <div className="flex-1 relative group">
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter inputs here (one per line, as requested by Scanner)..."
                    className="absolute inset-0 w-full h-full p-4 bg-transparent outline-none resize-none scrollbar-hide text-slate-300 placeholder:opacity-20 font-mono text-[13px] leading-relaxed focus:bg-white/[0.02] transition-colors"
                />
                {/* Subtle grid pattern background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
        </div>
    );
};

export default InputPanel;
