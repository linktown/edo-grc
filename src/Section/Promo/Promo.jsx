import React from "react";
import "./Promo.scss";

// ganti path sesuai struktur project lu
import houseImage from "../../assets/Hardsell_GRC.webp";

const Promo = () => {
  const leftList = [
    "Siap Huni",
    "Subsidi DP",
    "Subsidi Angsuran",
    "Free PPN",
    "Free BPHTB",
    "Free Biaya KPR",
    "Free Biaya SHM",
    "Cicilan Start 3 Juta/Bulan",
  ];
  const rightList = [
    "Free Internet",
    "Free Canopy",
    "Free Fence",
    "Free Smartdoor Lock",
    "Free Smartdoor System",
    "Free Voucher Funiture VIVERE",
    "Listrik Underground 2200 Watt",
  ];

  return (
    <section id="promo" className="promo-section">
      <div className="promo-section__inner">
        {/* LEFT BLOCK – TITLE + IMAGE */}
        <div className="promo-section__left">
          <div className="promo-section__badge">PROMO KESELURUHAN</div>

          <div className="promo-section__image-card">
            <img src={houseImage} alt="Modern & Trendy House" />
          </div>
        </div>

        {/* RIGHT BLOCK – BENEFITS LIST */}
        <div className="promo-section__right">
          <h3 className="promo-section__title">Promo Grand Residence City </h3>

          <div className="promo-section__lists">
            <ul className="promo-section__list">
              {leftList.map((item) => (
                <li key={item} className="promo-section__item">
                  <span className="promo-section__check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="promo-section__list">
              {rightList.map((item) => (
                <li key={item} className="promo-section__item">
                  <span className="promo-section__check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=6285714257425&text=Halo%20Edo,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Grand%20Residence%20City%20(Promo)%20https://Inforumahgrc.id/%20&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-section__cta">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
