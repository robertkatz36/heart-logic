const AboutLogic = () => {
  return (
    <section id="about-logic" className="relative py-20 px-4 z-10">
      <div className="container relative z-10 mx-auto max-w-4xl">
        <article className="bg-card/50 rounded-2xl p-8 md:p-12 shadow-xl border border-border animate-fade-in backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            אודות לוגיקת הלב
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed">
            <p>
              לוגיקת הלב הוא תחום חדש יחסית שצמח מתוך האנתרופוסופיה,
              המכיל מכלול של כלים ושיטות למדיטציה מעשית.
            </p>
            <p>
              במרכז השיטה עומדת המדיטציה הדיאלוגית,
              שהיא כלי מעשי לדיאלוג עם עולם הרוח וישויות רוחיות.
            </p>
            <p>
              עבודת הרוח מציע שילוב ייחודי של לימוד ותירגול
              לימוד ידע רוחי מתוך האנתרופוסופיה
              בשילוב תרגול מעשי – מתוך הנושאים מחיי היום יום.
            </p>
            <p className="font-semibold text-primary">
              עבודה פנימית שמרחיבה את הלב
              שמאפשרת לא רק לדעת, אלא באמת לגעת!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutLogic;

