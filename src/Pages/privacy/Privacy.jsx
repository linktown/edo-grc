import React from "react";
import "./Privacy.scss";

const Privacy = () => {
  return (
    <div className="privcont">
      <div className="privacy-title">Policies & Contact</div>

      {/* PRIVACY POLICY */}
      <div className="priv">
        <div className="priv-title" id="privacy">
          Privacy Policy
        </div>
        <div className="priv-sub">
          <p>
            <strong>Who We Are</strong>
            <br />
            This website is operated by <strong>PT. Asia Rumah Utama</strong>,
            an authorized property marketing agency based in Indonesia. Our
            website address is{" "}
            <a
              href="https://Inforumahgrc.id/"
              target="_blank"
              rel="noopener noreferrer">
              https://Inforumahgrc.id/
            </a>
            .
          </p>

          <p>
            <strong>Information We Collect</strong>
            <br />
            We may collect personal information that you voluntarily provide,
            including your name, phone number, and property preferences when you
            contact us via WhatsApp.
          </p>

          <p>
            <strong>How We Use Your Information</strong>
            <br />
            - To provide project information, availability, and pricing
            according to your inquiry.
            <br />
            - To follow up on viewing appointments, developer promotions, and
            financing programs.
            <br />- For internal analytics to improve our services and
            communication.
          </p>

          <p>
            <strong>Cookies</strong>
            <br />
            If you visit our website, we may set a temporary cookie to determine
            if your browser accepts cookies. This cookie contains no personal
            data and is discarded when you close your browser.
          </p>

          <p>
            <strong>Embedded Content</strong>
            <br />
            Articles on this site may include embedded content (e.g., videos,
            images, or widgets). Embedded content from other websites behaves
            the same as if you visited that website directly.
          </p>

          <p>
            <strong>Data Security</strong>
            <br />
            We protect user data via SSL encryption and standard safeguards to
            prevent unauthorized access or misuse.
          </p>
        </div>
      </div>

      {/* REFUND POLICY */}
      <div className="priv">
        <div className="priv-title" id="refund">
          Refund Policy
        </div>
        <div className="priv-sub">
          <p>
            This website serves as an informational platform for property
            listings and developer projects. All forms of payments, bookings, or
            financial transactions are carried out directly with the respective
            developers, following their internal policies and the financial
            regulations of the Republic of Indonesia.{" "}
            <strong>
              <strong>PT. Asia Rumah Utama</strong> does not collect, request,
              or charge any form of fee beyond what is officially set by the
              developers.
            </strong>
          </p>

          <p>
            <strong>General Terms</strong>
            <br />
            This website is managed by <strong>PT. Asia Rumah Utama</strong>, an
            authorized marketing partner collaborating with reputable property
            developers in Indonesia. All transactions are handled transparently
            and in accordance with developer policies.
          </p>

          <p>
            <strong>Governing Law</strong>
            <br />
            This policy and all related matters shall be governed by and
            construed in accordance with the laws of the Republic of Indonesia.
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="priv">
        <div className="priv-title" id="disclaimer">
          Disclaimer
        </div>
        <div className="priv-sub">
          <p>
            This website is managed by <strong>PT. Asia Rumah Utama</strong>, a
            licensed and authorized marketing partner representing multiple
            residential and commercial property projects in Indonesia.
          </p>

          <p>
            All information provided here, including prices, availability, and
            promotional materials, is intended for informational and marketing
            purposes only. We strive to ensure accuracy, but details may change
            without prior notice.
          </p>

          <p>
            Visitors and buyers are encouraged to verify all project details
            directly with our marketing team or the respective developer before
            making any financial decisions.
          </p>

          <p>
            <strong>Non-affiliation Notice:</strong>{" "}
            <strong>PT. Asia Rumah Utama</strong> operates independently as a
            marketing partner and is not directly affiliated with or owned by
            any developer mentioned on this website.
          </p>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="priv">
        <div className="priv-title" id="contact">
          Contact Us
        </div>
        <div className="priv-sub">
          <p>
            <strong>PT. Asia Rumah Utama</strong>
            <br />
            Authorized Property Marketing Partner
          </p>
          <p>
            <strong>Office Address:</strong>
            <br />
            Ruko Aralia Harapan Indah, JL. Raya Harmoni Blok HY 43 No. 48,
            <br />
            Pusaka Rakyat, Kec. Tarumajaya, Bekasi, Jawa Barat 17214
          </p>
          <p>
            <strong>Phone / WhatsApp:</strong>{" "}
            <a href="https://wa.me/++6285714257425">+6285714257425 (Edo)</a>
            <br />
          </p>
          <p>
            <strong>Business Hours:</strong> Monday – Sunday, 24 Hours Online
          </p>
        </div>
      </div>

      {/* LAST UPDATED */}
      <div className="last-updated">
        <em>Last updated: January, 2026</em>
      </div>
    </div>
  );
};

export default Privacy;
