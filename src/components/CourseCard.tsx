import { Calendar, Clock } from "lucide-react";

interface Cycle {
  name: string;
  schedule: string;
  opening: string;
  closing: string;
}

interface CourseCardProps {
  title: string;
  description: string;
  cycles: Cycle[];
  price: string;
  delay?: number;
  onRegister?: (courseTitle: string, cycleInfo: string) => void;
}

const CourseCard = ({ title, description, cycles, price, delay = 0, onRegister }: CourseCardProps) => {
  const handleRegister = () => {
    // יצירת מחרוזת עם כל המחזורים
    const cycleInfo = cycles
      .map(cycle => `${cycle.name} - ${cycle.schedule}`)
      .join(" | ");

    if (onRegister) {
      onRegister(title, cycleInfo);
    }
  };

  return (
    <article
      className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 hover:border-white/40 animate-fade-in backdrop-blur-md"
      style={{
        animationDelay: `${delay}ms`,
        background: 'linear-gradient(135deg, rgba(252, 212, 200, 0.3) 0%, rgba(247, 201, 186, 0.4) 50%, rgba(252, 212, 200, 0.3) 100%)',
        boxShadow: '0 8px 32px 0 rgba(252, 212, 200, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)'
      }}
    >
      <div className="mb-4">
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
          קורס למתקדמים
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6 text-right">
        {description}
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
          <span>10 מפגשים בזום</span>
          <Calendar className="w-4 h-4 text-primary" />
        </div>

        <div className="space-y-3">
          {cycles.map((cycle) => (
            <div key={`${cycle.name}-${cycle.opening}-${cycle.closing}`} className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-foreground text-right">{cycle.name}</h4>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="text-right flex-1">
                  <p>{cycle.schedule}</p>
                  <p className="text-xs">{cycle.opening} – פתיחה</p>
                  <p className="text-xs">{cycle.closing} – סיום</p>
                </div>
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleRegister}
            className="px-6 py-3 bg-gradient-spiritual text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md"
          >
            הרשמה
          </button>
          <span className="text-2xl font-bold text-primary">ערך הקורס: {price}</span>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
