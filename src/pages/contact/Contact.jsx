import { useState } from "react";
import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";
import logoHeader from "@/shared/assets/images/contact/reline.svg";
import iconMap from "@/shared/assets/images/contact/icon-map.svg";
import iconInst from "@/shared/assets/images/contact/icon-inst.svg";
import iconTel from "@/shared/assets/images/contact/icon-tel.svg";
import contactLine from "@/shared/assets/images/contact/line.svg";
import "./Contact.scss";
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9e8088b2-d623-4ddb-9144-030d8f4bd6ba", // Замініть на ваш ключ з web3forms.com
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }; 

  return (
    <>
      <HeaderSwitcher variant="inner" />
      <div className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__info">
              <h1 className="contact__title">Kontakt</h1>
              
              <p className="contact__description">
                Skontaktuj się z nami w dogodny dla siebie sposób —
                chętnie doradzimy, odpowiemy na wszystkie pytania i
                pomożemy dobrać najlepszą metodę zabiegu.
              </p>

              <div className="contact__details">
                <div className="contact__item">
                  <img src={iconMap} alt="Location" className="contact__icon contact__icon--map" />
                  <span>ul. Diamentowa 27A/U2, 20-471, Lublin</span>
                </div>
                <img src={contactLine} alt="" className="contact__line" />

                <div className="contact__item">
                  <img src={iconInst} alt="Instagram" className="contact__icon contact__icon--inst" />
                  <span>reline.studio.lbn</span>
                </div>
                <img src={contactLine} alt="" className="contact__line" />

                <div className="contact__item">
                  <img src={iconTel} alt="Phone" className="contact__icon contact__icon--tel" />
                  <span>+48733811521</span>
                </div>
                <img src={contactLine} alt="" className="contact__line" />
              </div>
            </div> 

            <div className="contact__form-container">
              <div className="contact__form-wrapper">
                <form className="contact__form" onSubmit={handleSubmit}>
                  <h2 className="contact__form-title">Napisz do nas</h2>

                  <div className="contact__form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Imię i nazwisko"
                      required
                      className="contact__input"
                    />
                  </div>

                  <div className="contact__form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Numer telefonu"
                      required
                      className="contact__input"
                    />
                  </div>

                  <div className="contact__form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail"
                      required
                      className="contact__input"
                    />
                  </div>

                  <div className="contact__form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wiadomość"
                      required
                      rows="5"
                      className="contact__textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                  </button>

                  {submitStatus === "success" && (
                    <p className="contact__message contact__message--success">
                      Wiadomość została wysłana pomyślnie!
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="contact__message contact__message--error">
                      Wystąpił błąd. Spróbuj ponownie.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        

        <div className="contact__quote">
          <div className="container">
            <div className="contact__quote-content">
              <img src={logoHeader} alt="R'LINE" className="contact__quote-logo" />
              <p className="contact__quote-text">
                „Z nami każdy krok jest prosty i bezpieczny. Napisz lub <br /> zadzwoń, aby uzyskać pełną informację o zabiegach usuwania <br />tatuaży.”
              </p>
              <p className="contact__quote-tagline">
                Twoja skóra. Twój wybór.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="contact__map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12866.977517857025!2d22.531389070205407!3d51.216402250573914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472257ae1c790c4d%3A0x48edc739b3c70d34!2sReline%20Studio%20-%20Laserowe%20usuwanie%20tatua%C5%BCu%20i%20makija%C5%BCu%20permanentnego!5e0!3m2!1sru!2spl!4v1772136552137!5m2!1sru!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="R'LINE Location"
          />
        </div>
      <Footer />
    </>
  );
};

export default Contact;
