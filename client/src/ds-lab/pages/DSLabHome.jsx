import React from 'react';
import { dsExperiments } from '../data/dsExperiments';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Code2, ArrowRight, Layers } from 'lucide-react';

import { GlowingEffect } from '../../components/ui/glowing-effect';

const DSLabHome = () => {
    return (
        <div className="w-full h-full px-2 sm:px-4 py-8 overflow-y-auto scrollbar-hide bg-[#020617]">
            <header className="mb-12 text-center w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-3 mb-4"
                >
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-3 rounded-2xl shadow-xl shadow-blue-500/20">
                        <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white">
                        DATA STRUCTURE <span className="gradient-text">LAB</span>
                    </h1>
                </motion.div>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Master fundamental data structures using C and C++. Explore linked lists, stacks, queues, trees, and more.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {dsExperiments.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative h-full rounded-[2rem] p-1">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative glass rounded-[1.75rem] p-8 h-full flex flex-col border border-white/5 bg-slate-900/50 backdrop-blur-2xl transition-all duration-300 overflow-hidden">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${exp.difficulty === 'Easy' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                                        exp.difficulty === 'Medium' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                            'bg-red-500/10 border-red-500/20 text-red-400'
                                        }`}>
                                        {exp.difficulty}
                                    </span>
                                    <span className="text-slate-500 font-mono text-xs">Expt. {exp.id}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {exp.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                    {exp.description}
                                </p>

                                <Link
                                    to={`/ds-lab/experiment/${exp.id}`}
                                    className="flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/10 group-hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 relative z-10"
                                >
                                    <span>Start Experiment</span>
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DSLabHome;
