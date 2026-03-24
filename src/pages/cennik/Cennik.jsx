import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/Button";
import watermarkLogo from "@/shared/assets/images/contact/reline.svg";
import "./Cennik.scss";

const priceSections = [
  {
    title: "USUWANIE TATUAŻY MAŁYCH",
    description:
      "Podczas zabiegu wykorzystywany jest nowoczesny system chłodzenia skóry CRYO, który skutecznie zmniejsza odczuwalny dyskomfort i podnosi komfort całej procedury, nawet w przypadku większych lub intensywnie napigmentowanych tatuaży.",
    note:
      "Proces usuwania tatuażu przebiega etapowo i wymaga kilku sesji, co pozwala skórze na naturalną regenerację między zabiegami. Każdą terapię poprzedza konsultacja, podczas której specjalista dobiera odpowiednie parametry lasera oraz indywidualny plan zabiegowy dopasowany do rodzaju tatuażu i typu skóry.",
    prices: [
      {
        label: "do 3x3 - 200 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
      {
        label: "do 4x6 - 230 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
    ],
  },
  {
    title: "USUWANIE TATUAŻY ŚREDNICH",
    description:
      "Podczas zabiegu wykorzystywany jest nowoczesny system chłodzenia skóry CRYO, który skutecznie zmniejsza odczuwalny dyskomfort i podnosi komfort całej procedury, nawet w przypadku większych lub intensywnie napigmentowanych tatuaży.",
    note:
      "Proces usuwania tatuażu przebiega etapowo i wymaga kilku sesji, co pozwala skórze na naturalną regenerację między zabiegami. Każdą terapię poprzedza konsultacja, podczas której specjalista dobiera odpowiednie parametry lasera oraz indywidualny plan zabiegowy dopasowany do rodzaju tatuażu i typu skóry.",
    prices: [
      {
        label: "do 6x10 - 330 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
      {
        label: "do 10x10 - 370 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
    ],
  },
  {
    title: "USUWANIE TATUAŻY DUŻYCH",
    description:
      "Podczas zabiegu wykorzystywany jest nowoczesny system chłodzenia skóry CRYO, który skutecznie zmniejsza odczuwalny dyskomfort i podnosi komfort całej procedury, nawet w przypadku większych lub intensywnie napigmentowanych tatuaży.",
    note:
      "Proces usuwania tatuażu przebiega etapowo i wymaga kilku sesji, co pozwala skórze na naturalną regenerację między zabiegami. Każdą terapię poprzedza konsultacja, podczas której specjalista dobiera odpowiednie parametry lasera oraz indywidualny plan zabiegowy dopasowany do rodzaju tatuażu i typu skóry.",
    prices: [
      {
        label: "do 15x15 - 400 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
      {
        label: "do 20x20 - 470 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
      {
        label: "powyżej 20x20 - 550 zł +",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
    ],
  },
  {
    title: "USUWANIE MAKIJAŻU PERMANENTNEGO",
    description:
      "Podczas zabiegu wykorzystywany jest nowoczesny system chłodzenia skóry CRYO, który skutecznie zmniejsza odczuwalny dyskomfort i podnosi komfort całej procedury, nawet w przypadku większych lub intensywnie napigmentowanych tatuaży.",
    note:
      "Proces usuwania tatuażu przebiega etapowo i wymaga kilku sesji, co pozwala skórze na naturalną regenerację między zabiegami. Każdą terapię poprzedza konsultacja, podczas której specjalista dobiera odpowiednie parametry lasera oraz indywidualny plan zabiegowy dopasowany do rodzaju tatuażu i typu skóry.",
    prices: [
      {
        label: "1 zabieg - 300 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
    ],
  },
  {
    title: "USUWANIE MAKIJAŻU PERMANENTNEGO REMOVEREM",
    description:
      "Usuwanie makijażu permanentnego removerem to zabieg polegający na stopniowym rozjaśnianiu lub całkowitym usunięciu pigmentu ze skóry. Specjalny preparat (remover) wprowadza się w skórę w miejscu, gdzie znajduje się pigment, co powoduje jego rozpuszczenie i wyciągnięcie na powierzchnię skóry.",
    note:
      "Procedura przeprowadzana jest w bezpiecznych i higienicznych warunkach przez wykwalifikowaną osobę. W zależności od głębokości i intensywności pigmentu może być potrzebnych kilka sesji, aby uzyskać oczekiwany efekt. Celem zabiegu jest poprawa wyglądu, korekta nieudanego makijażu permanentnego lub całkowite usunięcie pigmentu.",
    prices: [
      {
        label: "1 zabieg - 300 zł",
        url: "https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D",
      },
    ],
  },
];

const Cennik = () => {
  return (
    <div className="cennik-page">
      <HeaderSwitcher variant="inner" />

      <main>
        <section className="cennik-page__hero">
          <div className="container cennik-page__hero-content">
            <img src={watermarkLogo} alt="" className="cennik-page__hero-watermark" />

            <h1 className="cennik-page__title">Cennik</h1>
            <p className="cennik-page__description">
              Zapoznaj się z naszą ofertą cenową przygotowaną z myślą o przejrzystości i komforcie naszych klientów. Każda usługa została starannie opracowana, aby zapewnić najwyższą jakość oraz satysfakcję z efektów. <br className="br" />
                Wierzymy, że profesjonalizm i dbałość o detale powinny iść w parze z uczciwą i zrozumiałą polityką cenową. Dzięki temu możesz łatwo wybrać usługę najlepiej <br /> dopasowaną do swoich potrzeb.
            </p>
            <Button className="cennik-page__cta">Zapisać się!</Button>
          </div>
        </section>

        <section className="cennik-page__prices">
          <div className="container cennik-page__prices-list">
            {priceSections.map((section, index) => (
              <article
                className={`cennik-page__service ${index >= 3 ? "cennik-page__service--lower" : ""}`}
                key={section.title}
              >
                <div className="cennik-page__service-copy">
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <p>{section.note}</p>
                </div>

                <div className="cennik-page__service-prices">
                  {section.prices.map((price, priceIndex) => (
                    price.url ? (
                      <a
                        className="cennik-page__price-pill"
                        href={price.url}
                        key={`${section.title}-${price.label}-${priceIndex}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {price.label}
                      </a>
                    ) : (
                      <div className="cennik-page__price-pill" key={`${section.title}-${price.label}-${priceIndex}`}>
                        {price.label}
                      </div>
                    )
                  ))}
                </div>
              </article>
            ))}

            <div className="cennik-page__bottom-cta">
              <h2 className="cennik-page__bottom-cta-title">SPRAWDŹ DOSTĘPNE TERMINY</h2>
              <Button className="cennik-page__bottom-cta-button">ZAPISAĆ SIĘ!</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cennik;