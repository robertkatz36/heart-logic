import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-spiritual text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg opacity-90">
            הקורסים יתקיימו בזום ויקלסיטי
          </p>
          
          <p className="text-base opacity-90">
            לפרטים נוספים: רוברת
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
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

          <div className="pt-6 border-t border-white/20 mt-8">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} לוג'יקת הלב. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
