'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, cubicBezier } from 'framer-motion';
import Image from 'next/image';

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

/* ─────────────────────────────────────────────
   REVEAL WRAPPER
───────────────────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#hakkimizda' },   // '#vizyon' → '#hakkimizda'
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Kutlukent Artı+', href: '#hizmetler' }, // '#Artı' → '#hizmetler'
  { label: 'Çözüm Alanları', href: '#neden' },
  { label: 'İletişim', href: '#iletisim' },
];

const VIZYON_SUTUNLAR = [
  {
    baslik: 'İnsana Saygı',
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    aciklama: 'Her kararın merkezine insanı koyuyoruz. Yaşam kalitesini yükselten, iletişimi güçlendiren ve kullanıcı memnuniyetini önceleyen bir yönetim anlayışı benimsiyoruz.',
  },
  {
    baslik: 'Doğaya Saygı',
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 7 4a5 5 0 0010 0c0 0-5 3-5 8z" />
        <path d="M12 12c0 0-3 2-6 1" />
      </svg>
    ),
    aciklama: 'Doğayla uyumlu yaşam alanlarını destekliyoruz. Peyzajdan çevre düzenine, kaynak kullanımından sürdürülebilir saha uygulamalarına kadar her süreçte çevresel sorumluluğu önceliklendiriyoruz.',
  },
  {
    baslik: 'Sarsılmaz Güven',
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    aciklama: 'Şeffaflık, hesap verebilirlik ve profesyonel disiplin yönetim modelimizin temelidir. Her süreçte net, güvenilir ve sürdürülebilir operasyon yapısı sunuyoruz.',
  },
  {
    baslik: 'Kalıcı Huzur',
    ikon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    aciklama: 'Düzeni standart, karmaşayı istisna haline getiriyoruz. Kutlukent\'in bulunduğu her yaşam alanında güvenli, kontrollü ve sürdürülebilir bir operasyon düzeni kuruyoruz.',
  },
];

interface HizmetKategori {
  baslik: string;
  aciklama: string;
  liste: string[];
  ikon: React.ReactNode;
}

const HIZMET_KATEGORILER: HizmetKategori[] = [
  {
    baslik: 'Yönetim Hizmetleri',
    aciklama: 'Kurumsal yönetim süreçlerini şeffaf, düzenli ve sürdürülebilir yapılarla yönetiyoruz.',
    liste: [
      'Yönetici ve idari personel desteği',
      'Muhasebe yönetimi',
      'Aidat, bütçe ve gelir-gider takibi',
      'Halkla ilişkiler yönetimi',
      'Site, rezidans ve tesis operasyon yönetimi',
    ],
    ikon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    baslik: 'Operasyonel Destek Hizmetleri',
    aciklama: 'Sahadaki tüm operasyonları profesyonel ekip ve koordinasyon yapısıyla sürdürüyoruz.',
    liste: [
      'Profesyonel temizlik',
      'Özel güvenlik çözümleri',
      'Teknik bakım ve onarım',
      'Çöp toplama ve atık yönetimi',
      'İlaçlama ve dezenfeksiyon',
      'Acil müdahale ve saha koordinasyonu',
    ],
    ikon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20.49 12H22M2 12h1.51M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20.49V22M12 2v1.51" />
      </svg>
    ),
  },
  {
    baslik: 'Yaşam Alanı ve Sosyal Hizmetler',
    aciklama: 'Yaşam alanlarının estetik, sosyal ve işlevsel bütünlüğünü güçlendiren hizmetler sunuyoruz.',
    liste: [
      'Peyzaj ve çevre düzenleme',
      'Bahçe bakım hizmetleri',
      'Catering hizmetleri',
      'Sosyal tesis personel istihdamı',
      'Ortak alan düzeni',
      'Sosyal alan ve etkinlik koordinasyonu',
    ],
    ikon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 7 4a5 5 0 0010 0c0 0-5 3-5 8z" />
        <path d="M12 12c0 0-3 2-6 1" />
      </svg>
    ),
  },
  {
    baslik: 'Kutlukent Artı+',
    aciklama: 'Premium segment ihtiyaçlar için özel planlanan kurumsal çözümler.',
    liste: [
      'Özel teknik destek',
      'VIP koruma',
      'VIP karşılama',
      'Kuruma özel hizmet kurguları',
      'Üst segment konut ve ticari mülk çözümleri',
      'Talebe özel operasyon planlaması',
    ],
    ikon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const NEDEN_MADDELER = [
  {
    baslik: 'Şeffaf Yönetim',
    aciklama: 'Veriye dayalı, açık ve hesap verebilir süreç yönetimi.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    baslik: 'Profesyonel Operasyon',
    aciklama: 'Planlı saha yönetimi, disiplinli operasyon modeli ve uzman koordinasyon.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    baslik: 'Premium Hizmet Yaklaşımı',
    aciklama: 'Detay odaklı, yüksek standartlı ve çözüm merkezli hizmet anlayışı.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    baslik: 'İnsana ve Doğaya Saygı',
    aciklama: 'Yaşam kalitesini ve çevresel dengeyi merkeze alan yaklaşım.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    baslik: 'Tek Merkezden Çözüm',
    aciklama: 'Yönetim, operasyon, çevre ve destek süreçlerinin tek yapı altında yönetilmesi.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    baslik: 'Güven Veren Kurumsal Yapı',
    aciklama: 'Ulusal ölçekte hizmet vizyonuna sahip, güçlü ve sürdürülebilir kurumsal model.',
    ikon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   HİZMET KARTI
───────────────────────────────────────────── */
function HizmetKart({ kategori, index }: { kategori: HizmetKategori; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isPlus = index === 3;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={`group relative border p-8 transition-colors duration-300 ${
        isPlus
          ? 'border-[#d0a246]/50 bg-[#d0a246]/5 hover:border-[#d0a246]'
          : 'border-white/5 hover:border-[#d0a246]/35 bg-[#26292c]/60'
      }`}
    >
      {isPlus && (
        <span className="absolute top-4 right-4 text-[#d0a246] text-[9px] tracking-[0.3em] uppercase border border-[#d0a246]/40 px-2 py-0.5" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Premium
        </span>
      )}
      <div className={`mb-5 transition-colors duration-300 ${isPlus ? 'text-[#d0a246]' : 'text-[#d0a246]/50 group-hover:text-[#d0a246]'}`}>
        {kategori.ikon}
      </div>
      <h3 className="text-[#f5f0e8] text-lg font-semibold mb-2 leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
        {kategori.baslik}
      </h3>
      <p className="text-[#f5f0e8]/45 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-lora)' }}>
        {kategori.aciklama}
      </p>
      <ul className="space-y-2">
        {kategori.liste.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[#f5f0e8]/55 text-sm" style={{ fontFamily: 'var(--font-lora)' }}>
            <span className="w-1 h-1 rounded-full bg-[#d0a246] mt-[7px] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="h-px mt-6 bg-gradient-to-r from-[#d0a246] to-transparent w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   AĞAÇ PARALLAX ARKA PLAN
───────────────────────────────────────────── */
function TreeBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-40vh']);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        right: '2vw',
        top: '5vh',
        width: '28vw',
        maxWidth: '400px',
        height: '95vh',
        overflow: 'hidden',
      }}
    >
      <motion.img
        src="/images/ikon.png"
        alt=""
        style={{
          width: '100%',
          height: '150vh',
          objectFit: 'contain',
          objectPosition: 'top center',
          display: 'block',
          opacity: 0.1,
          y,
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEKLİF FORM MODAL
───────────────────────────────────────────── */
function TeklifModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ ad: '', site: '', tel: '' });

  const handleSubmit = () => {
    const msg = `Merhaba, teklif almak istiyorum.\nAd Soyad: ${form.ad}\nSite/Apartman: ${form.site}\nTelefon: ${form.tel}`;
    window.open(`https://wa.me/905404270099?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#1e2124] border border-[#d0a246]/25 p-8 md:p-10 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#f5f0e8]/30 hover:text-[#d0a246] transition-colors"
          aria-label="Kapat"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <span className="text-[#d0a246] text-[10px] tracking-[0.35em] uppercase block mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Hızlı Teklif
        </span>
        <h3 className="text-2xl font-bold text-[#f5f0e8] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
          Teklif Alın
        </h3>

        <div className="space-y-4">
          {[
            { key: 'ad', label: 'Ad Soyad', placeholder: 'Adınız ve soyadınız' },
            { key: 'site', label: 'Site / Tesis Adı', placeholder: 'Yönetilecek tesis adı' },
            { key: 'tel', label: 'Telefon', placeholder: '05XX XXX XX XX' },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-[#f5f0e8]/50 text-[10px] tracking-[0.25em] uppercase block mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                className="w-full bg-[#26292c] border border-white/10 focus:border-[#d0a246]/50 outline-none px-4 py-3 text-[#f5f0e8] text-sm placeholder:text-[#f5f0e8]/20 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-lora)' }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="group relative overflow-hidden w-full mt-6 py-3.5 bg-[#d0a246] text-[#26292c] text-[11px] font-bold tracking-[0.28em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,162,70,0.3)] flex items-center justify-center gap-2"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="relative z-10">WhatsApp ile Gönder</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <div className="bg-[#26292c] text-[#f5f0e8] min-h-screen antialiased">

      {/* ── AĞAÇ PARALLAX ARKA PLAN ───────────── */}
      <TreeBackground />

      {/* ── MODAL ─────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && <TeklifModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      {/* ── STİCKY CTA ────────────────────────── */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-2 items-end">
        <a
          href="https://wa.me/905404270099"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#d0a246] text-[#26292c] px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-[0_0_20px_rgba(208,162,70,0.4)] transition-all duration-300"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#26292c] border border-[#d0a246]/40 text-[#d0a246] px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:border-[#d0a246] transition-all duration-300 shadow-lg"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Teklif Al
        </button>
      </div>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#26292c]/96 backdrop-blur-lg border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          <a href="#hero" className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image src="/images/logo.svg" alt="Kutlukent Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>
              <span className="text-[#d0a246] text-xs font-semibold tracking-[0.22em] uppercase">Kutlukent</span>
              <span className="text-[#f5f0e8]/35 text-[9px] tracking-[0.18em] uppercase mt-0.5">Samsun Site ve Tesis Yönetimi</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="relative text-[11px] text-[#f5f0e8]/60 hover:text-[#d0a246] transition-colors duration-300 tracking-[0.12em] uppercase group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#d0a246] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.apsiyon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] border border-[#d0a246]/35 text-[#d0a246]/80 hover:border-[#d0a246] hover:text-[#d0a246] px-4 py-2 tracking-[0.12em] uppercase transition-all duration-300"
              >
                Apsiyon Giriş
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8" onClick={() => setMenuOpen((v) => !v)} aria-label="Menü">
            <span className={`w-6 h-px bg-[#f5f0e8] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`w-6 h-px bg-[#f5f0e8] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-6 h-px bg-[#f5f0e8] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden overflow-hidden bg-[#1e2124]/98 backdrop-blur-xl border-t border-white/5"
        >
          <ul className="px-6 py-6 flex flex-col gap-5" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-[#f5f0e8]/70 hover:text-[#d0a246] tracking-[0.12em] uppercase transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://www.apsiyon.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d0a246]/70 tracking-[0.12em] uppercase">
                Apsiyon Giriş
              </a>
            </li>
          </ul>
        </motion.div>
      </header>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">

        <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")" }} />
        <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-[#d0a246]/8 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 lg:pr-[32vw]">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-block text-[#d0a246] text-[10px] tracking-[0.42em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Kutlu Kentiniz, Güvenli Eviniz
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.12] mb-7 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Samsun Site ve Tesis Yönetimi
<br />
<em className="not-italic text-[#d0a246]">Profesyonel Yönetim Çözümleri</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="w-14 h-px bg-[#d0a246] mx-auto mb-8 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 1.05 }}
            className="text-[#f5f0e8]/60 text-base md:text-lg leading-[1.9] max-w-2xl mx-auto mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Kutlukent; Samsun genelinde apartman, site, rezidans, iş merkezi ve tesisler için profesyonel yönetim hizmetleri sunan kurumsal bir tesis yönetimi markasıdır. Şeffaf yönetim, düzenli operasyon, kat malikleriyle güçlü iletişim ve çözüm ortaklarıyla koordinasyon anlayışıyla yaşam alanlarının günlük işleyişini daha güvenli, düzenli ve sürdürülebilir hale getirir.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 1.15 }}
            className="text-[#f5f0e8]/45 text-sm leading-[1.9] max-w-xl mx-auto mb-11"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Güvenli, düzenli, şeffaf ve sürdürülebilir yaşam alanları oluşturmak için profesyonel
            yönetim anlayışını bütüncül hizmet modeliyle buluşturur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group relative overflow-hidden flex items-center gap-2.5 px-9 py-3.5 bg-[#d0a246] text-[#26292c] text-[11px] font-bold tracking-[0.28em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(208,162,70,0.35)]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <span className="relative z-10">Teklif Al</span>
              <div className="absolute inset-0 bg-white/25 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            </button>

            <a
              href="#hizmetler"
              className="px-9 py-3.5 border border-[#d0a246]/35 text-[#f5f0e8]/65 text-[11px] tracking-[0.28em] uppercase hover:border-[#d0a246] hover:text-[#d0a246] transition-all duration-300"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Hizmetlerimizi İnceleyin
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VİZYON
      ══════════════════════════════════════ */}
      <section id="vizyon" className="py-24 md:py-32 px-6 bg-[#1e2124]/90 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(208,162,70,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">

          <Reveal className="text-center mb-14">
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-4 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Felsefemiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Bizim Vizyonumuz,{' '}
              <em className="not-italic text-[#d0a246]">Sizin Mutluluğunuz</em>
            </h2>
            <div className="w-10 h-px bg-[#d0a246] mx-auto mb-8" />
            <p className="text-[#f5f0e8]/55 text-base md:text-lg leading-[1.9] max-w-2xl mx-auto mb-5" style={{ fontFamily: 'var(--font-lora)' }}>
              Yarının yaşam alanlarını, bugünün değerleriyle yönetiyoruz. Geleneksel saygı anlayışımızı
              modern operasyon disiplini, profesyonel yönetim yaklaşımı ve çağdaş tesis çözümleriyle birleştiriyoruz.
            </p>
            <p className="text-[#f5f0e8]/45 text-sm leading-[1.9] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
              Kutlukent için yönetim; yalnızca binaların idaresi değil, insanların huzurla yaşayabildiği,
              doğayla dengeli, güven veren ve sürdürülebilir alanlar inşa etme sorumluluğudur.
              Biz, sadece yönetilen değil; yaşanılan, hissedilen ve değer üreten yaşam alanları oluşturmak için çalışıyoruz.
            </p>
          </Reveal>

          {/* Dört temel unsur */}
          <Reveal>
            <h3 className="text-center text-[#f5f0e8]/70 text-sm tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Vizyonumuzun Temelini Dört Sarsılmaz Sütun Oluşturur
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {VIZYON_SUTUNLAR.map((sutun, i) => (
              <Reveal key={sutun.baslik} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="group border border-[#d0a246]/15 hover:border-[#d0a246]/40 p-7 text-center transition-colors duration-300 h-full"
                >
                  <div className="text-[#d0a246]/55 group-hover:text-[#d0a246] transition-colors duration-300 mb-4 flex justify-center">
                    {sutun.ikon}
                  </div>
                  <h3 className="text-[#d0a246] text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {sutun.baslik}
                  </h3>
                  <p className="text-[#f5f0e8]/50 text-sm leading-[1.85]" style={{ fontFamily: 'var(--font-lora)' }}>
                    {sutun.aciklama}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="border border-[#d0a246]/18 p-10 md:p-14 text-center relative">
              <div className="text-[#d0a246]/15 text-8xl absolute top-2 left-6 leading-none select-none" style={{ fontFamily: 'var(--font-playfair)' }}>"</div>
              <p className="text-xl md:text-2xl text-[#f5f0e8]/75 leading-relaxed italic relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>
                En büyük başarımız, yönettiğimiz alanlarda doğanın nefesini
                ve insanın gülümsemesini koruyabilmektir.
              </p>
              <div className="w-8 h-px bg-[#d0a246] mx-auto mt-6 mb-3" />
              <p className="text-[#d0a246]/50 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Kutlukent Yönetim Felsefesi
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HİZMETLER
      ══════════════════════════════════════ */}
      <section id="hizmetler" className="py-24 md:py-32 px-6 bg-[#26292c]/90 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-5">
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-4 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Tek Merkezden Bütüncül{' '}
              <em className="not-italic text-[#d0a246]">Tesis Yönetimi</em>
            </h2>
            <div className="w-10 h-px bg-[#d0a246] mx-auto mb-6" />
            <p className="text-[#f5f0e8]/50 text-base leading-[1.9] max-w-xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
              Kutlukent, yaşam ve çalışma alanlarının tüm yönetim ihtiyaçlarını tek çatı altında
              planlayan entegre hizmet modeline sahiptir.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {HIZMET_KATEGORILER.map((kategori, i) => (
              <HizmetKart key={kategori.baslik} kategori={kategori} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEDEN KUTLUKENT
      ══════════════════════════════════════ */}
      <section id="neden" className="py-24 md:py-32 px-6 bg-[#1e2124]/90 relative z-10">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(208,162,70,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-14">
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-4 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Farkımız
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Neden Kutlukent?
            </h2>
            <div className="w-10 h-px bg-[#d0a246] mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEDEN_MADDELER.map((madde, i) => (
              <Reveal key={madde.baslik} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="group border border-[#d0a246]/15 hover:border-[#d0a246]/40 p-7 transition-colors duration-300 h-full"
                >
                  <div className="text-[#d0a246]/55 group-hover:text-[#d0a246] transition-colors duration-300 mb-4">
                    {madde.ikon}
                  </div>
                  <h3 className="text-[#f5f0e8] text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {madde.baslik}
                  </h3>
                  <p className="text-[#f5f0e8]/45 text-sm leading-[1.85]" style={{ fontFamily: 'var(--font-lora)' }}>
                    {madde.aciklama}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HAKKIMIZDA
      ══════════════════════════════════════ */}
      <section id="hakkimizda" className="py-24 md:py-32 px-6 bg-[#26292c]/90 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 55% at 25% 55%, rgba(208,162,70,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">

          <Reveal className="text-center mb-14">
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-4 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Ekibimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Hakkımızda
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/erkan.png"
                    alt="Erkan Yılmaz — Kutlukent Tesis Yönetim Uzmanı"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 border border-[#d0a246]/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#26292c] to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Erkan Yılmaz
                  </h3>
                  <p className="text-[#d0a246] text-[9px] tracking-[0.28em] uppercase mt-0.5" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Operasyon & Tesis Yönetim Uzmanı
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border-l-2 border-[#d0a246]/30 pl-8 mb-10">
                <p className="text-[#f5f0e8]/65 text-base leading-[1.95]" style={{ fontFamily: 'var(--font-lora)' }}>
                  15 yılı aşkın operasyon ve müşteri yönetimi deneyimiyle, tesis yönetiminde
                  disiplinli, şeffaf ve çözüm odaklı bir yaklaşım sunuyoruz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[#d0a246] text-[10px] tracking-[0.28em] uppercase mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Diller
                  </p>
                  <ul className="space-y-2">
                    {['Almanca', 'İngilizce', 'Rusça'].map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[#f5f0e8]/55 text-sm" style={{ fontFamily: 'var(--font-lora)' }}>
                        <span className="w-1 h-1 rounded-full bg-[#d0a246]" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[#d0a246] text-[10px] tracking-[0.28em] uppercase mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Uzmanlık
                  </p>
                  <ul className="space-y-2">
                    {['Tesis Yönetimi', 'Operasyon Planlaması', 'Ekip Liderliği'].map((u) => (
                      <li key={u} className="flex items-center gap-2 text-[#f5f0e8]/55 text-sm" style={{ fontFamily: 'var(--font-lora)' }}>
                        <span className="w-1 h-1 rounded-full bg-[#d0a246]" />{u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Güven', desc: 'Şeffaf yönetim' },
                  { title: 'Disiplin', desc: 'Eksiksiz operasyon' },
                  { title: 'İnsan Odaklı', desc: 'Sakin memnuniyeti' },
                ].map((v) => (
                  <div key={v.title} className="text-center">
                    <div className="w-5 h-px bg-[#d0a246] mx-auto mb-3" />
                    <h4 className="text-[#d0a246] text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {v.title}
                    </h4>
                    <p className="text-[#f5f0e8]/35 text-[11px]" style={{ fontFamily: 'var(--font-lora)' }}>
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KAPANIŞ CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[#1e2124]/90 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(208,162,70,0.06) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-5 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Birlikte Planlayalım
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6 leading-snug" style={{ fontFamily: 'var(--font-playfair)' }}>
              Geleceğin Huzurunu{' '}
              <em className="not-italic text-[#d0a246]">Bugünden Kuruyoruz</em>
            </h2>
            <div className="w-10 h-px bg-[#d0a246] mx-auto mb-8" />
            <p className="text-[#f5f0e8]/55 text-base leading-[1.9] mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
              Yaşam alanınız için güvenilir, düzenli ve profesyonel bir yönetim modeli oluşturmak üzere
              Kutlukent ile iletişime geçin.
            </p>
            <p className="text-[#f5f0e8]/40 text-sm leading-[1.9] mb-10" style={{ fontFamily: 'var(--font-lora)' }}>
              Entegre tesis yönetimi çözümlerimizi birlikte planlayalım.
            </p>
            <a
              href="#iletisim"
              className="group relative overflow-hidden inline-flex items-center gap-3 px-12 py-4 bg-[#d0a246] text-[#26292c] text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(208,162,70,0.35)]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <span className="relative z-10">Bizimle İletişime Geçin</span>
              <div className="absolute inset-0 bg-white/25 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          İLETİŞİM
      ══════════════════════════════════════ */}
      <section id="iletisim" className="py-24 md:py-32 px-6 bg-[#26292c]/90 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 55% at 75% 50%, rgba(208,162,70,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-6xl mx-auto relative z-10">

          <Reveal className="text-center mb-14">
            <span className="text-[#d0a246] text-[10px] tracking-[0.38em] uppercase mb-4 block" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Bize Ulaşın
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              İletişim
            </h2>
            <div className="w-10 h-px bg-[#d0a246] mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#f5f0e8] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Erkan Yılmaz
                </h3>
                <p className="text-[#d0a246] text-[10px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Kurucu | Tesis Yönetim Uzmanı
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>, text: '+90 540 427 00 99', href: 'tel:+905404270099' },
                  { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text: 'e.yilmaz@kutlukent.net', href: 'mailto:e.yilmaz@kutlukent.net' },
                  { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: 'Çakırlar Yalı Mh. Şahin Cad. No 28 - Atakum / Samsun', href: 'https://maps.google.com/?q=Atakum,Samsun' },
                ].map((item) => (
                  <a key={item.text} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 text-[#f5f0e8]/50 hover:text-[#d0a246] transition-colors duration-300 group">
                    <span className="text-[#d0a246] shrink-0">{item.icon}</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300" style={{ fontFamily: 'var(--font-lora)' }}>{item.text}</span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-[#d0a246]/18 p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d0a246]" />
                  <p className="text-[#d0a246] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Hızlı Yanıt: En kısa sürede dönüş sağlanır.
                  </p>
                </div>

                <p className="text-[#f5f0e8]/50 text-sm leading-[1.9] mb-7" style={{ fontFamily: 'var(--font-lora)' }}>
                  Tesisinizin yönetimi için profesyonel bir teklif almak veya mevcut
                  yönetim kalitenizi değerlendirmek için bizimle iletişime geçin.
                </p>

                <a
                  href="https://wa.me/905404270099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 bg-[#d0a246] text-[#26292c] text-[11px] font-bold tracking-[0.28em] uppercase mb-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,162,70,0.3)]"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="relative z-10">WhatsApp ile Ulaş</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </a>

                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center justify-center w-full py-4 border border-[#d0a246]/35 text-[#f5f0e8]/60 text-[11px] tracking-[0.28em] uppercase hover:border-[#d0a246] hover:text-[#d0a246] transition-all duration-300"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Teklif Al
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="pt-14 pb-8 px-6 border-t border-white/5 bg-[#1a1d1f]/90 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-9 h-9 shrink-0">
                  <Image src="/images/logo.svg" alt="Kutlukent Logo" fill className="object-contain" />
                </div>
                <div style={{ fontFamily: 'var(--font-montserrat)' }}>
                  <p className="text-[#d0a246] text-xs font-semibold tracking-[0.22em] uppercase">Kutlukent</p>
                  <p className="text-[#f5f0e8]/30 text-[9px] tracking-[0.18em] uppercase">Tesis Yönetimi</p>
                </div>
              </div>
              <p className="text-[#f5f0e8]/35 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-lora)' }}>
                Kutlu Kentiniz, Güvenli Eviniz
              </p>
            </div>

            <div>
              <p className="text-[#d0a246] text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Hizmetler
              </p>
              <ul className="space-y-2.5">
                {['Yönetim Hizmetleri', 'Operasyonel Destek', 'Yaşam Alanı Hizmetleri', 'Kutlukent Artı+'].map((h) => (
                  <li key={h}>
                    <a href="#hizmetler" className="text-[#f5f0e8]/35 hover:text-[#d0a246] text-xs transition-colors duration-200" style={{ fontFamily: 'var(--font-lora)' }}>
                      {h}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#d0a246] text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                İletişim
              </p>
              <ul className="space-y-2.5">
                {[
                  { text: 'Çakırlar Yalı Mh. Şahin Cad. No 28 - Atakum / Samsun', href: 'https://maps.google.com/?q=Atakum,Samsun' },
                  { text: '+90 540 427 00 99', href: 'tel:+905404270099' },
                  { text: 'e.yilmaz@kutlukent.net', href: 'mailto:e.yilmaz@kutlukent.net' },
                ].map((item) => (
                  <li key={item.text}>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#f5f0e8]/35 hover:text-[#d0a246] text-xs transition-colors duration-200" style={{ fontFamily: 'var(--font-lora)' }}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#f5f0e8]/20 text-[10px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              © 2026 Kutlukent Tesis Yönetimi. Tüm hakları saklıdır.
            </p>
            <p className="text-[#d0a246]/25 text-[10px] tracking-[0.2em] italic" style={{ fontFamily: 'var(--font-lora)' }}>
              Samsun
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}