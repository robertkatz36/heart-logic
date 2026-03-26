import { Calendar } from "lucide-react";
import React from "react";

interface Cycle {
  name: string;
  schedule?: string;
  opening?: string;
}

interface CourseCardProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  cycles: Cycle[];
  price: string;
  meetingInfo?: string;
  delay?: number;
  featured?: boolean;
  onRegister?: (courseTitle: string) => void;
}

const CourseCard = ({ title, subtitle, description, cycles, price, meetingInfo = "10 מפגשים בזום", delay = 0, featured = false, onRegister }: CourseCardProps) => {
  const handleRegister = () => {
    if (onRegister) {
      onRegister(title);
    } else {
      // Dispatch custom event for Astro
      window.dispatchEvent(new CustomEvent('course-register', { detail: { courseTitle: title } }));
    }
  };

  const handleCycleClick = (cycle: Cycle) => {
    if (onRegister) {
      onRegister(title);
    } else {
      // Dispatch custom event for Astro
      window.dispatchEvent(new CustomEvent('course-register', { detail: { courseTitle: title } }));
    }
  };

  return (
    <article
      className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in backdrop-blur-md flex flex-col justify-between ${
        featured
          ? "p-9 md:p-10 border-2 border-[hsl(265,55%,45%)]/45 ring-2 ring-[hsl(265,55%,45%)]/20 shadow-[0_12px_48px_-8px_rgba(90,50,120,0.25)] hover:border-[hsl(265,55%,45%)]/60"
          : "p-8 border border-white/30 hover:border-white/40"
      }`}
      style={{
        animationDelay: `${delay}ms`,
        background: featured
          ? "linear-gradient(145deg, rgba(255, 252, 250, 0.92) 0%, rgba(245, 230, 255, 0.45) 40%, rgba(230, 245, 255, 0.4) 100%)"
          : "linear-gradient(135deg, rgba(252, 212, 200, 0.3) 0%, rgba(247, 201, 186, 0.4) 50%, rgba(252, 212, 200, 0.3) 100%)",
        boxShadow: featured
          ? "0 12px 48px -8px rgba(90, 50, 120, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)"
          : "0 8px 32px 0 rgba(252, 212, 200, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)",
      }}
    >
      <div>
        <div className="mb-4">
          {featured && (
            <div className="flex justify-center mb-3">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[hsl(265,60%,48%)] to-[hsl(280,55%,42%)] text-white text-sm font-bold rounded-full shadow-md">
                קורס שנתי
              </span>
            </div>
          )}
          {subtitle && (
            <span className="inline-block px-4 py-1 bg-[hsl(265,70%,50%)]/10 text-[hsl(265,70%,50%)] text-sm font-semibold rounded-full mb-4">
              {subtitle}
            </span>
          )}
          <h3
            className={`font-bold text-foreground mb-4 text-center min-h-[5rem] flex items-start justify-center ${
              featured ? "text-3xl md:text-4xl tracking-tight" : "text-2xl md:text-3xl"
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          className="text-foreground font-medium leading-relaxed mb-6 text-center"
          dangerouslySetInnerHTML={{ __html: typeof description === 'string' ? description : '' }}
        />
      </div>

      <div>
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
            <span>{meetingInfo}</span>
            <Calendar className="w-4 h-4 text-primary" />
          </div>

          <div className="space-y-3">
            {cycles.map((cycle, index) => (
              <div
                key={`${cycle.name}-${index}`}
                onClick={() => handleCycleClick(cycle)}
                className="bg-muted/50 rounded-lg p-4 space-y-2 relative overflow-hidden hover:bg-muted/70 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
              >
                {/* Ribbon לתאריך מוגדר */}
                {cycle.schedule && cycle.opening && (
                  <div className="absolute top-2 -left-8 -rotate-45 bg-gradient-to-r from-[hsl(265,70%,50%)] to-[hsl(265,70%,40%)] text-white py-0.5 px-8 text-xs font-bold shadow-lg z-10">
                    פתוח
                  </div>
                )}
                <h4 className="font-semibold text-foreground text-center">{cycle.name}</h4>
                {cycle.schedule && (
                  <div className="text-center text-sm text-muted-foreground">
                    <p>{cycle.schedule}</p>
                    {cycle.opening && (
                      <p className="text-xs">{cycle.opening}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <span className="text-2xl font-bold text-primary flex-shrink-0">מחיר: {price}</span>
            <button
              type="button"
              onClick={handleRegister}
              className="px-6 py-3 bg-gradient-spiritual text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md flex-shrink-0"
            >
              הרשמה
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
