import React from 'react';
import { motion } from 'framer-motion';

const ExperimentSection = ({ title, icon: Icon, children, color = "blue" }) => {
    const colorClasses = {
        blue: "text-blue-400 border-blue-500/20 bg-blue-500/5",
        purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
        green: "text-green-400 border-green-500/20 bg-green-500/5",
        amber: "text-amber-400 border-amber-500/20 bg-amber-500/5"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mb-8 group"
        >
            <div className="relative glass rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
                {/* Decorative Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${colorClasses[color].split(' ')[1].replace('border-', 'bg-').replace('/20', '')}`} />

                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl border ${colorClasses[color]}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                            {title}
                        </h3>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-transparent mt-1" />
                    </div>
                </div>

                <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default ExperimentSection;
