import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Binary, ArrowRight, Layers } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    const labs = [
        {
            id: 'java',
            title: 'Java Programming Lab',
            description: 'Run Java experiments and code using fully online compiler.',
            icon: <Coffee className="w-12 h-12 text-orange-500" />,
            path: '/java-lab',
            color: 'from-orange-500/20 to-orange-600/20',
            borderColor: 'border-orange-500/30'
        },
        {
            id: 'c',
            title: 'C Programming Lab',
            description: 'Run C experiments and code using fully online compiler.',
            icon: <Binary className="w-12 h-12 text-blue-500" />,
            path: '/c-lab',
            color: 'from-blue-500/20 to-blue-600/20',
            borderColor: 'border-blue-500/30'
        },
        {
            id: 'ds',
            title: 'Data Structure Lab',
            description: 'Master Data Structures using C and C++ online compiler.',
            icon: <Layers className="w-12 h-12 text-purple-500" />,
            path: '/ds-lab',
            color: 'from-purple-500/20 to-purple-600/20',
            borderColor: 'border-purple-500/30'
        },
        {
            id: 'python',
            title: 'Python Programming Lab',
            description: 'Learn Python programming from basic to advanced concepts with interactive experiments.',
            icon: <Binary className="w-12 h-12 text-yellow-500" />,
            path: '/python-lab',
            color: 'from-yellow-500/20 to-blue-600/20',
            borderColor: 'border-yellow-500/30'
        }
    ];

    return (
        <div className="h-full w-full bg-[#020617] text-slate-200 flex flex-col items-center justify-start p-6 sm:p-12 pt-20 sm:pt-32 overflow-y-auto scrollbar-hide">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 space-y-4"
            >
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Virtual Programming Lab
                </h1>
                <p className="text-slate-400 text-lg sm:text-xl max-w-2xl">
                    Select a programming language to start experiments and use the online compiler.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                {labs.map((lab, index) => (
                    <motion.div
                        key={lab.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate(lab.path)}
                        className={`bg-slate-900 border ${lab.borderColor} rounded-2xl p-8 cursor-pointer group relative overflow-hidden transition-all shadow-2xl`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit">
                                {lab.icon}
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                {lab.title}
                            </h2>
                            <p className="text-slate-400 mb-8 flex-1">
                                {lab.description}
                            </p>
                            <button className="flex items-center gap-2 text-white font-bold bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors w-fit shadow-lg shadow-blue-600/20">
                                Start {lab.id.charAt(0).toUpperCase() + lab.id.slice(1)} Lab
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <footer className="mt-20 text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Virtual Lab Inc. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
