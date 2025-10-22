import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import robertImage from "@/assets/robert-katz.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              אודות
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              רוברט כץ
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-spiritual rounded-full blur-xl opacity-30"></div>
                <img 
                  src={robertImage} 
                  alt="רוברט כץ - מנטור רוחני ומנחה מדיטציה"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              רוברט כץ
            </h2>

            {/* Description */}
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                מנטור רוחני, מנחה קבוצות וצוותי חינוך
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                מרצה ומנחה קורסי התפתחות ומדיטציה ע״פ לוגיקת הלב
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link 
                to="/#courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-spiritual text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>לקורסים</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
