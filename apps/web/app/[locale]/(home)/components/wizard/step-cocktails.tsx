'use client';

import { motion } from 'framer-motion';
import type { FormData } from './types';

type StepProps = {
    formData: FormData;
    updateFormData: (updates: Partial<FormData>) => void;
};

const cocktails = [
    'Gin', 'Fernet', 'Cerveza', 'Daiquiri', 'Aperol', 'Negroni',
    'Garibaldi (Campari)', 'Mojito', 'Sex on the Beach', 'Caipiroska',
    'Cuba Libre', 'Baileys Frozen', 'Whisky'
];

const nonAlcoholicDrinks = [
    { key: 'gaseosas', label: 'Gaseosas' },
    { key: 'jugos', label: 'Jugos' },
    { key: 'aguaMineral', label: 'Agua Mineral' },
    { key: 'soda', label: 'Soda' },
];

export const StepCocktails = ({ formData, updateFormData }: StepProps) => {
    const toggleCocktail = (cocktail: string) => {
        const newCocktails = formData.selectedCocktails.includes(cocktail)
            ? formData.selectedCocktails.filter(c => c !== cocktail)
            : [...formData.selectedCocktails, cocktail];
        updateFormData({ selectedCocktails: newCocktails });
    };

    const toggleNonAlcoholic = (key: string) => {
        updateFormData({ [key]: !formData[key as keyof FormData] });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <label className="block text-gray-800 dark:text-white font-bold text-2xl mb-4 text-center var(--font-nunito)">
                ¿Qué bebidas te gustaría incluir?
            </label>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
                (Opcional - Podés seleccionar las que prefieras)
            </p>

            {/* Cocktails */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Tragos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    {cocktails.map((cocktail) => (
                        <label key={cocktail} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <input
                                type="checkbox"
                                checked={formData.selectedCocktails.includes(cocktail)}
                                onChange={() => toggleCocktail(cocktail)}
                                className="w-4 h-4 rounded border-gray-300 text-[#0d4b3d] focus:ring-[#0d4b3d]"
                            />
                            <span className="text-sm text-gray-800 dark:text-white">{cocktail}</span>
                        </label>
                    ))}
                </div>
                {/* Otra bebida */}
                <div className="flex items-center gap-2 mt-4 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <span className="text-sm text-gray-800 dark:text-white">Otra bebida:</span>
                    <input
                        type="text"
                        value={formData.otherCocktail || ''}
                        onChange={e => updateFormData({ otherCocktail: e.target.value })}
                        placeholder="Escribí la bebida..."
                        className="flex-1 px-2 py-1 rounded border border-gray-300 focus:border-[#0d4b3d] focus:outline-none text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
                    />
                </div>
            </div>

            {/* Non-alcoholic drinks */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Bebidas Sin Alcohol</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {nonAlcoholicDrinks.map((drink) => (
                        <label key={drink.key} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <input
                                type="checkbox"
                                checked={formData[drink.key as keyof FormData] as boolean}
                                onChange={() => toggleNonAlcoholic(drink.key)}
                                className="w-4 h-4 rounded border-gray-300 text-[#0d4b3d] focus:ring-[#0d4b3d]"
                            />
                            <span className="text-sm text-gray-800 dark:text-white">{drink.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
