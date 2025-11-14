'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProgressBar } from './wizard/progress-bar';
import { StepName } from './wizard/step-name';
import { StepEventType } from './wizard/step-event-type';
import { StepDate } from './wizard/step-date';
import { StepGuests } from './wizard/step-guests';
import { StepTime } from './wizard/step-time';
import { StepVenue } from './wizard/step-venue';
import { StepCocktails } from './wizard/step-cocktails';
import { StepGlassware } from './wizard/step-glassware';
import { StepConfirmation } from './wizard/step-confirmation';
import { NavigationButtons } from './wizard/navigation-buttons';
import type { FormData } from './wizard/types';

const totalSteps = 9;

export const CateringWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        eventType: '',
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        venue: '',
        guests: '',
        selectedCocktails: [],
        needsGlassware: '',
        gaseosas: false,
        jugos: false,
        aguaMineral: false,
        soda: false,
    });

    const updateFormData = (updates: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const restartForm = () => {
        setCurrentStep(0);
        setFormData({
            eventType: '',
            name: '',
            date: '',
            startTime: '',
            endTime: '',
            venue: '',
            guests: '',
            selectedCocktails: [],
            needsGlassware: '',
            gaseosas: false,
            jugos: false,
            aguaMineral: false,
            soda: false,
        });
    };

    const canProceed = () => {
        switch (currentStep) {
            case 0: return formData.name.trim() !== '';
            case 1: return formData.eventType !== '';
            case 2: return formData.date !== '';
            case 3: return formData.guests !== '';
            case 4: return formData.startTime !== '' && formData.endTime !== '';
            case 5: return formData.venue.trim() !== '';
            case 6: return true; // Tragos opcionales
            case 7: return formData.needsGlassware !== '';
            default: return true;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col"
        >
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            <div className="flex-1 flex items-center justify-center py-8">
                {currentStep === 0 && <StepName formData={formData} updateFormData={updateFormData} />}
                {currentStep === 1 && <StepEventType formData={formData} updateFormData={updateFormData} />}
                {currentStep === 2 && <StepDate formData={formData} updateFormData={updateFormData} />}
                {currentStep === 3 && <StepGuests formData={formData} updateFormData={updateFormData} />}
                {currentStep === 4 && <StepTime formData={formData} updateFormData={updateFormData} />}
                {currentStep === 5 && <StepVenue formData={formData} updateFormData={updateFormData} />}
                {currentStep === 6 && <StepCocktails formData={formData} updateFormData={updateFormData} />}
                {currentStep === 7 && <StepGlassware formData={formData} updateFormData={updateFormData} />}
                {currentStep === 8 && <StepConfirmation onRestart={restartForm} />}
            </div>

            {currentStep < 8 && (
                <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    canProceed={canProceed()}
                    onNext={nextStep}
                    onPrev={prevStep}
                    formData={formData}
                    onSendWhatsApp={nextStep}
                />
            )}
        </motion.div>
    );
};
