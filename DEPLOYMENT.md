# 🚀 Deployment Guide - MOODS Landing Page

## 📋 לפני Deployment

### 1. הוסף תמונות
צור תיקייה `assets/` והוסף:
- `icon.png` - לוגו האפליקציה (העתק מ-moods-enter-mobile/assets/icon.png)
- `app-preview.png` - תצוגה מקדימה של האפליקציה
- `screenshots/` - 5 screenshots:
  - `home.png`
  - `mood-entry.png`
  - `analytics.png`
  - `journal.png`
  - `emergency.png`
- `app-store-badge.png` - App Store badge (הורד מ-Apple)
- `google-play-badge.png` - Google Play badge (הורד מ-Google)
- `favicon.png` - Favicon

### 2. עדכן קישורים
ב-`index.html`, עדכן:
- קישורי App Store/Play Store (כשיהיו זמינים)
- קישור ל-Privacy Policy (אם הוא באתר אחר)

---

## 🌐 Deployment Options

### Option 1: Vercel (מומלץ - הכי קל)

```bash
# התקן Vercel CLI
npm i -g vercel

# Deploy
cd moods-start-page
vercel

# Follow prompts
# ✅ Done! Your site is live
```

**או דרך GitHub:**
1. Push ל-GitHub
2. לך ל-vercel.com
3. Import repository
4. Deploy אוטומטי!

### Option 2: Netlify

```bash
# התקן Netlify CLI
npm i -g netlify-cli

# Deploy
cd moods-start-page
netlify deploy --prod
```

**או דרך GitHub:**
1. Push ל-GitHub
2. לך ל-netlify.com
3. New site from Git
4. בחר repository
5. Deploy!

### Option 3: GitHub Pages

```bash
# Push ל-GitHub
git remote add origin https://github.com/liormedan/moods-start-page.git
git push -u origin master

# ב-GitHub:
# Settings → Pages → Source: master branch → Save
# ✅ Site: https://liormedan.github.io/moods-start-page/
```

### Option 4: Firebase Hosting

```bash
# התקן Firebase CLI
npm i -g firebase-tools

# Login
firebase login

# Init
firebase init hosting
# Select: Use existing project → moods-firebase-1a211
# Public directory: . (current directory)
# Single-page app: No
# GitHub: No

# Deploy
firebase deploy --only hosting
```

---

## 🔗 Push ל-GitHub

```bash
cd moods-start-page

# אם עדיין לא קישרת ל-remote:
git remote add origin https://github.com/liormedan/moods-start-page.git

# Push
git branch -M main
git push -u origin main
```

---

## ✅ Checklist לפני Deployment

- [ ] כל התמונות במקום (`assets/`)
- [ ] קישורי App Store/Play Store מעודכנים
- [ ] Privacy Policy נגיש
- [ ] בדיקה מקומית (פתח `index.html` בדפדפן)
- [ ] בדיקת RTL (כיוון עברית)
- [ ] בדיקה על mobile
- [ ] בדיקת קישורים

---

## 🎯 אחרי Deployment

1. **עדכן קישורים ב-app.json:**
   ```json
   "extra": {
     "privacyPolicyUrl": "https://YOUR-DOMAIN.com/privacy-policy"
   }
   ```

2. **הוסף ל-Store listings:**
   - Website URL
   - Privacy Policy URL
   - Support URL

3. **SEO (אופציונלי):**
   - Google Search Console
   - Meta tags (כבר קיימים)
   - Sitemap.xml

---

**Status**: Ready for deployment! 🚀

