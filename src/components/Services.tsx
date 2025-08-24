'use client';

import { Monitor, Smartphone, Cog, ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleInSpring } from '@/utils/animations';

const Services = () => {
  const services = [
    {
      title: "Développement de sites web",
      description: "Sites vitrine, e-commerce et refonte complète avec design moderne et performance optimale",
      features: ["Design responsive", "SEO optimisé", "Performance élevée", "Interface intuitive"],
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Applications web et mobiles",
      description: "Solutions personnalisées pour tous vos besoins avec technologies modernes",
      features: ["Applications web", "Apps mobiles", "Progressive Web Apps", "Interface moderne"],
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      textColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "Solutions technologiques",
      description: "API, automatisation et maintenance pour optimiser vos processus",
      features: ["Développement API", "Automatisation", "Maintenance", "Intégrations"],
      icon: Cog,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-24 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2 
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
            </motion.div>
            Nos Services
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={staggerItem}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Solutions digitales
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              sur mesure
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Des solutions digitales complètes et innovantes pour propulser votre entreprise vers le succès dans l&apos;ère numérique.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 overflow-hidden"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className={`relative w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    backgroundColor: service.bgColor.replace('/10', '/20')
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className={`w-8 h-8 ${service.textColor}`} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                    whileHover={{ color: "#3b82f6", scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features */}
                  <motion.ul 
                    className="space-y-3 mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              duration: 0.3, 
                              delay: featureIndex * 0.1 
                            }
                          }
                        }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div 
                          className={`w-5 h-5 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                          whileHover={{ 
                            scale: 1.2,
                            backgroundColor: service.bgColor.replace('/10', '/20')
                          }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.5 + featureIndex * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <Check className={`w-3 h-3 ${service.textColor}`} />
                          </motion.div>
                        </motion.div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA Button */}
                  <motion.button 
                    className={`group/btn w-full ${service.borderColor} border-2 px-6 py-3 rounded-xl font-semibold ${service.textColor} flex items-center justify-center overflow-hidden relative`}
                    whileHover={{ 
                      backgroundColor: "#3b82f6",
                      color: "#ffffff",
                      borderColor: "#3b82f6",
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">En savoir plus</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
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
              Prêt à transformer votre présence digitale ?
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discutons de votre projet et découvrons ensemble comment JAXE TECH peut vous accompagner
            </motion.p>
            <motion.button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg overflow-hidden relative"
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
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Démarrer mon projet</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
