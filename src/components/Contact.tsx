'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleInSpring } from '@/utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Validation côté client
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      // Envoi des données à l'API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi du message');
      }

      // Succès
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@jaxetech.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+228 97 99 99 43",
      description: "Lun-Ven 8h-18h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Lomé, Togo",
      description: "Afrique de l'Ouest"
    }
  ];

  const services = [
    "Développement Web",
    "Application Mobile",
    "E-commerce",
    "Refonte de Site",
    "SEO & Marketing",
    "Autre"
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
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
            Contactez <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                scale: 1.05
              }}
            >
              JAXE TECH
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Prêt à démarrer votre projet ? Discutons ensemble de vos besoins et transformons vos idées en réalité.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={staggerItem}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                  whileHover={{ scale: 1.02, color: "#3b82f6" }}
                >
                  Restons en contact
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-8"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                >
                  Notre équipe est là pour vous accompagner dans tous vos projets digitaux. N&apos;hésitez pas à nous contacter pour discuter de vos besoins.
                </motion.p>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                      variants={staggerItem}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        borderColor: "#3b82f6"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(59, 130, 246, 0.4)",
                              "0 0 0 10px rgba(59, 130, 246, 0)",
                              "0 0 0 0 rgba(59, 130, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        >
                          <motion.div
                            animate={{ 
                              y: [0, -2, 0],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <motion.h4 
                          className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                          whileHover={{ color: "#3b82f6" }}
                        >
                          {info.title}
                        </motion.h4>
                        <motion.p 
                          className="text-blue-600 dark:text-blue-400 font-medium mb-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          {info.value}
                        </motion.p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                }}
              >
                <motion.div 
                  className="flex items-center space-x-3 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <motion.h4 
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    Réponse rapide garantie
                  </motion.h4>
                </motion.div>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Nous nous engageons à répondre à votre demande dans les 24h ouvrées.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                  whileHover={{ scale: 1.02, color: "#3b82f6" }}
                >
                  Démarrons votre projet
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                >
                  Remplissez ce formulaire et nous vous recontacterons rapidement.
                </motion.p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  variants={staggerItem}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg overflow-hidden relative"
                    whileHover={!isSubmitting ? { 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    animate={isSubmitting ? { 
                      backgroundImage: [
                        "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                        "linear-gradient(45deg, #8b5cf6, #3b82f6)",
                        "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          ></motion.div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <motion.div
                            animate={{ 
                              x: [0, 3, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Send className="w-5 h-5 mr-2" />
                          </motion.div>
                          Envoyer ma demande
                        </>
                      )}
                    </div>
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <p className="text-green-800 dark:text-green-200 font-medium">
                          Message envoyé avec succès !
                        </p>
                        <p className="text-green-600 dark:text-green-400 text-sm">
                          Nous vous recontacterons dans les plus brefs délais.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      className="flex items-center space-x-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <p className="text-red-800 dark:text-red-200 font-medium">
                          Erreur lors de l&apos;envoi
                        </p>
                        <p className="text-red-600 dark:text-red-400 text-sm">
                          Veuillez réessayer ou nous contacter directement.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    
  );
};

export default Contact;

