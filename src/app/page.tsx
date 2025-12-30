
"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Brain,
  Smartphone,
  ArrowLeft,
  ShieldCheck,
  Users,
  LineChart
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-teal-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              MOODS
            </span>
          </div>
          <Link
            href="https://moods-main-app-url.vercel.app"
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10"
          >
            כניסה למערכת
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="text-teal-400 text-sm font-medium">✨ זמין עכשיו להורדה</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              הדרך החכמה להבין את <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                הרגשות שלך
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              האפליקציה המתקדמת לניהול יומן רגשי, מעקב אחר מדדים וחיבור ישיר למטפל שלך. קבל תובנות, זהה דפוסים ושפר את איכות החיים.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="h-14 px-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/25">
                <Smartphone className="h-5 w-5" />
                הורד לאנדרואיד
              </button>
              <button className="h-14 px-8 rounded-full bg-white text-slate-900 font-bold flex items-center gap-2 transition-all transform hover:scale-105">
                <Smartphone className="h-5 w-5" />
                הורד ל-iOS
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshot Placeholder / Visual */}
      <div className="relative max-w-5xl mx-auto px-4 mb-32">
        <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full opacity-30 transform -translate-y-1/2"></div>
        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-2 shadow-2xl">
          <div className="bg-slate-950 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-slate-800/50">
            <div className="text-center">
              <Activity className="h-16 w-16 text-teal-500 mx-auto mb-4 opacity-50" />
              <p className="text-slate-500">תצוגת מסך האפליקציה</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">כל מה שצריך כדי להרגיש טוב יותר</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">ערכת כלים שלמה לניהול הבריאות הנפשית שלך במקום אחד</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-purple-400" />}
              title="יומן חכם"
              description="תעד את מצב הרוח, האנרגיה והלחץ שלך בקלות. המערכת לומדת אותך ומציעה תובנות מותאמות אישית."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-blue-400" />}
              title="חיבור למטפל"
              description="שתף את הנתונים שלך עם המטפל בזמן אמת. קבל משימות, תרגילים ומשוב ישירות באפליקציה."
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6 text-teal-400" />}
              title="ניתוח נתונים"
              description="גרפים מתקדמים ודוחות שבועיים שעוזרים לך לזהות דפוסים ומגמות בהתנהגות הרגשית שלך."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-green-400" />}
              title="פרטיות מובטחת"
              description="המידע שלך מוצפן ומאובטח. רק אתה והמטפל שלך יכולים לראות את הנתונים."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-red-400" />}
              title="עזרה ראשונה"
              description="גישה מהירה לגורמי סיוע ומוקדי חירום ברגעי משבר. אתה לא לבד."
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6 text-yellow-400" />}
              title="תרגול יומי"
              description="תזכורות לתרגול מיינדפולנס, נשימות ודיווח יומי לשמירה על יציבות."
            />
          </div>
        </div>
      </section>

      {/* Web Platform CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-900/40 to-cyan-900/40 border border-teal-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">משתמש כבר באפליקציה?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            התחבר לפלטפורמת ה-Web שלנו לקבלת תצוגה רחבה יותר, הפקת דוחות מתקדמים וניהול הפרופיל.
          </p>

          <Link
            href="https://moods-main-app-url.vercel.app"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
          >
            כניסה למערכת
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-teal-500" />
            <span className="font-bold text-lg">MOODS</span>
          </div>

          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-teal-400 transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-teal-400 transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-teal-400 transition-colors">צור קשר</a>
          </div>

          <p className="text-slate-600 text-sm">© 2025 MOODS. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors hover:bg-white/10">
      <div className="mb-4 p-3 inline-block rounded-xl bg-slate-950 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
