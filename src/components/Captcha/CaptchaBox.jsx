/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function CaptchaBox({ buttonId }) {

  function onChange() {
    // Enable the button by removing the 'disabled' attribute
    const button = document.getElementById(buttonId);
    if (button) {
      button.removeAttribute("disabled");
    }
  }

  function onErrored() {
    // Disable the button by adding the 'disabled' attribute
    const button = document.getElementById(buttonId);
    if (button) {
      button.setAttribute("disabled", "disabled");
    }
  }

  function onExpired() {
    // Disable the button by adding the 'disabled' attribute
    const button = document.getElementById(buttonId);
    if (button) {
      button.setAttribute("disabled", "disabled");
    }
  }

  return (
    <section className="recaptcha relative mb-4">
      {/* Check more options here :- https://www.npmjs.com/package/react-google-recaptcha#component-props */}
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={onChange}
        onErrored={onErrored}
        onExpired={onExpired}
        size="normal"
        theme="light"
      />
    </section>
  );
}

export default CaptchaBox;
