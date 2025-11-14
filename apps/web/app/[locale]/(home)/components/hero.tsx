'use client';

import type { Dictionary } from '@repo/internationalization';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeIn } from '../lib/animations';
import { CateringWizard } from './catering-wizard';
import barra1 from '@/public/barra5.jpeg';
import barra4 from '@/public/barra3.jpeg';

type HeroProps = {
  dictionary: Dictionary & {
    web: {
      home: {
        hero: {
          heading?: string;
          paragraph?: string;
          subtitle?: string;
        };
      };
    };
  };
};

export const Hero = ({ dictionary }: HeroProps) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="inicio">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - Form */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.div variants={fadeIn} className="text-center lg:text-left mb-4 md:mb-6">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 var(--font-nunito)">
                  {dictionary.web.home.hero.heading || "Tu Evento Merece el Mejor Catering de Bebidas"}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-2 md:mb-3 var(--font-nunito)">
                  {dictionary.web.home.hero.paragraph || "🎉 Cotizá en minutos | 🍸 Tragos premium | 🥂 Servicio profesional"}
                </p>
                <p className="text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400 var(--font-nunito)">
                  {dictionary.web.home.hero.subtitle || "Completá el formulario y recibí tu presupuesto personalizado por WhatsApp al instante"}
                </p>
              </motion.div>

              <CateringWizard />
            </div>

            {/* Right side - Images */}
            <motion.div
              className="flex justify-center items-center mt-8 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }}
            >
              <div className="relative w-full max-w-md lg:max-w-2xl h-[300px] md:h-[400px] lg:h-[550px]">
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -25 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="absolute top-2 left-2 md:top-5 md:left-5 w-48 md:w-64 lg:w-80 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-3 md:p-4 flex flex-col justify-center items-center transform -rotate-12 z-10"
                >
                  <Image
                    src={barra1}
                    alt="Barra profesional de tragos"
                    className="w-full h-auto object-contain mb-2 rounded-md"
                  />
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-center text-gray-800 dark:text-white">Barra Profesional</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="absolute top-5 right-2 md:top-10 md:right-5 w-48 md:w-64 lg:w-80 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-3 md:p-4 flex flex-col justify-center items-center transform rotate-12 z-10"
                >
                  <Image
                    src={barra4}
                    alt="Servicio premium de catering"
                    className="w-full h-auto object-contain mb-2 rounded-md"
                  />
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-center text-gray-800 dark:text-white">Servicio Premium</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
