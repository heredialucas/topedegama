'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type NavigationButtonsProps = {
    currentStep: number;
    totalSteps: number;
    canProceed: boolean;
    onNext: () => void;
    onPrev: () => void;
    formData?: FormData;
    onSendWhatsApp?: () => void;
};

export const NavigationButtons = ({
    currentStep,
    totalSteps,
    canProceed,
    onNext,
    onPrev,
    formData,
    onSendWhatsApp
}: NavigationButtonsProps) => {
    const isLastInputStep = currentStep === 7; // Último paso antes de la confirmación
    const isBeforeLastStep = currentStep < totalSteps - 1;

    const sendWhatsAppAndNext = () => {
        if (!formData) return;

        const phoneNumber = '5493814689739'; // Formato internacional sin espacios ni guiones

        // Crear el mensaje con todos los detalles
        const eventTypeNames: Record<string, string> = {
            casamiento: 'Casamiento 💍',
            cumpleaños: 'Cumpleaños 🎂',
            recibida: 'Recibida 🎓',
            empresarial: 'Empresarial 💼',
        };

        const cocktails = formData.selectedCocktails.length > 0
            ? formData.selectedCocktails.join(', ')
            : 'Ninguno';

        const nonAlcoholic = [];
        if (formData.gaseosas) nonAlcoholic.push('Gaseosas');
        if (formData.jugos) nonAlcoholic.push('Jugos');
        if (formData.aguaMineral) nonAlcoholic.push('Agua Mineral');
        if (formData.soda) nonAlcoholic.push('Soda');

        const message = `
¡Hola! 👋 Solicito presupuesto de catering de bebidas:

*DATOS DEL EVENTO*
━━━━━━━━━━━━━━━━
👤 Nombre: ${formData.name}
🎉 Tipo de Evento: ${eventTypeNames[formData.eventType] || formData.eventType}
📅 Fecha: ${formData.date}
👥 Cantidad de Personas: ${formData.guests}
⏰ Horario: ${formData.startTime} - ${formData.endTime}
📍 Lugar: ${formData.venue}

*BEBIDAS SELECCIONADAS*
━━━━━━━━━━━━━━━━
🍸 Tragos: ${cocktails}
🥤 Sin Alcohol: ${nonAlcoholic.length > 0 ? nonAlcoholic.join(', ') : 'Ninguno'}
🥂 Cristalería: ${formData.needsGlassware === 'si' ? 'Sí' : 'No'}

¡Espero su respuesta con el presupuesto! 🙏
    `.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Avanzar al paso de confirmación
        if (onSendWhatsApp) {
            onSendWhatsApp();
        }
    };

    return (
        <div className="flex gap-3 mt-6">
            {/* Botón Anterior - se muestra en todos los pasos excepto el primero y el de confirmación */}
            {currentStep > 0 && isBeforeLastStep && (
                <motion.button
                    type="button"
                    onClick={onPrev}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${isLastInputStep ? 'w-1/3' : 'flex-1'
                        }`}
                >
                    Anterior
                </motion.button>
            )}

            {/* Botón Siguiente - solo en pasos del 1 al 6 */}
            {!isLastInputStep && isBeforeLastStep && (
                <motion.button
                    type="button"
                    onClick={onNext}
                    disabled={!canProceed}
                    whileHover={canProceed ? { scale: 1.02 } : {}}
                    whileTap={canProceed ? { scale: 0.98 } : {}}
                    className={`flex-1 py-3 rounded-lg font-bold transition-all ${canProceed
                        ? 'bg-[#0d4b3d] text-white hover:bg-[#0d4b3d]/90'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Siguiente
                </motion.button>
            )}

            {/* Botón WhatsApp - solo en el paso 8 (último paso de entrada) */}
            {isLastInputStep && (
                <motion.button
                    type="button"
                    onClick={sendWhatsAppAndNext}
                    disabled={!canProceed}
                    whileHover={canProceed ? { scale: 1.02 } : {}}
                    whileTap={canProceed ? { scale: 0.98 } : {}}
                    className={`flex-1 py-4 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${canProceed
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    <span className="text-2xl">📱</span>
                    Enviar Presupuesto por WhatsApp
                </motion.button>
            )}
        </div>
    );
};
