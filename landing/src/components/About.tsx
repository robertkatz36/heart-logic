
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <article className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-spiritual rounded-full blur-xl opacity-30"></div>
              <img
                src={`${import.meta.env.BASE_URL}robert-katz.webp`}
                alt="רוברט כץ - מנטור רוחני ומנחה מדיטציה"
                width={256}
                height={256}
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            רוברט כץ
          </h2>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4 text-lg md:text-xl text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <span>אימון וליווי רוחני</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <span>הנחיית קבוצות וצוותי חינוך</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <span>הרצאות וסדנאות התפתחות</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <span>קורסי מדיטציה</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

