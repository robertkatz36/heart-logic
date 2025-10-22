import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";

const Index = () => {
  const courses = [
    {
      title: "Logic of the Heart",
      description: "In this course, we will learn the guiding technique that forms the foundation of the Meditation of Recollection. We will explore the emotional, energetic, and physical elements — the automatic patterns that influence us and prevent our liberation. We will focus on learning how to balance and release automatic responses, experience freedom, truth, and connection to the higher emotion.",
      cycles: [
        {
          name: "Winter 2025 Cycle",
          schedule: "Fridays, once a week, 15:00–17:00",
          opening: "22/12/25",
          closing: "24/1/25"
        },
        {
          name: "Winter 2025 Cycle",
          schedule: "Sundays, once a week, 19:30–21:30",
          opening: "23/12/25",
          closing: "25/2/25"
        },
        {
          name: "Winter 2026 Cycle",
          schedule: "Coming Soon",
          opening: "TBA",
          closing: "TBA"
        },
        {
          name: "Spring 2026 Cycle",
          schedule: "Coming Soon",
          opening: "TBA",
          closing: "TBA"
        }
      ],
      price: "1490 NIS"
    },
    {
      title: "Meditation of Recollection – Dialogia",
      description: "Meditation through dialogue with the chain of continuity — the source and the inner equality of our existence. This is a meditation for consciousness development during dream-time, waking-time, and hybrid states in between. We will learn the tools of Dialogia — consciousness-inspired guidance from a high emotional frequency, also outside of meditation. We will learn new techniques, including: Logic of Desire and Work with Chains.",
      cycles: [
        {
          name: "Winter 2025 Cycle",
          schedule: "Mondays, 19:30–21:30",
          opening: "22/12/25",
          closing: "24/2/25"
        },
        {
          name: "Winter 2025 Cycle",
          schedule: "Tuesdays, 19:30–21:30",
          opening: "22/12/25",
          closing: "24/2/25"
        },
        {
          name: "Summer 2026 Cycle",
          schedule: "Thursdays, 18:00–20:00",
          opening: "17/03/26",
          closing: "19/06/26"
        },
        {
          name: "Spring 2026 Cycle",
          schedule: "Coming Soon",
          opening: "TBA",
          closing: "TBA"
        }
      ],
      price: "1490 NIS"
    },
    {
      title: "The Adventures – The Knights of the Round Table",
      description: "When we enter meditation, something of the peaceful child within awakens — but we also begin to encounter phenomena that emerge from the meta world — chains and illusions that can lead us astray. We will learn the secrets of the voice as a gateway to consciousness — inspiration from high emotional awareness, even outside meditation. We will learn new techniques, including: Logic of Desire and Work with Chains.",
      cycles: [
        {
          name: "Winter 2025 Cycle",
          schedule: "Fridays, 09:00–11:00",
          opening: "20/12/25",
          closing: "22/2/25"
        },
        {
          name: "Winter 2025 Cycle",
          schedule: "Wednesdays, 19:30–21:30",
          opening: "22/10/25",
          closing: "24/12/25"
        },
        {
          name: "Winter 2026 Cycle",
          schedule: "Coming Soon",
          opening: "TBA",
          closing: "TBA"
        },
        {
          name: "Spring 2026 Cycle",
          schedule: "Coming Soon",
          opening: "TBA",
          closing: "TBA"
        }
      ],
      price: "1490 NIS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced meditation programs for consciousness development and spiritual growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                cycles={course.cycles}
                price={course.price}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
