'use client';

import type { Dictionary } from '@repo/internationalization';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../lib/animations';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import logoWithBg from '@/public/logo.png';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type StatsProps = {
  dictionary: Dictionary & {
    web: {
      home: {
        stats: {
          process?: { title?: string; description?: string }[];
          description?: string;
        };
      };
    };
  };
};

export const Stats = ({ dictionary }: StatsProps) => {
  const steps = [
    {
      title: dictionary.web.home.stats.process?.[0]?.title || "Solicita tu Presupuesto",
      description: dictionary.web.home.stats.process?.[0]?.description || "Completa nuestro formulario online con los detalles de tu evento y recibe tu cotización por WhatsApp."
    },
    {
      title: dictionary.web.home.stats.process?.[1]?.title || "Personalizamos tu Servicio",
      description: dictionary.web.home.stats.process?.[1]?.description || "Coordinamos contigo la carta de tragos, bebidas sin alcohol y todos los detalles para tu evento."
    },
    {
      title: dictionary.web.home.stats.process?.[2]?.title || "Preparamos Todo",
      description: dictionary.web.home.stats.process?.[2]?.description || "Nuestro equipo se encarga de conseguir insumos premium, cristalería y equipamiento necesario."
    },
    {
      title: dictionary.web.home.stats.process?.[3]?.title || "Disfrutá tu Evento",
      description: dictionary.web.home.stats.process?.[3]?.description || "Llegamos puntuales, montamos la barra y brindamos un servicio profesional durante todo tu evento."
    }
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="container mx-auto px-4 py-16 relative"
      id="stats"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute left-1/4 top-1/2 w-1 h-1 bg-[#0d4b3d]/40 dark:bg-[#0d4b3d]/20 rounded-full"></div>

      {/* Header */}
      <motion.div
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 var(--font-nunito)">
          {dictionary.web.home.stats.title || "Nuestro Proceso de Trabajo"}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#0d4b3d]/70 to-[#0d4b3d] rounded-full mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto var(--font-nunito)">
          {dictionary.web.home.stats.description || "Desde tu cotización hasta el brindis final, nos encargamos de cada detalle para que tu evento sea inolvidable."}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-[#0d4b3d]/10 dark:bg-[#0d4b3d]/20 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-[#0d4b3d] dark:text-white">
                  {index + 1}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-[#0d4b3d]/20 dark:bg-[#0d4b3d]/30 -translate-y-1/2"></div>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 var(--font-nunito)">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 var(--font-nunito) max-w-xs mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* App Preview Image with animation */}
      <motion.div
        variants={fadeIn}
        className="mt-20 flex justify-center"
      >
        <motion.div
          className="relative max-w-sm lg:max-w-2xl"
          animate={{
            y: [0, -10, 0],
            transition: {
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            }
          }}
        >
          <Image
            src={logoWithBg}
            alt="TopeDeGama App"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
