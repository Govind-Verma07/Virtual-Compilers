import React from 'react';
import { Keyboard } from 'lucide-react';

const CInputPanel = ({ value, onChange }) => {
    return (
        <div className="flex flex-col h-full bg-[#0f172a] border-l border-white/5">
            <div className="h-10 px-4 flex items-center gap-2 border-b border-white/5 bg-slate-900/50">
                <Keyboard className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Input Panel</span>
            </div>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter program input here..."
                className="flex-1 w-full bg-transparent p-4 text-sm text-slate-300 focus:outline-none resize-none font-mono placeholder:text-slate-600"
            />
        </div>
    );
};

export default CInputPanel;
