import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samsun Yapı Yönetimi | Kutlukent',
  description:
    'Kutlukent, Samsun genelinde yapı yönetimi hizmetleri sunar. Site, apartman ve tesislerde şeffaf yönetim, düzenli operasyon ve profesyonel süreç takibi sağlar.',
};

export default function SamsunYapiYonetimiPage() {
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
            Samsun Geneli Profesyonel Yapı Yönetimi
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Samsun Yapı Yönetimi
          </h1>

          <p
            className="text-[#f5f0e8]/65 text-lg leading-8 max-w-3xl mb-12"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Kutlukent, Samsun genelinde yapı yönetimi hizmetleri sunan profesyonel bir yönetim
            firmasıdır. Site, apartman, rezidans, iş merkezi ve tesislerde yönetim süreçlerinin
            daha şeffaf, düzenli ve takip edilebilir şekilde yürütülmesine destek olur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              {
                title: 'Yönetim Takibi',
                text: 'Yapının günlük işleyişi, ihtiyaçları ve operasyon süreçleri düzenli şekilde takip edilir.',
              },
              {
                title: 'Şeffaf Süreç',
                text: 'Gelir, gider, aidat, bütçe ve hizmet süreçlerinde anlaşılır ve güven veren bir yapı oluşturulur.',
              },
              {
                title: 'Profesyonel Koordinasyon',
                text: 'Temizlik, güvenlik, teknik bakım, peyzaj ve diğer çözüm ortaklarıyla düzenli koordinasyon sağlanır.',
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
              Yapı Yönetimi Nedir?
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-5"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Yapı yönetimi; apartman, site, rezidans, iş merkezi ve tesis gibi yaşam veya çalışma
              alanlarının idari, mali ve operasyonel süreçlerinin düzenli şekilde yürütülmesini
              kapsar. Bu süreç yalnızca aidat takibiyle sınırlı değildir; ortak alan düzeni,
              bakım-onarım süreçleri, hizmet firmalarıyla iletişim ve kat malikleriyle koordinasyon
              da yapı yönetiminin önemli parçalarıdır.
            </p>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Kutlukent, Samsun genelinde yapıların daha güvenilir, düzenli ve sürdürülebilir bir
              yönetim sistemine kavuşması için profesyonel destek sunar. Amaç; yöneticilerin yükünü
              hafifletmek, kat malikleriyle iletişimi güçlendirmek ve yaşam alanlarında kalıcı bir
              düzen oluşturmaktır.
            </p>
          </section>

          <section className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Yapı Yönetimi Kapsamında Sunulan Hizmetler
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Site, apartman ve tesis yönetimi süreçlerinin takibi',
                'Aidat, bütçe ve gelir-gider süreçlerinin düzenli izlenmesi',
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

          <section className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Samsun Genelinde Hizmet Verdiğimiz Bölgeler
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-6"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Kutlukent, Samsun genelinde yapı yönetimi, site yönetimi, apartman yönetimi ve tesis
              yönetimi hizmetleri sunar. Hizmet yaklaşımı; merkez ilçelerden gelişen yerleşim
              bölgelerine kadar farklı yapı tiplerinin ihtiyaçlarına göre planlanır.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                'Atakum',
                'İlkadım',
                'Canik',
                'Tekkeköy',
                'Bafra',
                'Çarşamba',
                'Terme',
                'Vezirköprü',
                'Havza',
                'Kavak',
                'Ladik',
                '19 Mayıs',
                'Alaçam',
                'Asarcık',
                'Ayvacık',
                'Salıpazarı',
                'Yakakent',
              ].map((ilce) => (
                <div
                  key={ilce}
                  className="border border-[#d0a246]/15 bg-[#1e2124]/50 px-4 py-3 text-[#f5f0e8]/60 text-sm"
                >
                  {ilce}
                </div>
              ))}
            </div>
          </section>

                      </div>

            <p
              className="text-[#f5f0e8]/45 text-sm leading-7 mt-6"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Hizmet planlaması; yapının konumu, ihtiyaçları, operasyon kapsamı ve düzenli takip
              gerekliliklerine göre değerlendirilir.
            </p>
          </section>
          
          <section className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Samsun’da Yapı Yönetimi İçin Neden Kutlukent?
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-5"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Samsun’da yapı yönetimi hizmeti alırken güvenilir iletişim, şeffaf takip ve düzenli
              operasyon anlayışı önemlidir. Kutlukent; yönetim, saha operasyonu ve çözüm ortakları
              arasındaki süreci tek merkezden takip ederek daha kontrollü bir yapı oluşturmayı hedefler.
            </p>

            <p
              className="text-[#f5f0e8]/60 leading-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Profesyonel yapı yönetimi sayesinde apartman, site ve tesislerde günlük işler daha
              düzenli ilerler; yöneticiler, kat malikleri ve hizmet firmaları arasındaki iletişim
              daha sağlıklı hale gelir.
            </p>
          </section>

          <section className="border border-[#d0a246]/25 p-8 md:p-10 bg-[#1e2124]/70">
            <h2
              className="text-3xl font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Samsun’da Yapınız İçin Profesyonel Yönetim Desteği Alın
            </h2>

            <p
              className="text-[#f5f0e8]/60 leading-8 mb-8"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Apartman, site veya tesisinizin yönetim sürecini daha şeffaf, düzenli ve profesyonel
              bir yapıya taşımak için Kutlukent ile iletişime geçebilirsiniz.
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