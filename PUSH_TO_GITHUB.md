# 📤 Push to GitHub - Quick Guide

## שלב 1: קישור ל-Remote

```bash
cd moods-start-page

# קישור ל-repository ב-GitHub
git remote add origin https://github.com/liormedan/moods-start-page.git

# או אם כבר קיים, עדכן:
git remote set-url origin https://github.com/liormedan/moods-start-page.git
```

## שלב 2: Push

```bash
# שנה branch ל-main (אם צריך)
git branch -M main

# Push
git push -u origin main
```

## ✅ Done!

האתר עכשיו ב-GitHub: https://github.com/liormedan/moods-start-page

---

## 🚀 Next: Deploy

ראה `DEPLOYMENT.md` להוראות deployment ל-Vercel/Netlify/GitHub Pages.

