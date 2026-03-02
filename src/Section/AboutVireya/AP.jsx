import React from "react";
import "./AP.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import aboutimg from "../../assets/GRC/Araya Lake 2 .webp";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281319499502&text=Halo%20Reza,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Produk%20Summarecon%20Serpong%20(Residentials)%20https://marketinggadingserpong.id//&type=phone_number&app_absent=0";
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="aboutvireya" id="residential">
      <div className="containerabout">
        <h1>Grand Residence City</h1>
        <div className="container-desk">
          <div className="desk">
            Temukan kenyamanan hidup di Grand Residence City, kawasan hunian
            modern yang dirancang untuk menghadirkan suasana rumah yang nyaman,
            tertata, dan harmonis. Dengan tata ruang yang fungsional serta
            konsep hunian masa kini, Grand Residence City menjadi pilihan ideal
            bagi keluarga yang mengutamakan kualitas hidup dan lingkungan yang
            berkembang. Berlokasi strategis di kawasan Bekasi, Anda dapat
            menikmati kemudahan akses ke berbagai fasilitas pendukung, sekaligus
            potensi nilai investasi jangka panjang.
          </div>
        </div>
        <div className="container-benefit">
          <div className="benefit-list">
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faCheckDouble} color="#12075f" />
              <span style={{color: "rgb(84, 84, 84)"}}>
                &nbsp;&nbsp;Clubhouse & Swimming Pool
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faCheckDouble} color="#12075f" />
              <span style={{color: "rgb(84, 84, 84)"}}>
                &nbsp;&nbsp;Children Playground
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faCheckDouble} color="#12075f" />
              <span style={{color: "rgb(84, 84, 84)"}}>
                &nbsp;&nbsp;One Gate System
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faCheckDouble} color="#12075f" />
              <span style={{color: "rgb(84, 84, 84)"}}>
                &nbsp;&nbsp;Jogging & Bicycle Track
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faCheckDouble} color="#12075f" />
              <span style={{color: "rgb(84, 84, 84)"}}>
                &nbsp;&nbsp;Security 24 Hours
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="gambarabout">
        <img src={aboutimg} alt={aboutimg} />
      </div>
    </div>
  );
};

export default About;
