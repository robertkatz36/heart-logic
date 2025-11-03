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

  const handleCourseRegister = (courseTitle: string, cycleInfo: string) => {
    contactFormRef.current?.fillForm(courseTitle, cycleInfo);
  };

  const courses = [
    {
      title: "לוגיקת הלב - המרכז להתפתחות האדם",
      subtitle: "קורס בסיסי",
      description: "בקורס זה נלמד את טכניקת ההנחיה, שהיא הבסיס למדיטציית ההיזכרות. נכיר את עולמו האימוציונלי, האינטיסיטיבי והסימפטומטי, הם האוטומטים שמפעילים אותנו ומונעים מאתנו להשתחרר. מתוכם נלמד להגיע לאיזון ושחרר פנימית, חווית חופש, האמת והתחברות אל הרגע הגבוה.",
      cycles: [
        {
          name: "מועד סתיו 2025",
          schedule: "ימי רביעי אחרה\"צ 15:00-17:00",
          opening: "פתיחה 22/10/25 - סיום 24/12/25"
        },
        {
          name: "מועד סתיו 2025",
          schedule: "ימי חמישי ערב 19:30-21:30",
          opening: "פתיחה 23/10/25 - סיום 25/12/25"
        },
        {
          name: "מועד חורף 2026 - בקרוב"
        },
        {
          name: "מועד אביב 2026 - בקרוב"
        }
      ],
      price: "1,490 ₪"
    },
    {
      title: "מדיטציה דיאלוגית - זודיאק",
      subtitle: "קורס למתקדמים",
      description: "מדיטציה מעשיית לדיאלוג עם העולם הלא-חושי ועם ישויות שמכונאות בו ובנו. כלי צומתמי להתפתחות ומחקר רוחני. בקורס נלמד את 12 השלבים של המדיטציה ע\"י גילוי המדלות ודרכם נחקור את העולם הלא-חושי-סביבנו - ואת הקשר שלו אתנו ועם העולם החושי.",
      cycles: [
        {
          name: "מועד סתיו 2025",
          schedule: "ימי שני ערב 19:30-21:30",
          opening: "פתיחה 20/10/25 - סיום 22/12/25"
        },
        {
          name: "מועד סתיו 2025",
          schedule: "ימי רביעי בוקר 9:00-11:00",
          opening: "פתיחה 22/10/25 - סיום 24/12/25"
        },
        {
          name: "מועד חורף 2026",
          schedule: "ימי שלישי ערב 18:00-20:00",
          opening: "פתיחה 06/01/26 סיום 17/03/26"
        },
        {
          name: "מועד חורף 2026",
          schedule: "ימי חמישי בוקר 9:00-11:00",
          opening: "פתיחה 08/01/26 סיום 19/03/26"
        },
        {
          name: "מועד אביב 2026 - בקרוב"
        }
      ],
      price: "1,490 ₪"
    },
    {
      title: "הרפתקאות - אביר השולחן העגול",
      subtitle: "קורס למתקדמים",
      description: "מי שמתרגל מדיטציה, משהו לילד שליו והאיזון בזמן התגלה, אבל מכריס גם את התופעה כאשר יוצאים לעולם האמיתי - השליווה והאילוזיות הולכים לאיבוד! מטרת הקורס ללמוד לתרגל - השראה ריפואת תודעה בגובה רגע-חיים-יום, גם מחוץ למדיטציה. נלמד טכניקות חדשות: לוגיקת הרצון, עבודה עם שרשרות.",
      cycles: [
        {
          name: "מועד סתיו 2025",
          schedule: "ימי שני בוקר 9:00-11:00",
          opening: "פתיחה 20/10/25 - סיום 22/12/25"
        },
        {
          name: "מועד סתיו 2025",
          schedule: "ימי רביעי ערב 19:30-21:30",
          opening: "פתיחה 22/10/25 - סיום 24/12/25"
        },
        {
          name: "מועד חורף 2026 - בקרוב"
        },
        {
          name: "מועד אביב 2026 - בקרוב"
        }
      ],
      price: "1,490 ₪"
    }
  ];

  return (
    <div className="min-h-screen mesh-gradient-soft">
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

