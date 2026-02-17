import React from 'react';

const DSLanguageSelector = ({ language, setLanguage }) => {
    return (
        <div className="flex items-center gap-2">
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-slate-800 text-slate-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/5 outline-none focus:border-blue-500/50 transition-all cursor-pointer"
            >
                <option value="c">C Language</option>
                <option value="cpp">C++ Language</option>
            </select>
        </div>
    );
};

export default DSLanguageSelector;
