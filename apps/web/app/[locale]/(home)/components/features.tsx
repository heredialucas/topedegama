'use client';

import type { Dictionary } from '@repo/internationalization';
import { Wine, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeIn } from '../lib/animations';
import pedidosPorDia from '@/public/barra.jpeg';
import piePorCategorias from '@/public/barra2.jpeg';
import tablaIngresos from '@/public/barra4.jpeg';

type FeaturesProps = {
  dictionary: Dictionary & {
    web: {
      home: {
        features: {
          featureOne?: {
            title?: string;
            paragraph?: string;
          };
          featureTwo?: {
            title?: string;
            paragraph?: string;
          };
          featureThree?: {
            title?: string;
            paragraph?: string;
          };
        };
      };
    };
  };
};

export const Features = ({ dictionary }: FeaturesProps) => {
  const features = [
    {
      icon: <Wine className="w-6 h-6 text-[#0d4b3d] dark:text-white" />,
      title: dictionary.web.home.features.featureOne?.title || "Tragos Premium",
      description: dictionary.web.home.features.featureOne?.paragraph || "Variedad de tragos de autor y clásicos preparados por bartenders profesionales con ingredientes de primera calidad."
    },
    {
      icon: <Users className="w-6 h-6 text-[#0d4b3d] dark:text-white" />,
      title: dictionary.web.home.features.featureTwo?.title || "Servicio Personalizado",
      description: dictionary.web.home.features.featureTwo?.paragraph || "Atención exclusiva y adaptada a tu evento. Nos encargamos de todo para que disfrutes sin preocupaciones."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0d4b3d] dark:text-white" />,
      title: dictionary.web.home.features.featureThree?.title || "Servicio Puntual",
      description: dictionary.web.home.features.featureThree?.paragraph || "Llegamos a tiempo, montamos la barra y garantizamos un servicio impecable durante todo tu evento."
    }
  ];

  return (
    <motion.section
      id="features"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full py-20 lg:py-40 relative bg-[#0d4b3d]/5 dark:bg-[#0d4b3d]/10"
    >
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-1/2 w-40 h-40 bg-[#0d4b3d]/20 dark:bg-[#0d4b3d]/10 rounded-full blur-2xl"></div>
          <div className="absolute right-20 bottom-1/4 w-32 h-32 bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#0d4b3d]/40 dark:bg-[#0d4b3d]/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#0d4b3d]/20 dark:bg-[#0d4b3d]/10 rounded-full"></div>
        </div>

        {/* Header */}
        <motion.div variants={fadeIn} className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 var(--font-nunito)">
            {dictionary.web.home.features.title || "¿Por Qué Elegirnos?"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0d4b3d]/70 to-[#0d4b3d] rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto var(--font-nunito)">
            {dictionary.web.home.features.paragraph || "Hacemos de tu evento una experiencia única con el mejor servicio de catering de bebidas"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-[#0d4b3d]/20 dark:border-[#0d4b3d]/30 hover:border-[#0d4b3d]/40 dark:hover:border-[#0d4b3d]/50 transition-all hover:shadow-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 var(--font-nunito)">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 var(--font-nunito)">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Images section */}
          <motion.div
            className="flex justify-center items-center mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }}
          >
            <div className="relative w-full max-w-md md:max-w-2xl h-[300px] md:h-[400px] lg:h-[550px]">
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -15 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute top-2 left-2 md:top-5 md:left-5 w-40 md:w-64 lg:w-80 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-2 md:p-4 flex flex-col justify-center items-center transform -rotate-12 z-10"
              >
                <Image src={pedidosPorDia} alt={dictionary.web.home.features.featureOne?.title || "Tragos Premium"} className="w-full h-auto object-contain mb-1 md:mb-2 rounded-md" />
                <h3 className="text-xs md:text-base lg:text-lg font-bold text-center text-gray-800 dark:text-white">{dictionary.web.home.features.featureOne?.title || "Tragos Premium"}</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-2 left-10 md:bottom-5 md:left-20 w-48 md:w-72 lg:w-96 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-2 md:p-4 flex flex-col justify-center items-center transform rotate-6 z-20"
              >
                <Image src={piePorCategorias} alt={dictionary.web.home.features.featureTwo?.title || "Servicio Personalizado"} className="w-full h-auto object-contain mb-1 md:mb-2 rounded-md" />
                <h3 className="text-xs md:text-base lg:text-lg font-bold text-center text-gray-800 dark:text-white">{dictionary.web.home.features.featureTwo?.title || "Servicio Personalizado"}</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute top-5 right-2 md:top-10 md:right-5 w-40 md:w-64 lg:w-80 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-2 md:p-4 flex flex-col justify-center items-center transform rotate-12 z-10"
              >
                <Image src={tablaIngresos} alt={dictionary.web.home.features.featureThree?.title || "Servicio Puntual"} className="w-full h-auto object-contain mb-1 md:mb-2 rounded-md" />
                <h3 className="text-xs md:text-base lg:text-lg font-bold text-center text-gray-800 dark:text-white">{dictionary.web.home.features.featureThree?.title || "Servicio Puntual"}</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
