import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samsun Apartman Yönetimi | Kutlukent',
  description:
    'Kutlukent, Samsun genelinde apartman yönetimi hizmetleri sunar. Aidat takibi, gelir-gider süreci, kat malikleri iletişimi ve operasyonel takipte profesyonel destek sağlar.',
};

export default function SamsunApartmanYonetimiPage() {
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
            Samsun Geneli Apartman Yönetimi
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Samsun Apartman Yönetimi
          </h1>

          <p
            className="text-[#f5f0e8]/65 text-lg leading-8 max-w-3xl mb-12"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Kutlukent, Samsun genelinde apartmanlar için şeffaf, düzenli ve profesyonel yönetim
            desteği sunar. Aidat takibi, gelir-gider süreci, ortak alan düzeni, kat malikleriyle
            iletişim ve hizmet firmalarının koordinasyonu gibi süreçlerin daha kontrollü yürütülmesine
            katkı sağlar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              {
                title: 'Aidat ve Bütçe Takibi',
                text: 'Apartmanın gelir, gider, aidat ve ödeme süreçlerinin düzenli takip edilmesine destek olur.',
              },
              {
                title: 'Kat Malikleri İletişimi',
                text: 'Apartman sakinleri, yöneticiler ve hizmet sağlayıcılar arasında daha düzenli iletişim kurulmasını sağlar.',
              },
              {
                title: 'Ortak Alan Düzeni',
                text: 'Temizlik, bakım, onarım ve ortak alan kullanımı gibi süreçlerin koordinasyonunu destekler.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#d0a246]/20 p-7 bg-[#1e2124]/60">
                <h2
                  className="text-[#d0a246] text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-[#f5f0e8]/55 text-sm leading-7"
                  style={{ fontFamily: 'var(--font-lora)' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Samsun’da Apartman Yönetimi Neden Profesyonel Olmalıdır?
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-5"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Apartman yönetimi; yalnızca aidat toplamak veya günlük işlerle ilgilenmekten ibaret
              değildir. Ortak alanların düzenli kullanımı, bina bakım süreçlerinin takibi, giderlerin
              şeffaf şekilde yürütülmesi ve kat malikleriyle sağlıklı iletişim kurulması profesyonel
              bir yönetim anlayışı gerektirir.
            </p>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Kutlukent, Samsun genelinde apartmanların yönetim süreçlerini daha anlaşılır, takip
              edilebilir ve sürdürülebilir hale getirmeyi amaçlar. Yönetici ve kat maliklerinin
              üzerindeki operasyon yükünü azaltarak daha düzenli bir yaşam alanı oluşturulmasına
              destek olur.
            </p>
          </section>

          <section className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Apartman Yönetimi Kapsamında Sunulan Hizmetler
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Apartman yönetimi ve operasyon takibi',
                'Aidat, bütçe ve gelir-gider süreçlerinin takibi',
                'Kat malikleriyle düzenli iletişim',
                'Ortak alan temizlik süreçlerinin koordinasyonu',
                'Teknik bakım ve onarım süreçlerinin takibi',
                'Apartman karar ve duyuru süreçlerinde düzenli iletişim',
                'Hizmet firmalarıyla koordinasyon',
                'Yönetici ve apartman sakinleri için profesyonel destek',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[#f5f0e8]/60 leading-7">
                  <span className="text-[#d0a246] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-[#d0a246]/25 p-8 md:p-10 bg-[#1e2124]/70">
            <h2
              className="text-3xl font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Samsun’da Apartmanınız İçin Profesyonel Yönetim Desteği Alın
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Apartman yönetim sürecinizi daha düzenli, şeffaf ve profesyonel bir yapıya taşımak
              için Kutlukent ile iletişime geçebilirsiniz.
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