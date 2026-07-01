import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samsun Site Yönetimi | Kutlukent',
  description:
    'Kutlukent, Samsun genelinde profesyonel site yönetimi hizmetleri sunar. Şeffaf yönetim, düzenli operasyon, aidat takibi ve çözüm ortaklarıyla koordinasyon sağlar.',
};

export default function SamsunSiteYonetimiPage() {
  return (
    <main className="min-h-screen bg-[#26292c] text-[#f5f0e8]">
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="inline-block text-[#d0a246] text-xs tracking-[0.25em] uppercase mb-12 hover:text-[#f5f0e8] transition-colors"
          >
            ← Ana Sayfaya Dön
          </a>

          <p className="text-[#d0a246] text-[11px] tracking-[0.35em] uppercase mb-5">
            Samsun Geneli Profesyonel Yönetim
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Samsun Site Yönetimi
          </h1>

          <p className="text-[#f5f0e8]/65 text-lg leading-8 max-w-3xl mb-12" style={{ fontFamily: 'var(--font-lora)' }}>
            Kutlukent, Samsun genelinde site, apartman ve yaşam alanları için profesyonel site yönetimi hizmetleri sunar.
            Şeffaf yönetim, düzenli operasyon, güçlü iletişim ve çözüm ortaklarıyla koordinasyon anlayışıyla site sakinlerinin
            ve yöneticilerin yükünü hafifletir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              {
                title: 'Şeffaf Yönetim',
                text: 'Gelir, gider, aidat ve operasyon süreçlerinin düzenli takip edilmesini sağlar.',
              },
              {
                title: 'Düzenli Operasyon',
                text: 'Temizlik, güvenlik, teknik bakım ve peyzaj süreçlerinin koordinasyonunu destekler.',
              },
              {
                title: 'Güven Veren İletişim',
                text: 'Kat malikleri, yöneticiler ve hizmet firmaları arasında düzenli iletişim kurar.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#d0a246]/20 p-7 bg-[#1e2124]/60">
                <h2 className="text-[#d0a246] text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h2>
                <p className="text-[#f5f0e8]/55 text-sm leading-7" style={{ fontFamily: 'var(--font-lora)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Samsun’da Profesyonel Site Yönetimi Neden Önemlidir?
            </h2>

            <p className="text-[#f5f0e8]/60 leading-8 mb-5" style={{ fontFamily: 'var(--font-lora)' }}>
              Sitelerde düzenli yönetim; yalnızca aidat toplanması veya günlük işlerin takip edilmesi değildir.
              Ortak alanların korunması, hizmet firmalarının doğru koordine edilmesi, kat malikleriyle sağlıklı iletişim kurulması
              ve bütçe sürecinin şeffaf yürütülmesi profesyonel bir sistem gerektirir.
            </p>

            <p className="text-[#f5f0e8]/60 leading-8" style={{ fontFamily: 'var(--font-lora)' }}>
              Kutlukent, Samsun genelindeki yaşam alanlarında yönetim süreçlerini daha düzenli, anlaşılır ve sürdürülebilir hale
              getirmek için çalışır. Site sakinlerinin huzurlu bir yaşam alanına sahip olması, yöneticilerin ise daha kontrollü
              ve takip edilebilir bir yönetim yapısına ulaşması hedeflenir.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Site Yönetimi Kapsamında Sunulan Hizmetler
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Site yönetimi ve operasyon takibi',
                'Aidat, bütçe ve gelir-gider süreçlerinin takibi',
                'Kat malikleri ve yöneticilerle düzenli iletişim',
                'Temizlik hizmetlerinin koordinasyonu',
                'Güvenlik hizmetlerinin koordinasyonu',
                'Teknik bakım ve onarım süreçlerinin takibi',
                'Peyzaj ve ortak alan düzeni koordinasyonu',
                'Çözüm ortaklarıyla profesyonel süreç yönetimi',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[#f5f0e8]/60 leading-7">
                  <span className="text-[#d0a246] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-[#d0a246]/25 p-8 md:p-10 bg-[#1e2124]/70">
            <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              Samsun’da Siteniz İçin Profesyonel Yönetim Desteği Alın
            </h2>

            <p className="text-[#f5f0e8]/60 leading-8 mb-8" style={{ fontFamily: 'var(--font-lora)' }}>
              Sitenizin yönetim sürecini daha şeffaf, düzenli ve profesyonel bir yapıya taşımak için Kutlukent ile iletişime geçebilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905404270099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center bg-[#d0a246] text-[#26292c] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase"
              >
                WhatsApp ile Ulaş
              </a>

              <a
                href="tel:+905404270099"
                className="inline-flex justify-center border border-[#d0a246]/40 text-[#d0a246] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase"
              >
                Telefon Et
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}