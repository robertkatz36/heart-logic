import CourseCard from "./CourseCard";
import React from "react";

interface Cycle {
  name: string;
  schedule?: string;
  opening?: string;
}

interface Course {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  cycles: Cycle[];
  price: string;
  meetingInfo?: string;
}

interface CoursesProps {
  courses: Course[];
  onCourseRegister?: (courseTitle: string) => void;
}

const Courses = ({ courses, onCourseRegister }: CoursesProps) => {
  const handleCourseRegister = (courseTitle: string) => {
    if (onCourseRegister) {
      onCourseRegister(courseTitle);
    } else {
      // Fallback: scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            תכנית הקורסים
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            קורסי מדיטציה מתקדמים להתפתחות תודעתית וצמיחה רוחנית
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            2026 – 2025
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Top row: 1 card centered */}
          <div className="flex justify-center">
            {courses.slice(0, 1).map((course, index) => (
              <div key={course.title} className="w-full max-w-md">
                <CourseCard
                  title={course.title}
                  subtitle={course.subtitle}
                  description={course.description}
                  cycles={course.cycles}
                  price={course.price}
                  meetingInfo={course.meetingInfo}
                  delay={0}
                  onRegister={handleCourseRegister}
                />
              </div>
            ))}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.slice(1).map((course, index) => (
              <CourseCard
                key={course.title}
                title={course.title}
                subtitle={course.subtitle}
                description={course.description}
                cycles={course.cycles}
                price={course.price}
                meetingInfo={course.meetingInfo}
                delay={(index + 1) * 150}
                onRegister={handleCourseRegister}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

