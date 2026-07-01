import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samsun’da Yapı Yönetimi Firması Seçerken Nelere Dikkat Edilmeli? | Kutlukent',
  description:
    'Samsun’da yapı yönetimi firması seçerken dikkat edilmesi gereken temel kriterler: şeffaf yönetim, düzenli operasyon, iletişim, bütçe takibi ve çözüm ortakları koordinasyonu.',
};

export default function YapiYonetimiFirmasiSecerkenPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Yapı yönetimi firması seçerken en önemli kriter nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yapı yönetimi firması seçerken en önemli kriterlerden biri şeffaf ve düzenli süreç takibidir. Aidat, bütçe, gelir-gider, hizmet firmaları ve operasyon süreçleri anlaşılır şekilde yönetilmelidir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Samsun’da yapı yönetimi hizmeti kimler için uygundur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Samsun’da yapı yönetimi hizmeti apartmanlar, siteler, rezidanslar, iş merkezleri ve ortak yaşam alanı bulunan tesisler için uygundur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Profesyonel yapı yönetimi ne sağlar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Profesyonel yapı yönetimi; yöneticilerin yükünü hafifletir, kat malikleriyle iletişimi güçlendirir, ortak alan düzenini destekler ve hizmet süreçlerinin daha kontrollü yürütülmesine yardımcı olur.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#26292c] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="px-6 py-24 md:py-32">
        <article className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-block text-[#d0a246] text-xs tracking-[0.25em] uppercase mb-12 hover:text-[#f5f0e8] transition-colors"
          >
            ← Ana Sayfaya Dön
          </a>

          <p className="text-[#d0a246] text-[11px] tracking-[0.35em] uppercase mb-5">
            Bilgi Merkezi
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-[#f5f0e8]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Samsun’da Yapı Yönetimi Firması Seçerken{' '}
            <span className="text-[#d0a246]">Nelere Dikkat Edilmeli?</span>
          </h1>

          <p
            className="text-[#f5f0e8]/65 text-lg leading-8 mb-12"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Apartman, site veya tesis yönetimi için doğru firmayı seçmek; yalnızca günlük işlerin
            yürütülmesi açısından değil, yaşam alanında güven, düzen ve sürdürülebilirlik açısından
            da önemlidir. Samsun’da yapı yönetimi hizmeti alırken firmanın çalışma disiplini,
            iletişim yapısı ve süreç takibi dikkatle değerlendirilmelidir.
          </p>

          <section className="mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#d0a246]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              1. Şeffaf Yönetim Anlayışı Olmalı
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Yapı yönetiminde en önemli başlıklardan biri şeffaflıktır. Aidat, bütçe, gelir-gider
              ve hizmet süreçlerinin düzenli takip edilmesi; kat malikleri ve yöneticiler açısından
              güven veren bir yönetim ortamı oluşturur. Belirsiz, dağınık ve sözlü yürüyen süreçler
              zamanla iletişim sorunlarına neden olabilir.
            </p>
          </section>

          <section className="mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#d0a246]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              2. Operasyon Takibi Düzenli Yapılmalı
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Temizlik, güvenlik, teknik bakım, peyzaj ve ortak alan düzeni gibi hizmetler yalnızca
              anlaşma yapmakla bitmez. Bu hizmetlerin düzenli kontrol edilmesi, aksaklıkların
              zamanında tespit edilmesi ve çözüm ortaklarıyla koordinasyon kurulması gerekir.
              Profesyonel yönetim firması bu süreci takip edilebilir hale getirmelidir.
            </p>
          </section>

          <section className="mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#d0a246]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              3. Kat Malikleriyle İletişim Güçlü Olmalı
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Apartman ve site yönetiminde iletişim düzeni çok önemlidir. Kat malikleri, yöneticiler
              ve hizmet firmaları arasında düzenli bilgi akışı sağlanmadığında küçük sorunlar büyüyebilir.
              Bu nedenle yönetim firmasının açık, sakin, çözüm odaklı ve ulaşılabilir bir iletişim
              yapısı sunması gerekir.
            </p>
          </section>

          <section className="mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#d0a246]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              4. Hizmet Kapsamı Net Olmalı
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Bir yapı yönetimi firmasıyla çalışmadan önce hangi hizmetlerin sunulduğu net olarak
              bilinmelidir. Site yönetimi, apartman yönetimi, tesis yönetimi, aidat takibi, teknik
              bakım koordinasyonu, temizlik ve güvenlik süreçleri ayrı ayrı değerlendirilmelidir.
              Hizmet kapsamının baştan net olması ileride oluşabilecek karışıklıkları azaltır.
            </p>
          </section>

          <section className="mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#d0a246]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              5. Yerel Hizmet Kabiliyeti Önemlidir
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Samsun’da hizmet veren bir yapı yönetimi firmasının bölgedeki ihtiyaçları, yaşam
              alışkanlıklarını ve hizmet sağlayıcı ağını tanıması avantaj sağlar. Yerel takip gücü,
              hızlı iletişim ve çözüm ortaklarıyla koordinasyon, yönetim sürecinin daha sağlıklı
              ilerlemesine yardımcı olur.
            </p>
          </section>

          <section className="border border-[#d0a246]/25 p-8 md:p-10 bg-[#1e2124]/70 mb-14">
            <h2
              className="text-3xl font-bold mb-5 text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kutlukent’in Yaklaşımı
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-6"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Kutlukent, Samsun genelinde site, apartman ve tesis yönetimi süreçlerinde şeffaflık,
              düzenli operasyon, güven veren iletişim ve çözüm ortaklarıyla koordinasyon anlayışını
              merkeze alır. Amaç; yöneticilerin ve kat maliklerinin yükünü hafifletirken yaşam
              alanlarında kalıcı bir düzen oluşturmaktır.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/samsun-yapi-yonetimi"
                className="inline-flex justify-center bg-[#d0a246] text-[#26292c] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase"
              >
                Yapı Yönetimi Hizmetini İncele
              </a>

              <a
                href="https://wa.me/905404270099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-[#d0a246]/40 text-[#d0a246] px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase"
              >
                WhatsApp ile Ulaş
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-6 text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-5">
              {[
                {
                  question: 'Yapı yönetimi firması seçerken en önemli kriter nedir?',
                  answer:
                    'Şeffaf ve düzenli süreç takibi en önemli kriterlerden biridir. Aidat, bütçe, gelir-gider, operasyon ve hizmet firmalarıyla koordinasyon açık şekilde yürütülmelidir.',
                },
                {
                  question: 'Samsun’da yapı yönetimi hizmeti kimler için uygundur?',
                  answer:
                    'Apartmanlar, siteler, rezidanslar, iş merkezleri ve ortak yaşam alanı bulunan tesisler için uygundur.',
                },
                {
                  question: 'Profesyonel yapı yönetimi ne sağlar?',
                  answer:
                    'Yöneticilerin yükünü hafifletir, kat malikleriyle iletişimi güçlendirir, hizmet süreçlerini düzenler ve ortak alanların daha kontrollü yönetilmesine destek olur.',
                },
              ].map((item) => (
                <div key={item.question} className="border border-[#d0a246]/15 p-6 bg-[#1e2124]/50">
                  <h3
                    className="text-[#f5f0e8] text-xl font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.question}
                  </h3>
                  <p
                    className="text-[#f5f0e8]/60 leading-7"
                    style={{ fontFamily: 'var(--font-lora)' }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-[#d0a246]/15">
            <p className="text-[#f5f0e8]/45 text-sm mb-4">İlgili hizmet sayfaları:</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/samsun-site-yonetimi" className="text-[#d0a246] hover:text-[#f5f0e8]">
                Samsun Site Yönetimi
              </a>
              <a href="/samsun-apartman-yonetimi" className="text-[#d0a246] hover:text-[#f5f0e8]">
                Samsun Apartman Yönetimi
              </a>
              <a href="/samsun-yapi-yonetimi" className="text-[#d0a246] hover:text-[#f5f0e8]">
                Samsun Yapı Yönetimi
              </a>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}