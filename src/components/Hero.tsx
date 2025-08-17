'use client';

import { ArrowRight, Code, Smartphone, Globe, ChevronDown } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Globe className="w-4 h-4 mr-2" />
            Agence digitale basée au Togo
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transformez votre vision en{' '}
            <span className="gradient-text block mt-2">
              réalité digitale
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            JAXE TECH accompagne les entreprises togolaises et africaines dans leur transformation digitale avec des solutions web et mobiles innovantes, performantes et sur mesure.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button 
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
              onClick={scrollToContact}
            >
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              className="group px-8 py-4 border-2 border-border hover:border-primary text-foreground hover:text-primary rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-accent/50 flex items-center justify-center"
              onClick={scrollToAbout}
            >
              Découvrir nos services
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { number: '50+', label: 'Projets réalisés', icon: Code },
            { number: '5+', label: 'Années d\'expérience', icon: Globe },
            { number: '100%', label: 'Clients satisfaits', icon: Smartphone }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Technologies */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-muted-foreground mb-8">Technologies que nous maîtrisons</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {['React', 'Next.js', 'Node.js', 'Python', 'WordPress', 'Shopify'].map((tech, index) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/50 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
