"use client";

import { useRef } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutLogic from "@/components/AboutLogic";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Articles from "@/components/Articles";
import ContactForm from "@/components/ContactForm";
import type { ContactFormRef } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  const contactFormRef = useRef<ContactFormRef>(null);

  const handleCourseRegister = (courseTitle: string) => {
    contactFormRef.current?.fillForm(courseTitle);
  };

  const courses = [
    {
      title: "לוגיקת הלב",
      subtitle: "קורס בסיס",
      description: (
        <>
          בקורס זה נלמד את טכניקת ההחצנה, שהיא הבסיס למדיטציה דיאלוגית. נכיר את עולמנו האמוציונלי, הסימפטיות והאנטיפטיות. את האוטומטים שמפעילים אותנו והופכים אותנו לתגובתיים. <strong>מתוכם</strong>{" "}
          <strong>
            נלמד להגיע לאיזון ושלווה פנימית,
            <br />
            חווית חוש האמת והתעוררות אל האני הגבוה.
          </strong>
        </>
      ),
      cycles: [
        {
          name: "מועד חורף 2026",
          schedule: "ימי חמישי ערב 19:30-21:30",
          opening: "פתיחה 27/11/25 - סיום 22/01/26"
        }
      ],
      price: "1,490 ₪"
    },
    {
      title: "מדיטציה דיאלוגית - זודיאק",
      subtitle: "קורס למתקדמים",
      description: (
        <>
          מדיטציה מעשית לדיאלוג עם העולם העל חושי ועם ישויות שנמצאות בו ובנו.
          <br />
          <strong>כלי עוצמתי להתפתחות ומחקר רוחני.</strong>
          <br />
          בקורס נכיר את 12 השלבים של המדיטציה ע"פ גלגל המזלות. ודרכם נחקור את העולם העל חושי סביבנו – ואת הקשר שלו איתנו ועם העולם החושי.
        </>
      ),
      cycles: [
        {
          name: "מועד חורף 2026",
          schedule: "ימי שני ערב 19:30-21:30",
          opening: "פתיחה 24/11/25 - סיום 26/01/26"
        }
      ],
      price: "1,490 ₪"
    },
    {
      title: "הרפתקאות - אבירי השולחן העגול",
      subtitle: "קורס למתקדמים",
      description: (
        <>
          מי שמתרגל מדיטציה, משיג לרוב שלווה ואיזון בזמן התרגול.
          <br />
          אבל מכיר גם את התופעה, כאשר יוצאים לעולם האמיתי,
          <br />
          השלווה והאיזון הולכים לאיבוד!
          <br />
          מטרת הקורס ללמוד ולתרגל - <strong>השגת רציפות תודעה גבוהה</strong> בחיי היום יום,
          <br />
          גם מחוץ למדיטציה.
          <br />
          נלמד טכניקות חדשות:
          <br />
          לוגיקת הרצון, עבודה עם שרשראות.
        </>
      ),
      cycles: [
        {
          name: "מועד חורף 2026",
          schedule: "ימי רביעי ערב 19:30-21:30",
          opening: "פתיחה 26/11/25 - סיום 21/01/26"
        }
      ],
      price: "1,490 ₪"
    }
  ];

  return (
    <div className="min-h-screen mesh-gradient-soft">
      {/* Hidden element for accessibility/SEO */}
      <div className="sr-only">
        <h1>בדיקה</h1>
      </div>
      <NavBar />

      {/* Shared video background for Hero and AboutLogic */}
      <div className="relative overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* White overlay with 0.5 transparency */}
        <div className="absolute inset-0 bg-white/50 z-[1]"></div>

        <Hero />
        <AboutLogic />
      </div>

      {/* About Section */}
      <About />

      {/* Courses Section */}
      <Courses courses={courses} onCourseRegister={handleCourseRegister} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Articles and Recorded Lectures Section */}
      <Articles />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <ContactForm ref={contactFormRef} courses={courses} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

