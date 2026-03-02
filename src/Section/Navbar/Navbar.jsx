import React, {useEffect, useState} from "react";
import "./navbar.scss";
import Logo from "../../assets/logo.png"; // <-- sesuaikan path & nama file

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleWhatsapp = () => {
    const phone = "6285714257425";
    const text = encodeURIComponent(
      "Halo Edo, Saya Bisa minta detail Katalog, Simulasi dan Promo terbaru Grand Residence City (Promo) https://Inforumahgrc.id/",
    );
    window.open(
      `https://wa.me/${phone}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  // lock scroll saat drawer kebuka
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // ESC untuk nutup drawer
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="bj-navbar">
      <div className="bj-navbar__inner">
        {/* HAMBURGER (muncul di tablet/mobile) */}
        <button
          type="button"
          className="bj-navbar__burger"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}>
          <span className="bj-navbar__burgerLine" />
          <span className="bj-navbar__burgerLine" />
          <span className="bj-navbar__burgerLine" />
        </button>

        {/* LEFT MENU (desktop) */}
        <nav className="bj-navbar__left" aria-label="Primary navigation">
          <a className="bj-navbar__link" href="#about">
            About Us
          </a>
          <a className="bj-navbar__link" href="#promo">
            Promo
          </a>
          <a className="bj-navbar__link" href="#residential">
            Residential
          </a>

          <a className="bj-navbar__link" href="#location">
            Location
          </a>
        </nav>

        {/* CENTER BRAND */}
        <a className="bj-navbar__brand" href="/" aria-label="Bintaro Jaya Home">
          <img src={Logo} alt="Bintaro Jaya" className="bj-navbar__logo" />
        </a>

        {/* RIGHT CTA */}
        <div className="bj-navbar__right">
          <button
            type="button"
            className="bj-navbar__cta"
            onClick={handleWhatsapp}>
            Whatsapp
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`bj-drawerOverlay ${open ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* DRAWER */}
      <aside
        className={`bj-drawer ${open ? "is-open" : ""}`}
        aria-label="Mobile menu">
        <div className="bj-drawer__top">
          <div className="bj-drawer__title">Menu</div>
          <button
            type="button"
            className="bj-drawer__close"
            onClick={closeMenu}
            aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="bj-drawer__nav">
          <a className="bj-drawer__link" href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a className="bj-drawer__link" href="#promo" onClick={closeMenu}>
            Promo
          </a>
          <a
            className="bj-drawer__link"
            href="#residential"
            onClick={closeMenu}>
            Residential
          </a>

          <a className="bj-drawer__link" href="#lokasi" onClick={closeMenu}>
            Location
          </a>
        </nav>

        <div className="bj-drawer__ctaWrap">
          <button
            type="button"
            className="bj-drawer__cta"
            onClick={handleWhatsapp}>
            Whatsapp
          </button>
        </div>
      </aside>
    </header>
  );
}
