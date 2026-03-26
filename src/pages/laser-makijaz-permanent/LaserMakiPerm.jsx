import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/Button";
import CabinetSection from "./CabinetSection";
import PortfolioSection from "./PortfolioSection";
// import "./LaserMakiPerm.scss";
import logo from "@/shared/assets/images/laser-makijaz-permanent/reline.svg";
import photo1 from "@/shared/assets/images/laser-makijaz-permanent/Photo1.jpg";
import photo2 from "@/shared/assets/images/laser-makijaz-permanent/Photo2.jpg";
import photo3 from "@/shared/assets/images/laser-makijaz-permanent/Photo3.jpg";

const LaserMakiPerm = () => {
  const sectionsData = [
    {
      questions: [
        {
          title: "Jak wygląda zabieg?",
          description:
            "Podczas zabiegu laser precyzyjnie rozbija pigment w skórze na mikroskopijne cząsteczki.\nOrganizm następnie stopniowo usuwa je w naturalny sposób poprzez proces metaboliczny.\nCała procedura trwa bardzo krótko — usuwanie pigmentu na jednej brwi zajmuje zwykle około 10–15 sekund.",
        },
        {
          title: "Czy zabieg jest bolesny?",
          description:
            "Zabieg jest dobrze tolerowany.\nDzięki zastosowaniu chłodzenia CRYO, odczucia są minimalne — większość osób opisuje je jako lekkie ciepło lub delikatne ukłucia.",
        },
        {
          title: "Czy po zabiegu mogą zostać blizny lub przebarwienia?",
          description:
            "Nie. Laser działa bardzo precyzyjnie, nie narusza naskórka i nie powoduje uszkodzenia tkanek.\nW pierwszych godzinach po zabiegu skóra może być lekko zaczerwieniona lub opuchnięta — to naturalna reakcja, która szybko ustępuje.",
        },
        {
          title: "Ile zabiegów potrzeba?",
          description:
            "Liczba sesji zależy od rodzaju i intensywności pigmentu.\nZazwyczaj potrzeba 2–4 zabiegów, wykonywanych w odstępach 6–8 tygodni, aby skóra mogła się zregenerować.",
        },
      ],
      image: photo1,
      imageAlt: "Proces laserowego usuwania makijażu permanentnego",
      reverse: false,
    },
    {
      questions: [

        {
          title: "Jak przygotować się do zabiegu?",
          list: [
            "• Nie opalać skóry ani nie stosować samoopalaczy przez 2 tygodnie przed zabiegiem.",
            "• Skóra powinna być czysta, sucha i bez podrażnień.",
            "• W dniu zabiegu nie nakładać makijażu ani kremów w miejscu pigmentacji.",
            "• Nie stosować wcześniej kremów z retinolem lub kwasami w obrębie zabiegu.",
            "• Uwaga: po laminacji brwi należy odczekać minimum 3 tygodnie przed zabiegiem laserowego usuwania pigmentu.",
          ],
        },
        {
          title: "Czy po usunięciu można wykonać nowy makijaż permanentny?",
          description:
            "Tak, ale dopiero po pełnym wygojeniu skóry — zwykle po 6–8 tygodniach.",
        },
        {
          title: "Jakie są przeciwwskazania do zabiegu?",
          list: [
            "Zabieg nie jest wykonywany w przypadku:",
            "• ciąży i okresu karmienia piersią,",
            "• świeżej opalenizny lub podrażnionej skóry,",
            "• aktywnych infekcji lub stanów zapalnych skóry,",
            "• opryszczki w miejscu zabiegu,",
            "• chorób skóry (np. łuszczyca, egzema w fazie aktywnej),",
            "• chorób nowotworowych lub autoimmunologicznych,",
            "• przyjmowania leków światłouczulających (np. niektóre antybiotyki, retinoidy),",
            "• cukrzycy w stanie niewyrównanym,",
            "• skłonności do bliznowców.",
          ],
        },
      ],
      images: [photo2, photo3],
      imageAlt: "Efekty usuwania makijażu permanentnego",
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
              Laserowe usuwanie makijażu permanentnego
            </h1>
            <p className="laser-tattoo-removal__subtitle">
              Zabieg przeznaczony jest dla osób, które chcą bezpiecznie i skutecznie pozbyć się makijażu permanentnego lub przygotować skórę do nowej pigmentacji.
            </p>
            <p className="laser-tattoo-removal__description">
              Laser usuwa pigment z brwi nie wpływając na cebulki włosowe ani strukturę skóry.<br />
              Podczas zabiegu wykorzystywany jest system chłodzenia skóry CRYO, który redukuje ból i zapewnia maksymalny komfort.
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

export default LaserMakiPerm;
