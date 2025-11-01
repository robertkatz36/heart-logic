import { useRef } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutLogic from "@/components/AboutLogic";
import CourseCard from "@/components/CourseCard";
import ContactForm from "@/components/ContactForm";
import type { ContactFormRef } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import robertImage from "@/assets/robert-katz.png";

const Index = () => {
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
      price: "1490 ש\"ח"
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
      price: "1490 ש\"ח"
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
      price: "1490 ש\"ח"
    }
  ];

  return (
    <div className="min-h-screen mesh-gradient-soft">
      <NavBar />
      <Hero />

      {/* About לוגיקת הלב Section */}
      <AboutLogic />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <article className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-spiritual rounded-full blur-xl opacity-30"></div>
                <img
                  src={robertImage}
                  alt="רוברט כץ - מנטור רוחני ומנחה מדיטציה"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
              רוברט כץ
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center">
              מנטור רוחני ומנחה מדיטציה
            </p>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4 text-lg md:text-xl text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span>אימון וליווי רוחני</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span>הנחיית קבוצות וצוותי חינוך</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span>הרצאות וסדנאות התפתחות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <span>קורסי מדיטציה</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

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
                onRegister={handleCourseRegister}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Articles and Recorded Lectures Section */}
      <section id="articles" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              מאמרים והרצאות מוקלטות
            </h2>
          </div>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in">
            <div className="space-y-6">
              <a
                href="https://youtu.be/gKs189cY3S0?si=ZlXl6Btcf4C30Hd0"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      הרצאה מוקלטת על לוגיקת הלב
                    </h3>
                    <p className="text-muted-foreground">
                      צפה בהרצאה ב-YouTube
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              <a
                href="https://adamolam.co.il/%D7%9C%D7%95%D7%92%D7%99%D7%A7%D7%AA-%D7%94%D7%9C%D7%91-%D7%9E%D7%93%D7%99%D7%98%D7%A6%D7%99%D7%94/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="https://adamolam.co.il/favicon.ico"
                      alt="adamolam favicon"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      לוגיקת הלב - מדיטציה
                    </h3>
                    <p className="text-muted-foreground">
                      קרא מאמר באתר אדם עולם
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <ContactForm ref={contactFormRef} courses={courses.map(course => course.title)} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
