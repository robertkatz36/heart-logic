import Image from "next/image";
const Articles = () => {
  return (
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
                  <Image
                    src="/adam-olam.png"
                    alt="adamolam favicon"
                    width={32}
                    height={32}
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
  );
};

export default Articles;

