import "./RegulaminnUslug.scss";
import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";

export const RegulaminnUslug = () => {
  return (
    <>
      <HeaderSwitcher variant="inner" />
      <main className="legal-page">
        <div className="container legal-page__container">
          <h1>Regulamin usług</h1>

          <div className="legal-intro">
            <p>
              Studio świadczące usługi z zakresu medycyny estetycznej
            </p>
            <p>ul. Diamentowa 27A/U2, 20-471 Lublin</p>
            <p>Dalej zwane – Studio:</p>
          </div>

          <section className="legal-section">
            <ol className="legal-list">
              <li>
                Zastrzega sobie prawo do pobierania zadatków w wysokościach
                określonych w cenniku brutto na poczet usług kosmetycznych oraz
                szkoleń.
              </li>
              <li>
                Zadatek można wpłacić w miejscu świadczenia usług w godzinach pracy
                Studio w formie gotówki, karty płatniczej lub BLIK. Klient wówczas
                otrzymuje paragon za wpłacony zadatek lub potwierdzenie wpłaty.
              </li>
              <li>
                Zadatek na poczet usług kosmetycznych oraz szkoleń można dokonać w
                formie płatności online. Klient dostaje indywidualny link do
                płatności na określoną kwotę.
              </li>
              <li>
                Studio zastrzega sobie prawo do pobierania zadatków z uwagi na
                przypadki nieodpowiedzialnego podejścia Klientów do dokonywania
                rezerwacji i niestawiania się na usługi w ustalonym wcześniej
                terminie, co dezorganizuje harmonogram pracy gabinetu.
              </li>
              <li>
                Kwota wpłacanego zadatku odliczana będzie od kwoty ostatecznego
                rachunku w dniu realizacji usługi. Klient dopłaca różnicę po
                wykonaniu usługi w formie gotówki/karty płatniczej/blikiem. Wówczas
                otrzymuje paragon na dopłacaną kwotę za usługę.
              </li>
              <li>
                Zadatek jest bezzwrotny w całości (nie jest zwracany
                Klientowi/Klientce), jeśli Klient/Klientka nie poinformował/a
                Pracownika salonu o nieobecności/anulowanie rezerwacji do 3 dni
                (72h) przed planowanym terminem realizacji usługi na poczet której
                zadatek był wpłacony. Również to dotyczy nieobecności po minionym
                terminie realizacji usługi.
              </li>
              <li>
                Zadatek jest wówczas rekompensatą za zarezerwowany czas, który w
                przypadku braku wcześniejszego odwołania zostanie niewykorzystany
                przez żadnego innego klienta.
              </li>
              <li>
                Studio informuje, że wyraża zgodę na transfer kwoty wpłaconego
                zadatku na inną osobę lub na inny termin usługi – wystarczy
                poinformować pracownika nie później niż 4 dni przed terminem
                zaplanowanej usługi o potrzebie transferu zadatku lub zmiany
                terminu. Wówczas zadatek nie przepada i zostaje przeniesiony na
                nowy termin realizacji.
              </li>
              <li>
                Wpłacony zadatek jest formą potwierdzenia rezerwacji danego
                terminu.
              </li>
              <li>
                Studio zastrzega sobie prawo do poboru zadatków również w innych
                terminach, jeśli zajdzie taka potrzeba.
              </li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RegulaminnUslug;
