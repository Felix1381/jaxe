'use client';

import { Monitor, Smartphone, Cog, ArrowRight, Check, Sparkles } from 'lucide-react';

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
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Nos Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solutions digitales
            <span className="gradient-text block mt-2">
              sur mesure
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales complètes et innovantes pour propulser votre entreprise vers le succès dans l&apos;ère numérique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${service.textColor}`} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-3 h-3 ${service.textColor}`} />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`group/btn w-full ${service.borderColor} border-2 px-6 py-3 rounded-xl font-semibold ${service.textColor} hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center`}>
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre présence digitale ?
            </h3>
            <p className="text-gray-600 mb-6">
              Discutons de votre projet et découvrons ensemble comment JAXE TECH peut vous accompagner
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Démarrer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
