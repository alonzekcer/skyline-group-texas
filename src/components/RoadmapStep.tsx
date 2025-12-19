import React from 'react';
import { SupportStep } from '../types';

interface RoadmapStepProps {
    step: SupportStep;
    isActive: boolean;
    isCompleted: boolean;
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ step, isActive, isCompleted }) => {
    return (
        <div className={`relative flex gap-8 items-start transition-all duration-1000 ${isActive ? 'translate-x-[-10px]' : ''}`}>
            {/* Connector Point - Minimalist Circle */}
            <div className="absolute right-[-34px] top-10 z-20">
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-700 
          ${isCompleted ? 'bg-gold border-gold scale-125 shadow-[0_0_15px_rgba(245,196,81,0.6)]' : isActive ? 'bg-white border-gold scale-150' : 'bg-slate-300 border-slate-300'}`}
                />
            </div>

            {/* Card Content - Premium Minimalist */}
            <div className={`p-8 md:p-10 rounded-[2rem] border transition-all duration-700 w-full group overflow-hidden relative
        ${isCompleted ? 'bg-white border-slate-100 shadow-sm' : isActive ? 'bg-white border-gold/30 shadow-2xl scale-[1.02]' : 'bg-transparent border-transparent opacity-40'}`}>

                {/* Subtle background number for completed steps */}
                {isCompleted && (
                    <div className="absolute -bottom-4 -left-4 text-9xl font-black text-slate-50 select-none pointer-events-none z-0">
                        {step.id}
                    </div>
                )}

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-5">
                        <div className={`text-4xl transition-all duration-500 ${isActive || isCompleted ? 'grayscale-0' : 'grayscale opacity-30'}`}>
                            {step.icon}
                        </div>
                        <h4 className={`text-2xl md:text-3xl font-black transition-colors duration-500 ${isCompleted ? 'text-navy' : isActive ? 'text-navy' : 'text-slate-400'}`}>
                            {step.title}
                        </h4>
                    </div>
                    <div className={`px-4 py-1.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] self-start md:self-center
            ${isCompleted ? 'bg-navy text-white' : isActive ? 'bg-gold text-navy' : 'bg-slate-100 text-slate-400'}`}>
                        {isCompleted ? 'Completed' : `Step 0${step.id}`}
                    </div>
                </div>

                <p className={`text-lg leading-relaxed font-medium transition-colors duration-500 relative z-10
          ${isCompleted ? 'text-slate-500' : isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                    {step.description}
                </p>
            </div>
        </div>
    );
};

export default RoadmapStep;
