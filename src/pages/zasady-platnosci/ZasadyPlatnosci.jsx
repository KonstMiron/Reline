import "./ZasadyPlatnosci.scss";
import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";

export const ZasadyPlatnosci = () => {
  return (
    <>
      <HeaderSwitcher variant="inner" />
      <main className="legal-page">
        <div className="container legal-page__container">
          <h1>Zasady płatności</h1>

          <section className="legal-section">
            <p>
              Płatności za usługi Studio należy dokonać z góry – przed wykonaniem
              usługi.
            </p>
            <p>
              Transakcje online przetwarzane są poprzez certyfikowanego operatora
              płatności, który zapewnia bezpieczne i wygodne formy płatności.
            </p>
          </section>

          <section className="legal-section">
            <h2>Dostępne metody płatności</h2>
            <ul className="bullet-list">
              <li>
                płatności online (BLIK, przelew natychmiastowy, karty Visa,
                Mastercard, itp.),
              </li>
              <li>przelew tradycyjny na konto bankowe,</li>
              <li>
                płatność gotówką przy odbiorze osobistym (tylko po wcześniejszym
                uzgodnieniu).
              </li>
            </ul>
            <p>
              Po dokonaniu płatności Klient otrzymuje potwierdzenie zakupu drogą
              mailową. Zamówienie zostaje przekazane do realizacji po
              zaksięgowaniu wpłaty.
            </p>
          </section>

          <section className="legal-section">
            <h2>Ważne informacje</h2>
            <ul className="bullet-list">
              <li>
                W przypadku wyboru przelewu tradycyjnego, realizacja zamówienia
                następuje po zaksięgowaniu środków na koncie Sprzedawcy.
              </li>
              <li>
                Składając zamówienie, Klient akceptuje niniejsze warunki płatności
                oraz pozostałe zasady określone w Regulaminie sklepu i usług.
              </li>
              <li>
                W przypadku braku płatności w ciągu 3 dni roboczych, zamówienie
                może zostać automatycznie anulowane.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Kontakt</h2>
            <p>W razie pytań dotyczących płatności prosimy o kontakt:</p>
            <p>
              <strong>kontakt@re-line.pl</strong>
            </p>
            <p>
              <strong>+48573811521</strong>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ZasadyPlatnosci;
