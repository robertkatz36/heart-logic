import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: string;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="group relative bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full mr-4 w-[350px] md:w-[400px]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Decorative quote icon background */}
      <div className="absolute top-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Quote className="w-24 h-24 text-primary" />
      </div>

      <div className="relative z-10">
        {/* Testimonial text */}
        <p dir="rtl" className="text-foreground leading-relaxed text-right whitespace-pre-line mb-6 text-lg group-hover:text-foreground/90 transition-colors duration-300">
          {testimonial}
        </p>

        {/* Decorative line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full"></div>
      </div>
    </article>
  );
};

export default TestimonialCard;

