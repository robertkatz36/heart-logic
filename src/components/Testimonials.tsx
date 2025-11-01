import Marquee from "react-fast-marquee";
import testimonialsData from "@/data/testimonials.json";
import TestimonialCard from "./TestimonialCard";

interface TestimonialMarqueeProps {
  testimonials: string[];
  reverse?: boolean;
}

const TestimonialMarquee = ({ testimonials, reverse = false }: TestimonialMarqueeProps) => {
  // Duplicate testimonials multiple times to ensure seamless infinite loop
  // react-fast-marquee clones internally, but we duplicate to ensure smooth transition
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <Marquee
      direction={reverse ? "right" : "left"}
      speed={50}
      gradient={true}
      gradientColor="hsl(var(--background))"
      gradientWidth={100}
      loop={0}
      pauseOnHover={true}
      className="gap-4"
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`testimonial-${Math.floor(index / testimonials.length)}-${index % testimonials.length}`}
          testimonial={testimonial}
        />
      ))}
    </Marquee>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-spiritual rounded-full mx-auto mb-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            מה אומרים המשתתפים
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            עדויות ממשתתפי הסדנאות והקורסים
          </p>
        </div>

        <TestimonialMarquee testimonials={testimonialsData} />
      </div>
    </section>
  );
};

export default Testimonials;
