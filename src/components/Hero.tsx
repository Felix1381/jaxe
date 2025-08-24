'use client';

import { ArrowRight, Code, Smartphone, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem, scaleInSpring, fadeIn } from '@/utils/animations';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
            variants={fadeInDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-4 h-4 mr-2" />
            </motion.div>
            Agence digitale basée au Togo
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={staggerItem}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformez votre vision en{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
              }}
            >
              réalité digitale
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            JAXE TECH accompagne les entreprises togolaises et africaines dans leur transformation digitale avec des solutions web et mobiles innovantes, performantes et sur mesure.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={staggerItem}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg flex items-center justify-center overflow-hidden"
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Démarrer votre projet</span>
              <motion.div
                className="relative z-10 ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            <motion.button 
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-lg font-semibold flex items-center justify-center"
              onClick={scrollToAbout}
              whileHover={{ 
                scale: 1.05,
                borderColor: "#3b82f6",
                color: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Découvrir nos services
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 dark:text-gray-400"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: '50+', label: 'Projets réalisés', icon: Code },
            { number: '5+', label: 'Années d\'expérience', icon: Globe },
            { number: '98%', label: 'Clients satisfaits', icon: Smartphone }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4"
                  whileHover={{ 
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Technologies */}
        <motion.div 
          className="text-center dark:text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.p 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Technologies que nous maîtrisons
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {['React', 'Next.js', 'Node.js', 'Python', 'WordPress', 'Shopify'].map((tech, index) => (
              <motion.div 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground cursor-pointer"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.4, 
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  color: "#3b82f6",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  backgroundColor: "rgba(59, 130, 246, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border"
          aria-label="Scroll to next section"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderColor: "rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
