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
          בקורס זה נלמד את טכניקת ההחצנה, שהיא הבסיס למדיטציה דיאלוגית. נכיר את עולמנו האמוציונלי, הסימפטיות והאנטיפטיות. את האוטומטים שמפעילים אותנו והופכים אותנו לתגובתיים. <strong>מתוכם נלמד להגיע לאיזון ושלווה פנימית.</strong>
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
          <strong>כלי עוצמתי להתפתחות ומחקר רוחני ע"פ גלגל המזלות.</strong>
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
          מטרת הקורס ללמוד ולתרגל - <strong>השגת רציפות תודעה גבוהה</strong> בחיי היום יום, גם מחוץ למדיטציה. נלמד טכניקות חדשות: לוגיקת הרצון ועבודה עם שרשראות.
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
    },
    {
      title: "לוח השנה לנפש",
      subtitle: "קורס חדש - אפריל 2026",
      description: (
        <>
          מסע שבועי בעקבות 52 הוורסים של רודולף שטיינר. 
          עבודה פנימית עמוקה המשלבת את יסודות האנתרופוסופיה עם לוגיקת הלב.
          <br />
          <strong>חודש אפריל ללא עלות למצטרפים עכשיו.</strong>
        </>
      ),
      cycles: [
        {
          name: "מועד אביב 2026",
          schedule: "ימי ראשון בערב (בזום)",
          opening: "המפגשים הקרובים: 12.4 ו-19.4"
        }
      ],
      price: "195 ₪ לחודש"
    }
  ];

  return (
    <div className="min-h-screen mesh-gradient-soft">
      <NavBar />
      <div className="relative overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/50 z-[1]"></div>
        <div className="relative z-[2]">
          <Hero />
          <div className="flex justify-center pb-12 -mt-8">
            <a 
              href="/luach.html" 
              className="bg-[#8ecae6] hover:bg-[#219ebc] text-[#023047] font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-center text-xl border-2 border-white"
            >
              להרשמה ופרטים: קורס לוח השנה לנפש
            </a>
          </div>
          <AboutLogic />
        </div>
      </div>
      <About />
      <Courses courses={courses} onCourseRegister={handleCourseRegister} />
      <Testimonials />
      
      {/* כאן נמצאים המאמרים והוידאו עם הקישור למרחב מוגן */}
      <Articles />

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <ContactForm ref={contactFormRef} courses={courses} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
