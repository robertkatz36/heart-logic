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
}

const CourseCard = ({ title, description, cycles, price, delay = 0 }: CourseCardProps) => {
  return (
    <article 
      className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
          Advanced Course
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>10 Zoom meetings</span>
        </div>

        <div className="space-y-3">
          {cycles.map((cycle, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-foreground">{cycle.name}</h4>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>{cycle.schedule}</p>
                  <p className="text-xs">Opening: {cycle.opening}</p>
                  <p className="text-xs">Closing: {cycle.closing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <button className="px-6 py-3 bg-gradient-spiritual text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
