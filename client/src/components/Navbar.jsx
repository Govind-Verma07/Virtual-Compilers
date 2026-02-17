import React from 'react';
import { Play, Trash2, Sun, Moon, Download, Code2, Save } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ onRun, isRunning, theme, toggleTheme, onDownload, onClearCode }) => {
    return (
        <nav className="h-16 glass m-4 mb-0 rounded-xl flex items-center justify-between px-6 shadow-lg relative z-10 border border-white/10">
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
                    <Code2 className="text-white w-6 h-6" />
                </div>
                <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                    <span className="gradient-text">Java</span> Compiler
                </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="p-2.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClearCode}
                    className="p-2.5 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors"
                    title="Reset Code"
                >
                    <Trash2 className="w-5 h-5" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onDownload}
                    className="p-2.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors"
                    title="Download Code"
                >
                    <Download className="w-5 h-5" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isRunning}
                    onClick={onRun}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg ${isRunning
                            ? 'bg-slate-700 cursor-not-allowed text-slate-400'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/20'
                        }`}
                >
                    {isRunning ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                        />
                    ) : (
                        <Play className="w-5 h-5 fill-current" />
                    )}
                    <span>{isRunning ? 'Running...' : 'Run'}</span>
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
