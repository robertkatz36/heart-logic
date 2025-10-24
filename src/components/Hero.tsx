const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.png)'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 tracking-tight">
            לוגיקת הלב
          </h1>
          <p className="text-2xl md:text-3xl text-blue-900 mb-6 font-semibold">
            המרכז להתפתחות האדם
          </p>
          <p className="text-lg md:text-xl text-blue-800 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-blue-900 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              אודות
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
