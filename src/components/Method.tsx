'use client';

import { Search, Palette, Code, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleInSpring } from '@/utils/animations';

const Method = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse de vos besoins",
      description: "Nous étudions votre secteur, vos objectifs et votre audience pour définir la stratégie optimale.",
      icon: Search,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-gray-500/10 dark:bg-blue-500/10",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Conception & Prototypage",
      description: "Création de maquettes détaillées et prototypes interactifs pour valider l'expérience utilisateur.",
      icon: Palette,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Développement",
      description: "Développement avec les dernières technologies, en respectant les standards de qualité et de performance.",
      icon: Code,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Tests et optimisation",
      description: "Tests rigoureux et optimisation des performances pour garantir une expérience utilisateur optimale.",
      icon: CheckCircle,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-500/10",
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "05",
      title: "Déploiement et suivi",
      description: "Mise en ligne sécurisée et accompagnement continu pour assurer le succès de votre projet.",
      icon: Rocket,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-500/10",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <motion.section 
      id="method" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={staggerItem}
          >
            Notre <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                scale: 1.05
              }}
            >
              Méthode
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Une approche structurée et éprouvée pour transformer vos idées en solutions digitales performantes
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    borderColor: "#3b82f6"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number */}
                  <motion.div 
                    className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0]
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className={`mb-6 flex items-center justify-center w-16 h-16 ${step.bg} rounded-xl`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      backgroundColor: step.bg.replace('/10', '/20')
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        y: [0, -2, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white"
                      whileHover={{ 
                        color: "#3b82f6",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Connection Line for larger screens */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Prêt à démarrer votre projet ?
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discutons de vos besoins et découvrons comment notre méthode peut transformer vos idées en réalité.
            </motion.p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden relative"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-5 h-5 mr-2" />
              </motion.div>
              <span className="relative z-10">Commencer mon projet</span>
              <motion.div
                className="relative z-10 ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Method;
