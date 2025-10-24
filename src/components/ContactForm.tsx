import { useState, useId, forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Calendar } from "lucide-react";

interface ContactFormProps {
  courses: string[];
}

export interface ContactFormRef {
  fillForm: (course: string, cycle?: string) => void;
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(({ courses }, ref) => {
  const { toast } = useToast();
  const nameId = useId();
  const phoneId = useId();
  const courseId = useId();
  const cycleId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    cycle: "",
  });

  useImperativeHandle(ref, () => ({
    fillForm: (course: string, cycle?: string) => {
      setFormData(prev => ({
        ...prev,
        course,
        cycle: cycle || "",
      }));
      // גלילה לטופס
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    },
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.course) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות החובה",
        variant: "destructive",
      });
      return;
    }

    // כאן אפשר להוסיף שליחה לשרת או שירות דוא"ל
    console.log("Form submitted:", formData);

    toast({
      title: "הטופס נשלח בהצלחה!",
      description: "ניצור איתך קשר בהקדם",
    });

    // איפוס הטופס
    setFormData({
      name: "",
      phone: "",
      course: "",
      cycle: "",
    });
  };

  return (
    <Card ref={cardRef} className="w-full max-w-2xl mx-auto shadow-xl border-2 animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl font-bold">צור קשר</CardTitle>
        <CardDescription className="text-lg">
          מעוניין להצטרף לקורס? השאר פרטים ונחזור אליך
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* שם */}
          <div className="space-y-2">
            <Label htmlFor={nameId} className="text-right flex items-center justify-end gap-2">
              <span>שם מלא</span>
              <User className="w-4 h-4 text-primary" />
            </Label>
            <Input
              id={nameId}
              type="text"
              placeholder="הזן את שמך המלא"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-right"
              dir="rtl"
            />
          </div>

          {/* טלפון */}
          <div className="space-y-2">
            <Label htmlFor={phoneId} className="text-right flex items-center justify-end gap-2">
              <span>מספר טלפון</span>
              <Phone className="w-4 h-4 text-primary" />
            </Label>
            <Input
              id={phoneId}
              type="tel"
              placeholder="050-1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-right"
              dir="rtl"
            />
          </div>

          {/* בחירת קורס */}
          <div className="space-y-2">
            <Label htmlFor={courseId} className="text-right flex items-center justify-end gap-2">
              <span>הקורס המבוקש</span>
              <Mail className="w-4 h-4 text-primary" />
            </Label>
            <Select
              value={formData.course}
              onValueChange={(value) => setFormData({ ...formData, course: value })}
            >
              <SelectTrigger className="text-right" dir="rtl">
                <SelectValue placeholder="בחר קורס" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="text-right">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* מחזור (אופציונלי) */}
          <div className="space-y-2">
            <Label htmlFor={cycleId} className="text-right flex items-center justify-end gap-2">
              <span>מחזור מבוקש (אופציונלי)</span>
              <Calendar className="w-4 h-4 text-primary" />
            </Label>
            <Input
              id={cycleId}
              type="text"
              placeholder="לדוגמה: מועד חורף 2025 - ימי שישי"
              value={formData.cycle}
              onChange={(e) => setFormData({ ...formData, cycle: e.target.value })}
              className="text-right"
              dir="rtl"
            />
          </div>

          {/* כפתור שליחה */}
          <Button
            type="submit"
            className="w-full bg-gradient-spiritual text-white text-lg py-6 hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            שלח פנייה
          </Button>
        </form>
      </CardContent>
    </Card>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;

