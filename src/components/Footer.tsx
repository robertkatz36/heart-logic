import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative text-white py-12 overflow-hidden">
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

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-4 text-muted-foreground">
          <p className="text-lg opacity-90 flex items-center justify-center gap-2">
            הקורסים יתקיימו ב<a href="https://zoom.us/download" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity">
              <img src="https://st2.zoom.us/static/6.3.45448/image/new/topNav/Zoom_logo.svg" alt="Zoom" className="h-5 inline-block" />
            </a>
          </p>

          <p className="text-base opacity-90">
            לפרטים נוספים:רוברט
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:robertkatz36@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>robertkatz36@gmail.com</span>
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="tel:052-5531155"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>052-5531155</span>
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-6  mt-8">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} כל הזכויות שמורות.
            </p>
            <a href="https://www.vecteezy.com/free-videos/watercolor-background">Watercolor Background Stock Videos by Vecteezy</a>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
