'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepResultProps = {
    estimate: number | null;
    formData: FormData;
};

export const StepResult = ({ estimate, formData }: StepResultProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center"
        >
            <div className="mb-6">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 var(--font-nunito)">
                    ¡Listo, {formData.name}!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Tu presupuesto para el {formData.eventType} está calculado
                </p>
            </div>

            <div className="bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20 rounded-xl border-2 border-[#0d4b3d] p-8 mb-6">
                <p className="text-gray-800 dark:text-white font-semibold mb-2">
                    Presupuesto Estimado:
                </p>
                <p className="text-5xl font-bold text-[#0d4b3d] dark:text-white mb-2">
                    ${estimate?.toLocaleString('es-AR')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    *Presupuesto aproximado sujeto a confirmación
                </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-left text-sm space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fecha:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Invitados:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Horario:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">
                        {formData.startTime} - {formData.endTime}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Lugar:</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{formData.venue}</span>
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm">
                Nos pondremos en contacto contigo pronto para confirmar todos los detalles.
            </p>
        </motion.div>
    );
};
