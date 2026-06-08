# Vangcur SEO Setup Guide
## কোন ফাইল কোথায় রাখবেন

```
আপনার project folder/
├── index.html              ← আগে থেকেই আছে
├── sitemap.xml             ← ✅ নতুন — এখানে রাখুন
├── robots.txt              ← ✅ নতুন — এখানে রাখুন
├── netlify.toml            ← ✅ নতুন — এখানে রাখুন
├── generate-sitemap.js     ← ✅ নতুন — এখানে রাখুন (deploy করতে হবে না)
└── vangcur-bd-2026-indexnow-key-a7f3e9.txt  ← ✅ নতুন — এখানে রাখুন
```

---

## Deploy করার পরে যা যা করতে হবে

### ১. Google Search Console (সবচেয়ে জরুরি)
1. https://search.google.com/search-console/about — এখানে যান
2. "Start Now" → "URL prefix" → `https://vangcur.com` দিন
3. Verification method: "HTML tag" বেছে নিন
4. একটা `<meta name="google-site-verification" content="XXXXX">` tag দেবে
5. সেটা আপনার index.html এর `<head>` এ যোগ করুন
6. "Verify" করুন
7. তারপর: Sitemaps → `https://vangcur.com/sitemap.xml` submit করুন

### ২. Bing Webmaster Tools
1. https://www.bing.com/webmasters — এখানে যান
2. "Add your site" → `https://vangcur.com`
3. XML Sitemap option এ: `https://vangcur.com/sitemap.xml`
4. Verification: "Auto verify" (Google verified থাকলে import করতে দেবে)

### ৩. IndexNow (Bing এ instant indexing)
Deploy করার পরে একবার এই URL এ যান browser এ:
```
https://www.bing.com/indexnow?url=https://vangcur.com&key=vangcur-bd-2026-indexnow-key-a7f3e9
```
এটাই Bing কে জানাবে আপনার সাইট আছে।

### ৪. নতুন প্রোডাক্ট যোগ করলে Sitemap আপডেট
Terminal এ project folder এ গিয়ে:
```bash
node generate-sitemap.js
```
তারপর নতুন sitemap.xml টি Netlify তে deploy করুন।

---

## Verify করবেন যেভাবে
Deploy করার পরে browser এ এই URL গুলো check করুন:
- https://vangcur.com/sitemap.xml  → XML দেখাবে
- https://vangcur.com/robots.txt   → Text দেখাবে
- https://vangcur.com/vangcur-bd-2026-indexnow-key-a7f3e9.txt → key দেখাবে
