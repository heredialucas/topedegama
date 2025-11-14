'use client';

import { motion } from 'framer-motion';

type ProgressBarProps = {
    currentStep: number;
    totalSteps: number;
};

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Paso {currentStep + 1} de {totalSteps}
                </span>
                <span className="text-sm font-semibold text-[#0d4b3d] dark:text-white">
                    {Math.round(((currentStep + 1) / totalSteps) * 100)}%
                </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                    className="bg-[#0d4b3d] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};
