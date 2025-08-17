'use client';

import { Search, Palette, Code, CheckCircle, Rocket, ArrowRight } from 'lucide-react';

const Method = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse de vos besoins",
      description: "Nous étudions votre secteur, vos objectifs et votre audience pour définir la stratégie optimale.",
      icon: Search,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10",
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
    <section id="method" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Méthode</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une approche structurée et éprouvée pour transformer vos idées en solutions digitales performantes
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 flex items-center justify-center w-16 h-16 ${step.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Connection Line for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Discutons de vos besoins et découvrons comment notre méthode peut transformer vos idées en réalité.
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
              <Rocket className="w-5 h-5 mr-2" />
              Commencer mon projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
