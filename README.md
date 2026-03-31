# Fetal Uzman Blog

Next.js 15 + TypeScript + Tailwind CSS ile geliştirilmiş blog.

## Kurulum

```bash
npm install
npm run dev
```

## Yeni Yazı Ekle

`content/posts/` klasörüne `.mdx` dosyası oluştur:

```mdx
---
title: "Yazı Başlığı"
date: "2026-03-28"
excerpt: "Kısa açıklama."
tags: ["Etiket1", "Etiket2"]
author: "Dr. Mervenur Kement"
---

## Bölüm Başlığı

İçerik buraya...
```

## Ortam Değişkenleri

`.env.local` dosyası oluştur:

```
NEXT_PUBLIC_SITE_URL=https://fetaluzman.com
```
