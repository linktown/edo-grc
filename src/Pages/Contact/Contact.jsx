import React from "react";
import "./Contact.scss";

import mapsImg from "../../assets/GRC/Araya Lake.webp";

const ContactUs = () => {
  const company = {
    name: "PT. Asia Rumah Utama",
    role: "Authorized Property Marketing Partner",
    address:
      "Ruko Aralia Harapan Indah, JL. Raya Harmoni Blok HY 43 No. 48, Pusaka Rakyat, Kec. Tarumajaya, Bekasi, Jawa Barat 17214",
    phone: "+6282332091818",
    phoneLabel: "+62823-3209-1818",
    pic: "Anthoni",
    email: "linktown.id@gmail.com",
    hours: "Monday – Sunday, 24 Hours Online",
  };

  const waText = encodeURIComponent(
    "Halo Anthoni, Saya Bisa minta detail Katalog, Simulasi dan Promo terbaru Bintaro Jaya https://inforumahbintaro.id/"
  );
  const waLink = `https://wa.me/${company.phone.replace(
    "+",
    ""
  )}?text=${waText}`;

  return (
    <main className="cmin">
      <div className="cmin__container">
        {/* Top */}
        <header className="cmin__top">
          <div className="cmin__left">
            <p className="cmin__breadcrumb">Beranda / Contact</p>
            <h1 className="cmin__title">Contact us</h1>
            <p className="cmin__subtitle">
              Hubungi tim <strong>{company.name}</strong> untuk informasi
              properti, ketersediaan unit, dan konsultasi pembelian.
            </p>

            <div className="cmin__cta">
              <a
                className="cmin__btn cmin__btn--primary"
                href={waLink}
                target="_blank"
                rel="noreferrer">
                Chat WhatsApp
              </a>
              <a
                className="cmin__btn cmin__btn--ghost"
                href={`tel:${company.phone}`}>
                Call
              </a>
            </div>

            <p className="cmin__legal">
              Website ini dikelola oleh <strong>{company.name}</strong> sebagai
              marketing partner independen dan <strong>bukan</strong> website
              resmi pengembang. Transaksi pembayaran/booking dilakukan langsung
              ke developer sesuai kebijakan resmi.
            </p>
          </div>

          <div className="cmin__right">
            <div className="cmin__gridInfo">
              <div className="cmin__info">
                <div className="cmin__label">general inquiries</div>
                <a className="cmin__value" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a
                  className="cmin__value"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer">
                  WhatsApp: {company.phoneLabel}{" "}
                  <span className="cmin__pill">{company.pic}</span>
                </a>
              </div>

              <div className="cmin__info">
                <div className="cmin__label">phone</div>
                <a className="cmin__value" href={`tel:${company.phone}`}>
                  {company.phoneLabel}
                </a>
                <div className="cmin__muted">{company.hours}</div>
              </div>

              <div className="cmin__info">
                <div className="cmin__label">company</div>
                <div className="cmin__valueStrong">{company.name}</div>
                <div className="cmin__muted">{company.role}</div>
              </div>

              <div className="cmin__info">
                <div className="cmin__label">address</div>
                <div className="cmin__value">{company.address}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Bottom */}
      </div>
    </main>
  );
};

export default ContactUs;
