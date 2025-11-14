'use client';

import { motion } from 'framer-motion';

type StepConfirmationProps = {
    onRestart: () => void;
};

export const StepConfirmation = ({ onRestart }: StepConfirmationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center"
        >
            <div className="mb-6">
                <span className="text-6xl">✅</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 var(--font-nunito)">
                ¡Presupuesto Enviado!
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 var(--font-nunito)">
                Tu solicitud ha sido enviada por WhatsApp.
                <br />
                Te responderemos a la brevedad con tu presupuesto personalizado.
            </p>

            <motion.button
                type="button"
                onClick={onRestart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0d4b3d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0d4b3d]/90 transition-all shadow-lg var(--font-nunito)"
            >
                Hacer Otro Presupuesto
            </motion.button>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 var(--font-nunito)">
                ¿Necesitás cotizar otro evento? Hacé clic arriba para empezar de nuevo.
            </p>
        </motion.div>
    );
};
