/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, Suspense, lazy } from "react";

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

// Only import ReCAPTCHA if the site key exists
const ReCAPTCHAComponent = siteKey
  ? lazy(() => import("react-google-recaptcha"))
  : null;

function CaptchaBox({ buttonId }) {
  // Auto-enable button when no captcha is configured
  useEffect(() => {
    if (!siteKey) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.removeAttribute("disabled");
      }
    }
  }, [buttonId]);

  if (!siteKey || !ReCAPTCHAComponent) {
    return null;
  }

  function onChange() {
    const button = document.getElementById(buttonId);
    if (button) button.removeAttribute("disabled");
  }

  function onErrored() {
    const button = document.getElementById(buttonId);
    if (button) button.setAttribute("disabled", "disabled");
  }

  function onExpired() {
    const button = document.getElementById(buttonId);
    if (button) button.setAttribute("disabled", "disabled");
  }

  return (
    <section className="recaptcha relative mb-4">
      <Suspense fallback={<div className="h-[78px]" />}>
        <ReCAPTCHAComponent
          sitekey={siteKey}
          onChange={onChange}
          onErrored={onErrored}
          onExpired={onExpired}
          size="normal"
          theme="light"
        />
      </Suspense>
    </section>
  );
}

export default CaptchaBox;
