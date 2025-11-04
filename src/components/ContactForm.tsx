import { useState, useId, forwardRef, useImperativeHandle, useRef, useMemo } from "react";
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
import { Mail, Phone, User } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface Cycle {
  name: string;
  schedule?: string;
  opening?: string;
}

interface Course {
  title: string;
  cycles: Cycle[];
}

interface ContactFormProps {
  courses: Course[];
}

export interface ContactFormRef {
  fillForm: (course: string) => void;
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(({ courses }, ref) => {
  const { toast } = useToast();
  const nameId = useId();
  const phoneId = useId();
  const courseId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });

  useImperativeHandle(ref, () => ({
    fillForm: (course: string) => {
      setFormData(prev => ({
        ...prev,
        course,
      }));
      // גלילה לטופס
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    },
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.course) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות החובה",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          course: formData.course,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "ניצור איתך קשר בהקדם",
      });

      // איפוס הטופס
      setFormData({
        name: "",
        phone: "",
        course: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    }
  };

  return (
    <Card ref={cardRef} className="w-full max-w-2xl mx-auto shadow-xl border-2 animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl font-bold">הרשמה לקורס</CardTitle>
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
                  <SelectItem key={course.title} value={course.title} className="text-right">
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* כפתור שליחה */}
          <RainbowButton
            type="submit"
            className="w-full text-lg py-6 rounded-md text-white"
            size="lg"
          >
            שלח פנייה
          </RainbowButton>
        </form>
      </CardContent>
    </Card>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;

