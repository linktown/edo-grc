import React from "react";
import "./Aboutus.scss";

// ✅ tinggal ganti file ini kalo mau ganti gambar
import heroImg from "../../assets/GRC/Dharmawangsa.webp";
import officeImg from "../../assets/GRC/Hangtuah.webp";
import mapsImg from "../../assets/GRC/Senopati.webp"; // ✅ STATIC MAP (tinggal ganti file ini)

const AboutUs = () => {
  const services = [
    {
      title: "Informasi Properti",
      desc: "Detail proyek yang akurat & terkini.",
      icon: "🏠",
    },
    {
      title: "Ketersediaan Unit",
      desc: "Update stok unit & harga secara berkala.",
      icon: "📋",
    },
    {
      title: "Pendampingan Pembelian",
      desc: "Panduan proses pembelian hingga serah terima.",
      icon: "🤝",
    },
    {
      title: "Konsultasi Pembiayaan",
      desc: "Opsi KPR & dukungan program developer.",
      icon: "💳",
    },
  ];

  const areasLeft = [
    "BSD City",
    "Bintaro",
    "Gading Serpong",
    "Alam Sutera",
    "PIK",
  ];
  const areasRight = ["Jakarta", "Depok", "Bogor", "Bandung", "Surabaya"];

  const reasons = [
    {title: "Transparan", desc: "Informasi jelas, tidak menyesatkan."},
    {title: "Profesional", desc: "Pendampingan responsif & rapi."},
    {
      title: "Tanpa Biaya Tersembunyi",
      desc: "Tidak ada fee di luar ketentuan.",
    },
    {
      title: "Transaksi ke Developer",
      desc: "Pembayaran/booking langsung ke developer.",
    },
  ];

  return (
    <main className="about">
      {/* Hero */}
      <section
        className="about__hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(47, 62, 52, 0.75), rgba(47, 62, 52, 0.55)), url(${heroImg})`,
        }}>
        <div className="about__heroOverlay" />
        <div className="about__container about__heroInner">
          <p className="about__breadcrumb">Beranda / Tentang Kami</p>

          <h1 className="about__title">
            Tentang Kami
            <span className="about__titleSub">PT. Asia Rumah Utama</span>
          </h1>

          <p className="about__subtitle">
            Marketing Partner Properti berizin untuk BSD City & sekitarnya
          </p>

          <p className="about__lead">
            Platform informasi properti terverifikasi untuk membantu Anda
            mendapatkan detail proyek, ketersediaan unit, dan pendampingan
            pembelian secara profesional.
          </p>

          <div className="about__heroActions">
            <a className="about__btn about__btn--primary" href="/contact-us">
              Hubungi Tim Kami
            </a>
            <a className="about__btn about__btn--ghost" href="/privacy-policy">
              Privacy Policy
            </a>
          </div>

          <p className="about__heroLegal">
            Website ini dikelola oleh PT. Asia Rumah Utama sebagai marketing
            partner independen dan
            <strong> bukan</strong> website resmi pengembang.
          </p>
        </div>
      </section>

      {/* Content Card Wrapper */}
      <section className="about__content">
        <div className="about__container">
          {/* Who We Are */}
          <div className="about__panel">
            <div className="about__grid2">
              <div>
                <h2 className="about__h2">Siapa Kami</h2>
                <p className="about__p">
                  Linktown (PT. Asia Rumah Utama) adalah Digital Platform
                  properti terdepan di-Indonesia yang menghadirkan kemudahan
                  dalam mencari, memilih, dan membeli rumah baru di Indonesia.
                  Kami mengerti dalam mencari rumah idaman bisa menjadi proses
                  yang rumit dan memakan waktu. Oleh karena itu, Linktown hadir
                  sebagai One Stop Solution yang menyediakan segala kebutuhan
                  kamu dalam satu platform.
                </p>
                <p className="about__p about__p--muted">
                  Catatan: Website ini bukan website resmi pengembang atau
                  proyek tertentu. Informasi dapat berubah sewaktu-waktu
                  mengikuti kebijakan developer.
                </p>
              </div>

              {/* ✅ FOTO KANAN: tinggal ganti import officeImg */}
              <div
                className="about__media"
                role="img"
                aria-label="Office / team preview">
                <img
                  className="about__mediaImg"
                  src={officeImg}
                  alt="PT. Asia Rumah Utama office"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.closest(".about__media");
                    const fallback = parent?.querySelector(
                      ".about__mediaFallback"
                    );
                    if (fallback) fallback.style.display = "grid";
                  }}
                />

                <div className="about__mediaFallback">
                  <div className="about__mediaLogo" aria-hidden="true">
                    ✿
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do + Areas */}
          <div className="about__panel">
            <div className="about__grid2 about__grid2--gapLg">
              <div>
                <h2 className="about__h2">Apa yang Kami Tawarkan</h2>

                <div className="about__cards">
                  {services.map((s) => (
                    <div className="about__card" key={s.title}>
                      <div className="about__cardIcon" aria-hidden="true">
                        {s.icon}
                      </div>
                      <div className="about__cardBody">
                        <h3 className="about__h3">{s.title}</h3>
                        <p className="about__p about__p--muted">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="about__p about__p--muted about__fineprint">
                  Fokus layanan kami adalah konsultasi dan pendampingan
                  informasi properti. Seluruh transaksi pembayaran/booking
                  dilakukan langsung dengan developer sesuai kebijakan resmi.
                </p>
              </div>

              <div>
                <h2 className="about__h2">Area Layanan Kami</h2>

                <div className="about__areaWrap">
                  {/* ✅ MAP SEKARANG PAKAI GAMBAR IMPORT */}
                  <div
                    className="about__map"
                    role="img"
                    aria-label="Service area map">
                    <img
                      className="about__mapImg"
                      src={mapsImg}
                      alt="Peta area layanan"
                    />
                  </div>

                  <div className="about__areaListGrid">
                    <ul className="about__list">
                      {areasLeft.map((a) => (
                        <li className="about__listItem" key={`L-${a}`}>
                          <span className="about__check" aria-hidden="true">
                            ✓
                          </span>
                          {a}
                        </li>
                      ))}
                    </ul>
                    <ul className="about__list">
                      {areasRight.map((a) => (
                        <li className="about__listItem" key={`R-${a}`}>
                          <span className="about__check" aria-hidden="true">
                            ✓
                          </span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose + Company Info */}
          <div className="about__panel">
            <div className="about__grid2 about__grid2--gapLg">
              <div>
                <h2 className="about__h2">Kenapa Memilih Kami?</h2>
                <div className="about__reasons">
                  {reasons.map((r) => (
                    <div className="about__reason" key={r.title}>
                      <div className="about__reasonCheck" aria-hidden="true">
                        ✓
                      </div>
                      <div>
                        <div className="about__reasonTitle">{r.title}</div>
                        <div className="about__reasonDesc">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside
                className="about__companyCard"
                aria-label="Company contact">
                <h2 className="about__h2">Contact Our Team</h2>
                <div className="about__companyName">PT. Asia Rumah Utama</div>
                <div className="about__companyRole">
                  Authorized Property Marketing Partner
                </div>

                <div className="about__companyRow">
                  <span className="about__companyIcon" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    Ruko Aralia Harapan Indah, Jl. Raya Harmoni Blok HY 43 No.
                    48, Pusaka Rakyat, Kec. Tarumajaya, Bekasi, Jawa Barat 17214
                  </div>
                </div>

                <div className="about__companyRow">
                  <span className="about__companyIcon" aria-hidden="true">
                    📞
                  </span>
                  <a className="about__link" href="tel:+6281318630151">
                    +62 813-1863-0151
                  </a>
                  <span className="about__pill">Thobie</span>
                </div>

                <div className="about__companyRow">
                  <span className="about__companyIcon" aria-hidden="true">
                    ✉️
                  </span>
                  <a
                    className="about__link"
                    href="mailto:info@asiarumahutama.co.id">
                    info@asiarumahutama.co.id
                  </a>
                </div>

                <div className="about__companyRow">
                  <span className="about__companyIcon" aria-hidden="true">
                    🕒
                  </span>
                  Monday – Sunday, 24 Hours Online
                </div>

                <div className="about__companyActions">
                  <a
                    className="about__btn about__btn--primary"
                    href="/contact-us">
                    Hubungi Kami
                  </a>
                  <a
                    className="about__btn about__btn--ghost"
                    href="/privacy-policy">
                    Disclaimer
                  </a>
                </div>

                <p className="about__p about__p--muted about__legalNote">
                  Non-affiliation notice: PT. Asia Rumah Utama beroperasi
                  independen sebagai mitra pemasaran dan tidak dimiliki oleh
                  developer yang disebutkan di website ini.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
