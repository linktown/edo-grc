import React from "react";
import "./Disclaimer.scss";

const Disclaimer = () => {
  const company = {
    name: "PT. Asia Rumah Utama",
    role: "Authorized Property Marketing Partner",
    site: "https://inforumahbintaro.id",
    phone: "+6282332091818",
    phoneLabel: "+6282332091818",
    email: "linktown.id@gmail.com",
    address:
      "Ruko Aralia Harapan Indah, JL. Raya Harmoni Blok HY 43 No. 48, Pusaka Rakyat, Kec. Tarumajaya, Bekasi, Jawa Barat 17214",
    updated: "December 2025",
  };

  return (
    <main className="legal">
      {/* Header */}
      <section className="legal__hero">
        <div className="legal__container">
          <p className="legal__breadcrumb">Beranda / Disclaimer</p>
          <h1 className="legal__title">Disclaimer</h1>
          <p className="legal__subtitle">
            Pernyataan resmi mengenai batasan informasi dan hubungan kami dengan
            pihak pengembang.
          </p>

          <p className="legal__micro">
            Website ini dikelola oleh <strong>PT. Asia Rumah Utama</strong>{" "}
            sebagai marketing partner yang bekerja sama secara resmi dengan
            pengembang.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="legal__content">
        <div className="legal__container">
          <div className="legal__panel">
            <h2 className="legal__h2">1) Status Website & Non-Afiliasi</h2>
            <p className="legal__p">
              {company.site} adalah website informasi & pemasaran yang dikelola
              oleh <strong>{company.name}</strong> sebagai{" "}
              <strong>{company.role}</strong>. Kami beroperasi secara independen
              dan <strong>tidak dimiliki</strong>,{" "}
              <strong>tidak dioperasikan</strong>, dan{" "}
              <strong>tidak mewakili sebagai website resmi</strong> dari
              pengembang (developer) manapun, kecuali dinyatakan secara
              tertulis.
            </p>

            <h2 className="legal__h2">2) Akurasi Informasi</h2>
            <p className="legal__p">
              Seluruh informasi yang ditampilkan (termasuk harga, ketersediaan
              unit, spesifikasi, promo, gambar, denah, dan materi pemasaran
              lainnya) bersifat <strong>informatif</strong>. Kami berupaya
              menjaga keakuratan, namun informasi dapat berubah sewaktu-waktu
              mengikuti kebijakan developer tanpa pemberitahuan terlebih dahulu.
            </p>

            <h2 className="legal__h2">3) Tidak Ada Transaksi di Website</h2>
            <p className="legal__p">
              Website ini <strong>tidak memproses pembayaran</strong>,{" "}
              <strong>tidak menerima booking fee</strong>, dan{" "}
              <strong>tidak memungut biaya</strong> apapun dari pengunjung
              melalui website. Seluruh proses pemesanan, pembayaran, dan
              transaksi dilakukan <strong>langsung</strong> dengan pihak
              developer atau pihak resmi yang ditunjuk developer sesuai
              kebijakan mereka.
            </p>

            <h2 className="legal__h2">4) Konsultasi & Kontak</h2>
            <p className="legal__p">
              Informasi yang kami berikan melalui WhatsApp/telepon/email
              bersifat konsultatif untuk membantu calon pembeli memahami proyek,
              skema pembelian, dan program yang tersedia. Pengunjung disarankan
              melakukan verifikasi akhir (harga, ketersediaan, promo, syarat &
              ketentuan) sebelum mengambil keputusan.
            </p>

            <h2 className="legal__h2">5) Batasan Tanggung Jawab</h2>
            <p className="legal__p">
              <strong>{company.name}</strong> tidak bertanggung jawab atas
              kerugian langsung maupun tidak langsung yang timbul akibat
              penggunaan informasi dari website ini. Keputusan pembelian
              sepenuhnya berada pada pengunjung/pembeli setelah melakukan
              verifikasi.
            </p>

            <h2 className="legal__h2">6) Hak Cipta & Materi</h2>
            <p className="legal__p">
              Materi visual (foto, ilustrasi, brosur, logo, dan materi promosi)
              dapat berasal dari sumber resmi proyek atau materi pemasaran yang
              diperbolehkan untuk kebutuhan informasi. Jika terdapat materi yang
              perlu diperbaiki/diturunkan, silakan hubungi kami melalui kontak
              resmi di bawah.
            </p>

            <div className="legal__divider" />

            <div className="legal__companyCard" aria-label="Company contact">
              <div className="legal__companyTop">
                <div>
                  <div className="legal__companyName">{company.name}</div>
                  <div className="legal__companyRole">{company.role}</div>
                </div>
                <div className="legal__updated">
                  Last updated: {company.updated}
                </div>
              </div>

              <div className="legal__rows">
                <div className="legal__row">
                  <span className="legal__icon" aria-hidden="true">
                    📍
                  </span>
                  <div className="legal__rowBody">{company.address}</div>
                </div>

                <div className="legal__row">
                  <span className="legal__icon" aria-hidden="true">
                    📞
                  </span>
                  <div className="legal__rowBody">
                    <a className="legal__link" href={`tel:${company.phone}`}>
                      {company.phoneLabel}
                    </a>
                  </div>
                </div>

                <div className="legal__row">
                  <span className="legal__icon" aria-hidden="true">
                    ✉️
                  </span>
                  <div className="legal__rowBody">
                    <a className="legal__link" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="legal__actions">
                <a
                  className="legal__btn legal__btn--primary"
                  href="/contact-us">
                  Contact Us
                </a>
                <a
                  className="legal__btn legal__btn--ghost"
                  href="/privacy-policy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Disclaimer;
