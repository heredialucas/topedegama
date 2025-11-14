'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepProps = {
    formData: FormData;
    updateFormData: (updates: Partial<FormData>) => void;
};

export const StepGuests = ({ formData, updateFormData }: StepProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <label className="block text-gray-800 dark:text-white font-bold text-2xl mb-4 text-center var(--font-nunito)">
                ¿Cuántas personas asistirán?
            </label>
            <input
                type="number"
                value={formData.guests}
                onChange={(e) => updateFormData({ guests: e.target.value })}
                placeholder="Ej: 50"
                min="1"
                autoFocus
                className="w-full px-4 py-4 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#0d4b3d] focus:border-[#0d4b3d] transition-all"
            />
        </motion.div>
    );
};
