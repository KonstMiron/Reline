import Header2 from "@/widgets/header2";
import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/Button";
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
          title: "CZY ZABIEG JEST BOLESNY?",
          description:
            "Odczucia są indywidualne, jednak dzięki zastosowaniu systemu chłodzenia skóry CRYO ból jest znacznie zredukowany.\nWiększość osób porównuje go do lekkiego uczucia poczenia lub ukłucia.",
        },
        {
          title: "CZY PO ZABIEGU ZOSTAJĄ BLIZNY?",
          description:
            "Nie. Laser działa selektywnie na pigment, nie narusza naskórka i nie wpływa na otaczające tkanki.\nSkóra po zabiegu może być lekko zaczerowieniona lub opuchnięta, ale to naturalna reakcja, która ustępuje po kilku godzinach.",
        },
        {
          title: "JAK PRZYGOTOWAĆ SIĘ DO ZABIEGU?",
          description:
            "Nie należy opalać skóry ani stosować samoopalaezy przez minimum 2 tygodnie przed zabiegiem.\nSkóra powinna być czysta, sucha i niepodraźniona.\nW dniu zabiegu nie nakładaj kremów ani kosmetyków w miejscu tatuażu.",
        },
      ],
      image: photo1,
      imageAlt: "Proces laserowego usuwania tatuażu",
      reverse: false,
    },
    {
      questions: [
        {
          title: "CZY MOŻNA USUWAĆ TATUAŻ LATEM?",
          description:
            "Tak, pod warunkiem że skóra nie jest opalona i będzie odpowiednio chroniona przed słońcem po zabiegu — stosując filtr SPF 50.",
        },
        {
          title: "ILE ZABIEGÓW POTRZEBA?",
          description:
            "Liczba sesji zależy od koloru, głębokości i wieku tatuażu.\nStandardowo potrzeba 4-8 zabiegów, wykonywanych w odstępach 8-10 tygodni, aby skóra mogła się w pełni zregenerować.",
        },
      ],
      images: [photo1, photo2],
      imageAlt: "Efekty usuwania tatuażu",
      reverse: true,
    },
    {
      questions: [
        {
          title: "JAKIE SĄ PRZECIWWSKAZANIA DO ZABIEGU?",
          description: "Zabieg nie jest wykonywany w następujących przypadkach:",
          list: [
            "ciąża i okres karmienia piersią,",
            "aktywne infekcje skórne lub porażaj skóreczne,",
            "aktywne infekcje skóry, opryszczka, stany zapalne,",
            "nowotowory skóry (zwłaszcza w obrębie czb. barsetcza, XZS w fazie aktywnej),",
            "niewyrówowana cukrzyca,",
            "niewydolny, choroby autoimmunologiczne lub cukrzyca w starue nieuyrównuanym,",
            "przyjmowanie leków światłouczulających (np. niektóre antybiotyki, retinoidy),",
            "skłonności do przerostu lub retroidów lub kwasów w ostatnich tygodniach,",
            "skłonności do powstawania blizowców.",
          ],
        },
      ],
      image: photo3,
      imageAlt: "Przeciwwskazania do zabiegu",
      reverse: false,
    },
  ];

  return (
    <div className="laser-tattoo-removal">
      <Header2 />
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
              Nowoczesna technologia laserowa pozwala usunąć pigment niezależnie od jego koloru czy głębokości- w skórze.<br />
              Podczas zabiegu stosowany jest system chłodzenia skóry CRYO, który redukuje ból i zwiększa komfort.
            </p>
            <Button className="laser-tattoo-removal__cta">Zapisać się!</Button>
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
                      <p className="laser-tattoo-removal__question-description">
                        {question.description}
                      </p>
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
      <Footer />
    </div>
  );
};

export default LaserTattooRemoval;
