import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center z-10">
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <article className="bg-card/50 rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 tracking-tight">
            המרכז להתפתחות האדם
          </h1>
          <p className="text-2xl md:text-3xl text-blue-900 mb-6 font-semibold">
            לוגיקת הלב
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
