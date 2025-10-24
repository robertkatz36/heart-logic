import { useRef } from "react";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import ContactForm from "@/components/ContactForm";
import type { ContactFormRef } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import robertImage from "@/assets/robert-katz.png";

const Index = () => {
  const contactFormRef = useRef<ContactFormRef>(null);

  const handleCourseRegister = (courseTitle: string, cycleInfo: string) => {
    contactFormRef.current?.fillForm(courseTitle, cycleInfo);
  };

  const courses = [
    {
      title: "לוגיקת הלב!!!!",
      description: "בקורס זה נלמד את טכניקת ההנחיה, שהיא הבסיס למדיטציית ההיזכרות. נכיר את האלמנט האימוציונלי, האנרגטי והפיזי, הם האוטומטים המשפיעים עלינו ומונעים מאיתנו להשתחרר. נתמקד בללמוד לאזן ושחרר אוטומטים, חוויית חופש, האמת והתחברות אל הרגש הגבוה.",
      cycles: [
        {
          name: "מועד חורף 2025",
          schedule: "ימי שישי אחת לשבוע 15:00–17:00",
          opening: "22/12/25",
          closing: "24/1/25"
        },
        {
          name: "מועד חורף 2025",
          schedule: "ימי ראשון אחת לשבוע 19:30–21:30",
          opening: "23/12/25",
          closing: "25/2/25"
        },
        {
          name: "מועד חורף 2026",
          schedule: "בקרוב",
          opening: "יפורסם בהמשך",
          closing: "יפורסם בהמשך"
        },
        {
          name: "מועד אביב 2026",
          schedule: "בקרוב",
          opening: "יפורסם בהמשך",
          closing: "יפורסם בהמשך"
        }
      ],
      price: "1490 ש\"ח"
    },
    {
      title: "מדיטציית  – דיאולוגיה",
      description: "מדיטציה בעשייה בדיאלוג עם שרשרת-הרצף, המקור ושוויון האמצעות הפנימי שלנו ובנו. זו מדיטציה להתפתחות תודעתית בזמן-חלום, בזמן-ערות ובזמן משלב בין השניים. נלמד את הכלים של דיאולוגיה – השראה תודעתית מגובה רגש-חיים, גם מחוץ למדיטציה. נלמד טכניקות חדשות: לוגיקה של הרצון, עבודה עם שרשרות.",
      cycles: [
        {
          name: "מועד חורף 2025",
          schedule: "ימי שני ערב 19:30–21:30",
          opening: "22/12/25",
          closing: "24/2/25"
        },
        {
          name: "מועד חורף 2025",
          schedule: "ימי שלישי ערב 19:30–21:30",
          opening: "22/12/25",
          closing: "24/2/25"
        },
        {
          name: "מועד קיץ 2026",
          schedule: "ימי חמישי ערב 18:00–20:00",
          opening: "17/03/26",
          closing: "19/06/26"
        },
        {
          name: "מועד אביב 2026",
          schedule: "בקרוב",
          opening: "יפורסם בהמשך",
          closing: "יפורסם בהמשך"
        }
      ],
      price: "1490 ש\"ח"
    },
    {
      title: "ההפתקאות – אברי השולחן העגול",
      description: "עם שנכנס מדיטציה, משהו לילד השליו בנו בזמן התגלה, אבל במקביל גם את התופעות מאשר יוצאים לעולם המטאמי – שרשרות והאילוזיות הולכים לאיבוד. סודות הקול מקדמת לתודעה – השראה ריפות תודעה בגובה רגש חיים–אדם, גם מחוץ למדיטציה. נלמד טכניקות חדשות: לוגיקה של רצון, עבודה עם שרשרות.",
      cycles: [
        {
          name: "מועד חורף 2025",
          schedule: "ימי שישי בוקר 9:00–11:00",
          opening: "20/12/25",
          closing: "22/2/25"
        },
        {
          name: "מועד חורף 2025",
          schedule: "ימי רביעי ערב 19:30–21:30",
          opening: "22/10/25",
          closing: "24/12/25"
        },
        {
          name: "מועד חורף 2026",
          schedule: "בקרוב",
          opening: "יפורסם בהמשך",
          closing: "יפורסם בהמשך"
        },
        {
          name: "מועד אביב 2026",
          schedule: "בקרוב",
          opening: "יפורסם בהמשך",
          closing: "יפורסם בהמשך"
        }
      ],
      price: "1490 ש\"ח"
    }
  ];

  return (
    <div className="min-h-screen mesh-gradient-soft">
      <Hero />

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              רוברט כץ
            </h2>

            {/* Description */}
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                מנטור רוחני, מנחה קבוצות וצוותי חינוך
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                מרצה ומנחה קורסי התפתחות ומדיטציה ע״פ לוגיקת הלב
              </p>
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
