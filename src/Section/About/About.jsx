import React from "react";
import "./About.scss";
import aboutImage from "../../assets/GRC/Dharmawangsa.webp"; // ganti dengan gambar kedua

const AboutLanding = () => {
  const features = [
    {
      title: "Exclusive Cluster",
      desc: "Lingkungan privat dengan row jalan lebar, taman hijau, dan facade modern tropis yang rapi.",
    },
    {
      title: "Smart & Safe Living",
      desc: "Dilengkapi sistem keamanan 24 jam, akses satu gerbang, dan dukungan smart home system.",
    },
    {
      title: "Everyday Convenience",
      desc: "Dekat RS Satria Medika, fasilitas pendidikan, hingga akses tol yang memudahkan aktivitas harian.",
    },
  ];

  return (
    <section id="about" className="about-landing">
      <div className="about-landing__inner">
        {/* LEFT – IMAGE */}
        <div className="about-landing__image-wrapper">
          <div className="about-landing__image-card">
            <img src={aboutImage} alt="Cluster Vireya BSD City" />
          </div>
        </div>

        {/* RIGHT – TEXT + CARDS */}
        <div className="about-landing__content">
          <span className="about-landing__eyebrow">About Us</span>
          <h2 className="about-landing__title">
            Shaping the Future
            <br />
            with Experience and Vision
          </h2>
          <p className="about-landing__subtitle">
            Grand Residence City dirancang sebagai kawasan hunian modern yang
            mengutamakan kenyamanan, keteraturan, dan kualitas lingkungan.
            Dengan fasilitas penunjang yang lengkap dan lokasi strategis,
            properti di kawasan ini ideal untuk tempat tinggal maupun investasi
            jangka panjang.
          </p>

          <div className="about-landing__cards">
            {features.map((item) => (
              <div key={item.title} className="about-landing__card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;
