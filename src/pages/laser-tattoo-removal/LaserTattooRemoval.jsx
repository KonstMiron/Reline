import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/Button";
import CabinetSection from "./CabinetSection";
import PortfolioSection from "./PortfolioSection";
import "./LaserTattooRemoval.scss";
import logo from "@/shared/assets/images/laser-tattoo-removal/reline.svg";
import photo1 from "@/shared/assets/images/laser-tattoo-removal/Photo1.jpg";
import photo2 from "@/shared/assets/images/laser-tattoo-removal/Photo2.jpg";
import photo3 from "@/shared/assets/images/laser-tattoo-removal/Photo3.jpg";

const LaserTattooRemoval = () => {
  const sectionsData = [
    {
      questions: [
        {
          title: "Czy zabieg jest bolesny?",
          description:
            "Odczucia są indywidualne, jednak dzięki zastosowaniu systemu chłodzenia skóry CRYO ból jest znacznie zredukowany.\nWiększość osób porównuje go do lekkiego uczucia pieczenia lub ukłuć.",
        },
        {
          title: "Czy po zabiegu zostają blizny?",
          description:
            "Nie. Laser działa selektywnie na pigment, nie narusza naskórka i nie wpływa na otaczające tkanki.\nSkóra po zabiegu może być lekko zaczerwieniona lub opuchnięta, ale to naturalna reakcja, która ustępuje po kilku godzinach.",
        },
        {
          title: "Jak przygotować się do zabiegu?",
          description:
            "Nie należy opalać skóry ani stosować samoopalaczy przez minimum 2 tygodnie przed zabiegiem.\nSkóra powinna być czysta, sucha i niepodrażniona.\nW dniu zabiegu nie należy nakładać kremów ani kosmetyków w miejscu tatuażu.",
        },
      ],
      image: photo1,
      imageAlt: "Proces laserowego usuwania tatuażu",
      reverse: false,
    },
    {
      questions: [
        {
          title: "Czy można usuwać tatuaż latem?",
          description:
            "Tak, pod warunkiem że skóra nie jest opalona i będzie odpowiednio chroniona przed słońcem po zabiegu — zalecany filtr SPF 50.",
        },
        {
          title: "Ile zabiegów potrzeba?",
          description:
            "Liczba sesji zależy od koloru, głębokości i wieku tatuażu.\nZazwyczaj potrzeba 4–8 zabiegów, wykonywanych w odstępach 8–10 tygodni, aby skóra mogła się w pełni zregenerować.",
        },
        {
          title: "Jakie są przeciwwskazania do zabiegu?",
          list: [
            "Zabieg nie jest wykonywany w następujących przypadkach:",
            "• ciąża i okres karmienia piersią,",
            "• świeża opalenizna lub oparzenia słoneczne,",
            "• aktywne infekcje skóry, opryszczka, stany zapalne,",
            "• choroby skóry w miejscu zabiegu (np. łuszczyca, AZS w fazie aktywnej),",
            "• nowotwory, choroby autoimmunologiczne lub cukrzyca w stanie niewyrównanym,",
            "• przyjmowanie leków światłouczulających (np. niektóre antybiotyki, retinoidy),",
            "• stosowanie preparatów z retinolem lub kwasami w ostatnich tygodniach,",
            "• skłonność do powstawania bliznowców.",
          ],
        },
      ],
      images: [photo2, photo3],
      imageAlt: "Efekty usuwania tatuażu",
      reverse: true,
    },
  ];

  return (
    <div className="laser-tattoo-removal">
      <HeaderSwitcher variant="inner" />
      <main className="laser-tattoo-removal__content">
        {/* Hero Section */}
        <section className="laser-tattoo-removal__hero">
          <div className="container">
            <h1 className="laser-tattoo-removal__title">
              Laserowe usuwanie tatuażu
            </h1>
            <p className="laser-tattoo-removal__subtitle">
              Dla osób, które chcą pozbyć się niechcianego tatuażu w bezpieczny i skuteczny sposób.
            </p>
            <p className="laser-tattoo-removal__description">
              Nowoczesna technologia laserowa pozwala usuwać pigment niezależnie od jego koloru czy głębokości w skórze.<br />
              Podczas zabiegu stosowany jest system chłodzenia skóry CRYO, który redukuje ból i zwiększa komfort.
            </p>
            <a href="https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D" target="_blank" rel="noopener noreferrer">
              <Button className="laser-tattoo-removal__cta">Zapisać się!</Button>
            </a>
          </div>
          <img src={logo} alt="R'LINE Logo" className="laser-tattoo-removal__hero-logo" />
        </section>

        {/* Info Sections */}
        {sectionsData.map((section, index) => (
          <section
            key={index}
            className={`laser-tattoo-removal__section ${
              section.reverse ? "laser-tattoo-removal__section--reverse" : ""
            }`}
          >
            <div className="container">
              <div className="laser-tattoo-removal__section-content">
                <div className="laser-tattoo-removal__questions">
                  {section.questions.map((question, qIndex) => (
                    <div
                      key={qIndex}
                      className="laser-tattoo-removal__question-block"
                    >
                      <h3 className="laser-tattoo-removal__question-title">
                        {question.title}
                      </h3>
                      {question.description && (
                        <p className="laser-tattoo-removal__question-description">
                          {question.description}
                        </p>
                      )} 
                      {question.list && (
                        <ul className="laser-tattoo-removal__question-list">
                          {question.list.map((item, lIndex) => (
                            <li key={lIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="laser-tattoo-removal__image-wrapper">
                  {section.images ? (
                    section.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={section.imageAlt}
                        className="laser-tattoo-removal__image"
                      />
                    ))
                  ) : (
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="laser-tattoo-removal__image"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <PortfolioSection />
      <CabinetSection />
      <Footer />
    </div>
  );
};

export default LaserTattooRemoval;
