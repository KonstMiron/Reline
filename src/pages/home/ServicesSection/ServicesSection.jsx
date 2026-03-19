import "./ServicesSection.scss";
import { Button2 } from "@/shared/ui/Button2";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services__header">

        <h2 className="services__title">
          Zmieńmy przyszłość <br />
          Pozwól sobie na nowy rozdział <br className="br" /> piękna.
        </h2> 
 
        <p className="services__desc">Pozwól nam zadbać o Ciebie</p>

        {/* ВЕЛИКЕ СЛОВО ПІД ТЕКСТОМ */}
        <div className="services__bg">
          <span className="services__bg-text">USŁUGI</span>
        </div>
      </div>

      <div className="services__list container">
        <article className="services__card">
          <div className="services__image">
            <img
            src="/src/shared/assets/images/service-1.jpg"
            alt="Laserowe usuwanie tatuażu"
          />
          </div>
 
          <h3>Laserowe usuwanie tatuażu</h3>
          <p>
            Usuń tatuaż laserem pikosekundowym z chłodzeniem Cryo – bez bólu i bez ryzyka!
          Twoja skóra zasługuje na nowy początek. 
          </p>
            <Button2 onClick={() => console.log("clicked")}
                className="btn-more">
                ZOBACZ WIĘCEJ!
            </Button2>
        </article>

        <article className="services__card">
           <div className="services__image">
            <img
            src="/src/shared/assets/images/service-2.jpg"
            alt="Laserowe usuwanie makijażu permanentnego"
          />
           </div>

          <h3>Laserowe usuwanie makijażu permanentnego</h3>
          <p>
            Profesjonalne usuwanie makijażu permanentnego przy użyciu lasera pikosekundowego – szybkie, bezpieczne i komfortowe.
          </p>
            <Button2 onClick={() => console.log("clicked")}
                className="btn-more">
                ZOBACZ WIĘCEJ!
            </Button2>
        </article>

        <article className="services__card">
           <div className="services__image">
            <img
            src="/src/shared/assets/images/service-3.jpg"
            alt="Usuwanie removerem"
          />
           </div>

          <h3>Usuwanie makijażu permanentnego removerem</h3>
          <p>
            Usuwanie makijażu permanentnego removerem to łagodna, ale skuteczna metoda eliminacji pigmentu z brwi, ust i oczu.          </p>
              <Button2 onClick={() => console.log("clicked")}
                className="btn-more">
                ZOBACZ WIĘCEJ!
            </Button2>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;