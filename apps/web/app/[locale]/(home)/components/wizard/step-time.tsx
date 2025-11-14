'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepProps = {
    formData: FormData;
    updateFormData: (updates: Partial<FormData>) => void;
};

export const StepTime = ({ formData, updateFormData }: StepProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <label className="block text-gray-800 dark:text-white font-bold text-2xl mb-6 text-center var(--font-nunito)">
                ¿Qué horario tendrá el evento?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Hora de Inicio
                    </label>
                    <input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => updateFormData({ startTime: e.target.value })}
                        className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#0d4b3d] focus:border-[#0d4b3d] transition-all"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Hora de Cierre
                    </label>
                    <input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => updateFormData({ endTime: e.target.value })}
                        className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#0d4b3d] focus:border-[#0d4b3d] transition-all"
                    />
                </div>
            </div>
        </motion.div>
    );
};
