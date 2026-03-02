import React from "react";
import "./cardviola.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faBed,
  faHouse,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaWhatsapp} from "react-icons/fa";

const CardRumah = ({
  carousel = [], // Default to an empty array if not provided
  title,
  subtitle,
  price,
  details,
  whatsappLink,
}) => {
  const settings1 = {
    dots: carousel.length > 0, // Only show dots if there are images
    arrows: carousel.length > 0, // Only show arrows if there are images
    infinite: carousel.length > 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div className="cardrumahdetail">
      <div className="cluster-viola">
        <Slider {...settings1}>
          {Array.isArray(carousel) && carousel.length > 0 ? (
            carousel.map((image, index) => (
              <img
                className="cluster-image"
                key={index}
                src={image}
                alt={`Launching ${index + 1}`}
              />
            ))
          ) : (
            <div>No images available</div> // Fallback if no images are present
          )}
        </Slider>
        <div className="container-rumah">
          <div className="nama-rumahviola">{title}</div>
          <div className="gridmap">
            <div className="namalokasi">{subtitle}</div>
          </div>
        </div>
        <hr />
        <div className="gridspek">
          <FontAwesomeIcon color="#0A1134" icon={faArrowsUpDownLeftRight} />
          <span> {details.area}</span>
          <FontAwesomeIcon color="#0A1134" icon={faHouse} />
          <span> {details.buildingSize}</span>
          <FontAwesomeIcon color="#0A1134" icon={faBed} />
          <span> {details.floor}</span>
          <FontAwesomeIcon color="#0A1134" icon={faShower} />
          <span> {details.bathrooms}</span>
        </div>
        <hr />
        <div className="containercicilan">
          <div className="judulkartuviola">
            <div className="startfrom">Start From</div>
          </div>
          <div className="cicilanviola">
            <div className="angka">{price}</div>
            <div className="ket">Bulan</div>
          </div>
        </div>
        <div className="cluster-button">
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="cluster-whatsappviola">
            <FaWhatsapp size="1.2em" />
            &nbsp;Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRumah;
