import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import RoadmapStep from '../RoadmapStep';
import { FULL_SUPPORT } from '../../data/data';

interface RoadmapSectionProps {
    onScrollToContact: () => void;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onScrollToContact }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [stepThresholds, setStepThresholds] = useState<number[]>([]);

    useEffect(() => {
        // Measure exact dot positions relative to the container
        const calculateThresholds = () => {
            if (containerRef.current && stepsRef.current.length > 0) {
                const containerHeight = containerRef.current.offsetHeight;
                const newThresholds = stepsRef.current.map(step => {
                    if (!step) return 0;
                    // The dot is positioned at top-10 (approx 40px)
                    // We add a tiny buffer to make it pop exactly when the line centers on the dot
                    return (step.offsetTop + 40) / containerHeight;
                });
                setStepThresholds(newThresholds);
            }
        };

        calculateThresholds();
        window.addEventListener('resize', calculateThresholds);
        return () => window.removeEventListener('resize', calculateThresholds);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const vh = window.innerHeight;

            // The "Writing Pen" point - where the line is being drawn
            // We set this to 60% of the screen height for optimal viewing
            const triggerPoint = vh * 0.60;

            // Calculate how far the container top is from the trigger point
            // If container top is AT the trigger point, progress is 0.
            const distFromTop = triggerPoint - rect.top;

            // Progress is purely: "How much of the container height is covered by the line?"
            const progress = Math.min(Math.max(distFromTop / rect.height, 0), 1);

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-sm block mb-6">Execution Path</span>
                    <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-none tracking-tighter uppercase">THE ROADMAP</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        אנחנו מלווים אתכם יד ביד בכל שלב בדרך לבניית תיק נכסים יציב ורווחי בטקסס.
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-4xl mx-auto pr-6 md:pr-12">
                    {/* The Guide Line - Minimalist and High-Tech */}
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-slate-100 rounded-full">
                        <div
                            className="absolute top-0 right-0 w-full bg-gold shadow-[0_0_15px_rgba(245,196,81,0.5)] transition-all duration-100 ease-linear"
                            style={{ height: `${scrollProgress * 100}%` }}
                        />
                    </div>

                    {/* Stages Stack */}
                    <div className="flex flex-col gap-16">
                        {FULL_SUPPORT.map((step, idx) => {
                            const threshold = stepThresholds[idx] || 0;
                            // A step is COMPLETED if the line has passed its dot (plus a margin to next)
                            // A step is ACTIVE if line has reached its dot but not yet the next one

                            // To ensure strict sync:
                            // If we have precise thresholds, use them.
                            // Fallback to simple math if thresholds aren't ready (first render).
                            const effectiveThreshold = threshold > 0 ? threshold : (idx + 0.1) / FULL_SUPPORT.length;
                            const nextThreshold = stepThresholds[idx + 1] || 1.1;

                            const isReached = scrollProgress >= effectiveThreshold;
                            const isNextReached = scrollProgress >= nextThreshold;

                            const isActive = isReached && !isNextReached;
                            const isCompleted = isNextReached;

                            return (
                                <div key={step.id} ref={el => stepsRef.current[idx] = el}>
                                    <RoadmapStep
                                        step={step}
                                        isActive={isActive}
                                        isCompleted={isCompleted}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Simple Conclusion CTA */}
                    <div className="mt-20 text-center">
                        <button
                            onClick={onScrollToContact}
                            className="bg-navy text-gold px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                        >
                            בואו נצא לדרך <ArrowLeft size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
