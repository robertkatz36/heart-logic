const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            המרכז להתפתחות האדם
          </h1>
          <p className="text-2xl md:text-3xl text-blue-900 mb-6 font-semibold">
            לוגיקת הלב
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
