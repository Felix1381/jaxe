'use client';

import { MapPin, Users, Trophy, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            À propos de nous
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Votre partenaire
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              technologique au Togo
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Depuis notre création, nous nous engageons à fournir des solutions digitales d&apos;excellence qui transforment les entreprises africaines. Notre approche combine innovation technologique et compréhension profonde du marché local.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Située à <span className="font-semibold text-blue-600 dark:text-blue-400">Lomé</span>, JAXE TECH accompagne les entreprises togolaises et 
              africaines dans leur transformation digitale. Nous allions expertise technique, 
              design moderne et stratégie marketing pour que chaque projet devienne un 
              <span className="font-semibold gradient-text"> {' '}levier de croissance durable</span>.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 dark:text-gray-400">
              {[
                {
                  icon: MapPin,
                  title: "Expertise Locale",
                  description: "Connaissance approfondie du marché togolais et africain",
                  color: "text-gray-600 dark:text-gray-400",
                  bg: "bg-blue-500/10"
                },
                {
                  icon: Zap,
                  title: "Solutions Innovantes",
                  description: "Technologies modernes et performantes",
                  color: "text-green-600 dark:text-green-400",
                  bg: "bg-green-500/10"
                },
                {
                  icon: Users,
                  title: "Équipe Experte",
                  description: "Développeurs passionnés et créatifs",
                  color: "text-purple-600 dark:text-purple-400",
                  bg: "bg-purple-500/10"
                },
                {
                  icon: Trophy,
                  title: "Résultats Prouvés",
                  description: "Projets réussis et clients satisfaits",
                  color: "text-orange-600 dark:text-orange-400",
                  bg: "bg-orange-500/10"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Content */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg dark:text-gray-400">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Notre Mission</h3>
                  <p className="text-muted-foreground">
                    Démocratiser l&apos;accès aux technologies digitales pour les entreprises africaines
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-xs text-muted-foreground">Projets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-muted-foreground">Années</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaits</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default About;
//                   <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Stratégie Marketing</h3>
//                   <p className="text-gray-600 text-sm">Focus sur la conversion et la croissance</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Support Continu</h3>
//                   <p className="text-gray-600 text-sm">Accompagnement personnalisé et suivi</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
//               <div className="text-center">
//                 <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Basée à Lomé</h3>
//                 <p className="text-gray-600">Au cœur du Togo, connectée à l'Afrique</p>
//                 <div className="mt-6 flex justify-center space-x-4">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-blue-600">50+</div>
//                     <div className="text-sm text-gray-600">Projets réalisés</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-green-600">3+</div>
//                     <div className="text-sm text-gray-600">Années d'expérience</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-purple-600">100%</div>
//                     <div className="text-sm text-gray-600">Clients satisfaits</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-200 rounded-full opacity-60"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default About;
