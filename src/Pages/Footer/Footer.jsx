// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.webp";
import MapImage from "../../assets/Maps.webp"; // ganti sesuai nama file map lu

const Footer = () => {
  return (
    <footer className="footer">
      {/* CARD ROUNDED UTAMA */}
      <div className="footer__card">
        {/* 4 KOLOM ATAS */}
        <div className="footer__top">
          {/* BRAND + DESKRIPSI */}
          <div className="footer__brand">
            <img
              src={Logo}
              alt="Vireya - A Legacy of Beauty"
              className="footer__logo"
            />

            <p className="footer__text">
              {" "}
              <strong>Bintaro Jaya</strong> Informasi lengkap rumah, promo, dan
              simulasi KPR untuk bantu Anda menemukan hunian terbaik.
            </p>
          </div>

          {/* NAVIGASI */}
          <div className="footer__column">
            <h4 className="footer__title">Navigasi</h4>
            <ul className="footer__list">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#promo">Promo</a>
              </li>
              <li>
                <a href="#residential">Residential</a>
              </li>

              <li>
                <a href="#surrounding">Surrounding</a>
              </li>
              <li>
                <a href="#lokasi">Location</a>
              </li>
            </ul>
          </div>

          {/* KONTAK MARKETING */}
          <div className="footer__column">
            <h4 className="footer__title">Kontak Marketing</h4>

            <div className="footer__info-block">
              <span className="footer__label">WhatsApp:</span>
              <a
                href="https://api.whatsapp.com/send?phone=6282332091818&text=Halo%20Anthoni,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Bintaro%20Jaya%20https://inforumahbintaro.id/%20&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0"
                target="_blank"
                rel="noreferrer"
                className="footer__link-strong">
                +6282332091818 (Anthoni)
              </a>
            </div>

            <div className="footer__info-block">
              <span className="footer__label">Marketing Gallery:</span>
              <p className="footer__info-text">Bintaro Jaya</p>
            </div>
          </div>

          {/* MAPS */}
          <div id="lokasi" className="footer__column footer__map-wrapper">
            <h4 className="footer__title">Lokasi</h4>
            <div className="footer__map">
              <img src={MapImage} alt="Lokasi Vireya BSD City di Google Maps" />
            </div>
          </div>
        </div>

        {/* BARIS BAWAH DALAM CARD – PRIVACY, SYARAT, SITE MAP */}
        <div className="footer__bottom">
          <div className="footer__spacer" />
          <div className="footer__legal-links">
            <a href="/about-us">About Us</a>
            <span>•</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-condition">Terms &amp; Conditions</Link>
            <span>•</span>
            <a href="/disclaimer">Disclaimer</a>
            <span>•</span>
            <a href="/contact-us">Contact Us</a>
            <span>•</span>
            <a href="/">Back To Home</a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT DI LUAR CONTAINER ROUNDED */}
      <div className="footer__copyright">
        © 2025 Bintaro Jaya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
