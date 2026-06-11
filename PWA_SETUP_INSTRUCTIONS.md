# PWA Setup — Vangcur

## ধাপ ১: manifest.json deploy করো
`manifest.json` ফাইলটি তোমার Netlify project-এর **root folder**-এ রাখো (index.html এর পাশে)।

---

## ধাপ ২: index.html এর `<head>` এ এই code যোগ করো

`<meta name="viewport" ...>` line এর পরে এই code paste করো:

```html
<!-- ✅ PWA: App install support -->
<link rel="manifest" href="/manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Vangcur">
<meta name="theme-color" content="#1A1A1A">
```

---

## ধাপ ৩: Service Worker ফাইল তৈরি করো

`sw.js` নামে একটি ফাইল root-এ রাখো (নিচে দেওয়া আছে)।

তারপর index.html এর `</body>` এর ঠিক আগে এই code যোগ করো:

```html
<!-- ✅ PWA: Service Worker registration -->
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(reg) { console.log('SW registered'); })
      .catch(function(err) { console.log('SW failed:', err); });
  });
}
</script>
```

---

## sw.js ফাইলের content (আলাদা ফাইল দেওয়া হয়েছে)

`sw.js` ফাইলটিও root-এ deploy করো।
