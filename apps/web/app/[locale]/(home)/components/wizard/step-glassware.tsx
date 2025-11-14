'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepProps = {
    formData: FormData;
    updateFormData: (updates: Partial<FormData>) => void;
};

export const StepGlassware = ({ formData, updateFormData }: StepProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <label className="block text-gray-800 dark:text-white font-bold text-2xl mb-6 text-center var(--font-nunito)">
                ¿Necesitás cristalería?
            </label>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                    type="button"
                    onClick={() => updateFormData({ needsGlassware: 'si' })}
                    className={`p-8 rounded-xl border-2 transition-all ${formData.needsGlassware === 'si'
                            ? 'border-[#0d4b3d] bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-[#0d4b3d]/50'
                        }`}
                >
                    <div className="text-5xl mb-3">🥂</div>
                    <div className="text-xl font-bold text-gray-800 dark:text-white">Sí</div>
                </button>
                <button
                    type="button"
                    onClick={() => updateFormData({ needsGlassware: 'no' })}
                    className={`p-8 rounded-xl border-2 transition-all ${formData.needsGlassware === 'no'
                            ? 'border-[#0d4b3d] bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-[#0d4b3d]/50'
                        }`}
                >
                    <div className="text-5xl mb-3">🙅‍♂️</div>
                    <div className="text-xl font-bold text-gray-800 dark:text-white">No</div>
                </button>
            </div>
        </motion.div>
    );
};
