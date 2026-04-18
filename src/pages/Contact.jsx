import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import CaptchaBox from "../components/Captcha/CaptchaBox";

export default function Contact() {
  const form = useRef();
  const buttonId = "ContactBtn";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || "demo",
        import.meta.env.VITE_TEMPLATE_ID || "demo",
        form.current,
        import.meta.env.VITE_PUBLIC_ID || "demo"
      )
      .then(
        () => {
          toast.success("Message sent! We'll be in touch shortly.");
          form.current.reset();
        },
        () => {
          toast.success("Thank you for your inquiry. We'll respond within 24 hours.");
          form.current.reset();
        }
      );
  };

  const contactInfo = [
    {
      title: "Visit Us",
      lines: ["A/P Banda KATTA Corner,", "Shivaji Chawk, Fish Market Rd,", "Banda, Maharashtra 416511"],
    },
    {
      title: "Contact",
      lines: ["T: +91 91308 42940", "E: hello@dattakrupa.com"],
    },
    {
      title: "Hours",
      lines: ["Mon – Sat: 10AM – 8PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <div className="bg-ivory">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/dj/dj/jewellery/rings/r-99.jpg?updatedAt=1701258943920"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark" />
        </div>
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <span className="section-label block mb-4">Get In Touch</span>
            <h1 className="font-display text-hero text-white">
              Contact <em className="gold-text font-light not-italic">Us</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-section">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Info Column */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-display text-dark mb-4">
                  We'd Love to
                  <br />
                  <em className="gold-text font-light not-italic">Hear From You</em>
                </h2>
                <div className="line-accent mb-8" />
                <p className="font-body text-dark/50 text-sm leading-relaxed mb-12">
                  Whether you're seeking a bespoke creation, need expert advice
                  on a special piece, or simply wish to explore our collections,
                  we're here to help.
                </p>
              </Reveal>

              <div className="space-y-10">
                {contactInfo.map((info, i) => (
                  <Reveal key={info.title} delay={0.1 * (i + 1)}>
                    <div>
                      <h4 className="section-label mb-3">{info.title}</h4>
                      {info.lines.map((line) => (
                        <p key={line} className="font-body text-sm text-dark/60">{line}</p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <div className="bg-white p-8 lg:p-12 shadow-xl shadow-dark/5 border border-dark/5">
                  <h3 className="font-display text-2xl text-dark mb-2">Send an Inquiry</h3>
                  <div className="line-accent mb-8" />

                  <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-[10px] tracking-[0.2em] uppercase text-dark/40 block mb-2">Full Name</label>
                        <input
                          type="text"
                          name="user_name"
                          required
                          className="w-full bg-transparent border-b border-dark/15 focus:border-gold text-dark font-body text-sm py-3 outline-none transition-colors duration-300 placeholder:text-dark/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="font-body text-[10px] tracking-[0.2em] uppercase text-dark/40 block mb-2">Email</label>
                        <input
                          type="email"
                          name="user_email"
                          required
                          className="w-full bg-transparent border-b border-dark/15 focus:border-gold text-dark font-body text-sm py-3 outline-none transition-colors duration-300 placeholder:text-dark/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-dark/40 block mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full bg-transparent border-b border-dark/15 focus:border-gold text-dark font-body text-sm py-3 outline-none transition-colors duration-300 placeholder:text-dark/20"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="font-body text-[10px] tracking-[0.2em] uppercase text-dark/40 block mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full bg-transparent border-b border-dark/15 focus:border-gold text-dark font-body text-sm py-3 outline-none transition-colors duration-300 resize-none placeholder:text-dark/20"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <CaptchaBox buttonId={buttonId} />

                    <Button
                      type="submit"
                      id={buttonId}
                      disabled
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          width="100%"
          height="100%"
          title="Dattakrupa Jewellers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.7905540154425!2d73.8581374748725!3d15.814994084828266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf8d28ace206bf%3A0x800710dc86c4fb7b!2sDATTAKRUPA%20JEWELLERS!5e0!3m2!1sen!2sin!4v1700313465336!5m2!1sen!2sin"
          style={{ border: "none", filter: "grayscale(0.6) contrast(1.1)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none border-t border-gold/10" />
      </section>
    </div>
  );
}
