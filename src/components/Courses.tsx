import CourseCard from "./CourseCard";
import { ReactNode } from "react";

interface Cycle {
  name: string;
  schedule?: string;
  opening?: string;
}

interface Course {
  title: string;
  subtitle: string;
  description: string | ReactNode;
  cycles: Cycle[];
  price: string;
}

interface CoursesProps {
  courses: Course[];
  onCourseRegister: (courseTitle: string) => void;
}

const Courses = ({ courses, onCourseRegister }: CoursesProps) => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
              cycles={course.cycles}
              price={course.price}
              delay={courses.indexOf(course) * 150}
              onRegister={onCourseRegister}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

