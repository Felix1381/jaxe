'use client';

import { MapPin, Palette, Search, HeadphonesIcon, Award, Users } from 'lucide-react';

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
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi Choisir <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">JAXE TECH</span> ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Votre partenaire de confiance pour transformer vos idées en solutions digitales performantes
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className={`mb-6 flex items-center justify-center w-16 h-16 ${reason.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${reason.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Faites confiance à notre expertise pour propulser votre entreprise vers le succès digital.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Award className="w-5 h-5 mr-2" />
              Commencer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


