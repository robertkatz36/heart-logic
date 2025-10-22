const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            לוג'יקת הלב
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-6 font-semibold">
            המרכז להתפתחות האדם
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            תכנית קורסים בזום בהנחיית רוברת כץ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              לקורסים
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              צור קשר
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
