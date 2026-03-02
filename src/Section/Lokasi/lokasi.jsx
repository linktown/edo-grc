import React from "react";
import "./lokasi.scss";
import lokasiimages from "../../assets/Maps.webp";

const lokasi = () => {
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6285714257425&text=Halo%20Edo,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Grand%20Residence%20City%20(Maps)%20https://Inforumahgrc.id/%20&fbclid=PAAaa7g9IJ-tB3RyMunLD6w_5ysqP4oI6PA2d9Ml7Isc1_OXjeOiGuAqu7Ap0";
    window.open(whatsappLink, "_blank");
  };
  return (
    <div id="lokasi" className="container-lokasi">
      <div className="container-judul">
        <div className="judul-lokasi">
          <h1>Lokasi </h1>
          <h2>Grand</h2>
          <h3>Residence City</h3>
          <div className="deskripsi">
            <h4>Lokasi yang ideal</h4>
            <h5>untuk tinggal dan berbisnis</h5>
            <h6>dengan banyak infrastruktur</h6>
          </div>
        </div>

        <div className="button-penawaran">
          <button className="buttonpenawaran" onClick={handleConsultationClick}>
            Learn More
          </button>
        </div>
      </div>
      <div className="lokasi">
        <img
          className="lokasi-tallasa"
          src={lokasiimages}
          alt="hardsell-summarecon-serpong"
        />
      </div>
    </div>
  );
};

export default lokasi;
