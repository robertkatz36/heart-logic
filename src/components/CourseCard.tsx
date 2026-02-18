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
  delay?: number;
  onRegister?: (courseTitle: string) => void;
}

const CourseCard = ({ title, subtitle, description, cycles, price, delay = 0, onRegister }: CourseCardProps) => {
  const handleRegister = () => {
    if (onRegister) {
      onRegister(title);
    } else {
      // Dispatch custom event for Astro
      window.dispatchEvent(new CustomEvent('course-register', { detail: { courseTitle: title } }));
    }
  };

  const handleCycleClick = (cycle: Cycle) => {
    if (!cycle.schedule || !cycle.opening) return;
    if (onRegister) {
      onRegister(title);
    } else {
      // Dispatch custom event for Astro
      window.dispatchEvent(new CustomEvent('course-register', { detail: { courseTitle: title } }));
    }
  };

  return (
    <article
      className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 hover:border-white/40 animate-fade-in backdrop-blur-md flex flex-col justify-between"
      style={{
        animationDelay: `${delay}ms`,
        background: 'linear-gradient(135deg, rgba(252, 212, 200, 0.3) 0%, rgba(247, 201, 186, 0.4) 50%, rgba(252, 212, 200, 0.3) 100%)',
        boxShadow: '0 8px 32px 0 rgba(252, 212, 200, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)'
      }}
    >
      <div>
        <div className="mb-4">
          {subtitle && (
            <span className="inline-block px-4 py-1 bg-[hsl(265,70%,50%)]/10 text-[hsl(265,70%,50%)] text-sm font-semibold rounded-full mb-4">
              {subtitle}
            </span>
          )}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center min-h-[5rem] flex items-start justify-center">
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
            <span>10 מפגשים בזום</span>
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
                {cycle.schedule && cycle.opening && (
                  <div className="text-center text-sm text-muted-foreground">
                    <p>{cycle.schedule}</p>
                    <p className="text-xs">{cycle.opening}</p>
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
