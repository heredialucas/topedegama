'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepProps = {
    formData: FormData;
    updateFormData: (updates: Partial<FormData>) => void;
};

const eventTypes = [
    { value: 'cumpleaños', label: 'Cumpleaños', emoji: '🎂' },
    { value: 'casamiento', label: 'Casamiento', emoji: '💒' },
    { value: 'recibida', label: 'Recibida', emoji: '🎓' },
    { value: 'empresarial', label: 'Empresarial', emoji: '💼' },
];

export const StepEventType = ({ formData, updateFormData }: StepProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <label className="block text-gray-800 dark:text-white font-bold text-2xl mb-6 text-center var(--font-nunito)">
                ¿Qué tipo de evento es?
            </label>
            <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((type) => (
                    <button
                        key={type.value}
                        type="button"
                        onClick={() => updateFormData({ eventType: type.value })}
                        className={`p-6 rounded-xl border-2 transition-all ${formData.eventType === type.value
                                ? 'border-[#0d4b3d] bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20'
                                : 'border-gray-300 dark:border-gray-600 hover:border-[#0d4b3d]/50'
                            }`}
                    >
                        <div className="text-4xl mb-2">{type.emoji}</div>
                        <div className="text-lg font-semibold text-gray-800 dark:text-white">{type.label}</div>
                    </button>
                ))}
            </div>
        </motion.div>
    );
};
