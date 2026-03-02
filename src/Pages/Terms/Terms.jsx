import React from "react";
import "./Terms.scss";

const Terms = () => {
  const company = {
    name: "PT. Asia Rumah Utama",
    role: "Authorized Property Marketing Partner",
    site: "https://inforumahbintaro.id",
    address:
      "Ruko Aralia Harapan Indah, JL. Raya Harmoni Blok HY 43 No. 48, Pusaka Rakyat, Kec. Tarumajaya, Bekasi, Jawa Barat 17214",
    phone: "+6282332091818",
    phoneLabel: "+62823-3209-1818",
    email: "linktown.id@gmail.com",
    updated: "January 2026",
  };

  return (
    <main className="terms">
      {/* Header */}
      <section className="terms__hero">
        <div className="terms__container">
          <p className="terms__breadcrumb">Beranda / Terms & Conditions</p>
          <h1 className="terms__title">Terms & Conditions</h1>
          <p className="terms__subtitle">
            Syarat dan ketentuan penggunaan website{" "}
            <strong>{company.site}</strong>.
          </p>

          <p className="terms__micro">
            Dengan mengakses dan menggunakan website ini, Anda dianggap telah
            membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang
            berlaku.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="terms__content">
        <div className="terms__container">
          <div className="terms__panel">
            <h2 className="terms__h2">1) Informasi Umum</h2>
            <p className="terms__p">
              Website <strong>{company.site}</strong> dikelola oleh{" "}
              <strong>{company.name}</strong> sebagai{" "}
              <strong>{company.role}</strong>. Website ini disediakan untuk
              tujuan informasi dan pemasaran properti.
            </p>

            <h2 className="terms__h2">2) Ruang Lingkup Layanan</h2>
            <p className="terms__p">
              Informasi yang tersedia di website ini mencakup proyek properti,
              ketersediaan unit, spesifikasi, harga indikatif, serta program
              pemasaran dari pengembang. Seluruh informasi bersifat{" "}
              <strong>non-mengikat</strong> dan dapat berubah sewaktu-waktu
              mengikuti kebijakan developer.
            </p>

            <h2 className="terms__h2">3) Tidak Ada Transaksi di Website</h2>
            <p className="terms__p">
              Website ini{" "}
              <strong>tidak memfasilitasi transaksi keuangan</strong>, tidak
              menerima pembayaran, booking fee, atau bentuk transaksi lainnya.
              Seluruh proses pemesanan dan pembayaran dilakukan langsung dengan
              pihak developer atau pihak resmi yang ditunjuk developer.
            </p>

            <h2 className="terms__h2">4) Tanggung Jawab Pengguna</h2>
            <p className="terms__p">
              Pengguna bertanggung jawab penuh atas keputusan yang diambil
              berdasarkan informasi yang diperoleh dari website ini. Pengguna
              disarankan melakukan verifikasi lanjutan terkait harga,
              ketersediaan, dan ketentuan pembelian sebelum melakukan transaksi.
            </p>

            <h2 className="terms__h2">5) Hak Cipta & Penggunaan Konten</h2>
            <p className="terms__p">
              Seluruh konten di website ini, termasuk teks, gambar, logo, dan
              materi visual, dilindungi oleh hukum yang berlaku. Penggunaan
              ulang konten untuk kepentingan komersial tanpa izin tertulis dari{" "}
              <strong>{company.name}</strong> tidak diperkenankan.
            </p>

            <h2 className="terms__h2">6) Pembatasan Tanggung Jawab</h2>
            <p className="terms__p">
              <strong>{company.name}</strong> tidak bertanggung jawab atas
              kerugian langsung maupun tidak langsung yang timbul akibat
              penggunaan website ini, termasuk namun tidak terbatas pada
              kesalahan informasi atau perubahan kebijakan developer.
            </p>

            <h2 className="terms__h2">7) Perubahan Ketentuan</h2>
            <p className="terms__p">
              Kami berhak untuk mengubah atau memperbarui syarat dan ketentuan
              ini sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Perubahan
              akan berlaku sejak tanggal diperbarui di halaman ini.
            </p>

            <h2 className="terms__h2">8) Hukum yang Berlaku</h2>
            <p className="terms__p">
              Syarat dan ketentuan ini diatur dan ditafsirkan berdasarkan hukum
              yang berlaku di Republik Indonesia.
            </p>

            <div className="terms__divider" />

            {/* Company Card */}
            <div className="terms__companyCard">
              <div className="terms__companyTop">
                <div>
                  <div className="terms__companyName">{company.name}</div>
                  <div className="terms__companyRole">{company.role}</div>
                </div>
                <div className="terms__updated">
                  Last updated: {company.updated}
                </div>
              </div>

              <div className="terms__rows">
                <div className="terms__row">
                  <span className="terms__icon">📍</span>
                  <div className="terms__rowBody">{company.address}</div>
                </div>
                <div className="terms__row">
                  <span className="terms__icon">📞</span>
                  <div className="terms__rowBody">
                    <a className="terms__link" href={`tel:${company.phone}`}>
                      {company.phoneLabel}
                    </a>
                  </div>
                </div>
                <div className="terms__row">
                  <span className="terms__icon">✉️</span>
                  <div className="terms__rowBody">
                    <a className="terms__link" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="terms__actions">
                <a
                  className="terms__btn terms__btn--primary"
                  href="/contact-us">
                  Contact Us
                </a>
                <a
                  className="terms__btn terms__btn--ghost"
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

export default Terms;
