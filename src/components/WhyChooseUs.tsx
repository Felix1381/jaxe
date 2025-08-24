'use client';

import { MapPin, Palette, Search, HeadphonesIcon, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleInSpring } from '@/utils/animations';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expertise Locale",
      description: "Basés au Togo, nous comprenons parfaitement les besoins du marché africain et offrons une proximité culturelle unique.",
      icon: MapPin,
      color: "text-blue-600 dark:text-gray-400",
      bg: "bg-blue-500/10",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design & Marketing",
      description: "Nous combinons esthétique moderne et stratégies de conversion pour transformer vos visiteurs en clients fidèles.",
      icon: Palette,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Optimisé",
      description: "Référencement naturel intégré dès la conception, optimisé pour le marché togolais et africain.",
      icon: Search,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Support 24/7",
      description: "Accompagnement personnalisé, formation de vos équipes et support technique continu.",
      icon: HeadphonesIcon,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-500/10",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Qualité Garantie",
      description: "Standards internationaux, tests rigoureux et garantie de satisfaction pour tous nos projets.",
      icon: Award,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-500/10",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Équipe Experte",
      description: "Développeurs seniors, designers créatifs et consultants marketing pour couvrir tous vos besoins.",
      icon: Users,
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-500/10",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projets Réalisés" },
    { number: "98%", label: "Clients Satisfaits" },
    { number: "24/7", label: "Support Disponible" },
    { number: "5★", label: "Note Moyenne" }
  ];

  return (
    <motion.section 
      id="why-choose-us" 
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Pourquoi Choisir <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                scale: 1.05
              }}
            >
              JAXE TECH
            </motion.span> ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Votre partenaire de confiance pour transformer vos idées en solutions digitales performantes
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderColor: "#3b82f6",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`mb-6 flex items-center justify-center w-16 h-16 ${reason.bg} rounded-xl`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      backgroundColor: reason.bg.replace('/10', '/20')
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        y: [0, -3, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      <IconComponent className={`w-8 h-8 ${reason.color}`} />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                      {reason.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {reason.description}
                    </motion.p>
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-blue-100 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
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
              Rejoignez nos clients satisfaits
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Faites confiance à notre expertise pour propulser votre entreprise vers le succès digital.
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
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Award className="w-5 h-5 mr-2" />
              </motion.div>
              <span className="relative z-10">Commencer mon projet</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;


