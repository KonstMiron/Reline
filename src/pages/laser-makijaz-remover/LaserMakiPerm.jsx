import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";
import { Button } from "@/shared/ui/Button";
import CabinetSection from "./CabinetSection";
import PortfolioSection from "./PortfolioSection";
// import "./LaserMakiPerm.scss";
import logo from "@/shared/assets/images/laser-makijaz-remover/reline.svg";
import photo1 from "@/shared/assets/images/laser-makijaz-remover/Photo1.jpg";
import photo2 from "@/shared/assets/images/laser-makijaz-remover/Photo2.jpg";
import photo3 from "@/shared/assets/images/laser-makijaz-remover/Photo3.jpg";

const LaserMakiPerm = () => {
  const sectionsData = [
    {
      questions: [
        {
          title: "Jak wygląda zabieg?",
          description:
            "Preparat jest aplikowany bardzo precyzyjnie w warstwę skóry, gdzie znajduje się pigment.\nW kolejnych dniach pigment stopniowo „podchodzi” ku powierzchni skóry i zostaje usunięty w procesie regeneracji naskórka.",
        },
        {
          title: "Czy zabieg jest bolesny?",
          description:
            "Zazwyczaj nie.\nMoże wystąpić lekkie uczucie pieczenia lub napięcia skóry, które ustępuje po kilku godzinach.",
        },
        {
          title: "Czy po removerze pozostają ślady?",
          description:
            "Po zabiegu może pojawić się lekkie zaczerwienienie lub drobne strupki – to naturalna reakcja skóry.\nPo całkowitym wygojeniu skóra odzyskuje naturalny koloryt, bez blizn i przebarwień.",
        },
        {
          title: "Ile zabiegów potrzeba?",
          description:
            "Zazwyczaj wystarcza 1–4 sesje, w zależności od głębokości pigmentu i jego koloru.\nZabiegi wykonuje się w odstępach 6–8 tygodni.",
        },
      ],
      image: photo1,
      imageAlt: "Proces usuwania makijażu permanentnego removerem",
      reverse: false,
    },
    {
      questions: [
        {
          title: "Jak przygotować się do zabiegu?",
          list: [
            "• Skóra powinna być zdrowa, sucha i niepodrażniona.",
            "• Nie stosować retinolu, kwasów ani silnych peelingów przez minimum tydzień przed zabiegiem.",
            "• Po laminacji brwi należy odczekać minimum 3 tygodnie.",
            "• W dniu zabiegu nie nakładać makijażu ani kremów w miejscu pigmentacji.",
          ],
        },
        {
          title: "Jak dbać o skórę po zabiegu?",
          list: [
            "• Nie dotykać i nie moczyć miejsca po zabiegu przez pierwsze dni.",
            "• Nie usuwać samodzielnie strupków – powinny odpaść naturalnie.",
            "• Stosować preparaty łagodzące i regenerujące zgodnie z zaleceniami specjalisty.",
            "• Chronić skórę przed słońcem i stosować filtr SPF 50.",
          ],
        },
        {
          title: "Jakie są przeciwwskazania do zabiegu?",
          list: [
            "• ciąża i okres karmienia piersią,",
            "• świeża opalenizna lub podrażnienia skóry,",
            "• aktywne infekcje, opryszczka lub stany zapalne,",
            "• choroby skóry (np. łuszczyca, egzema w fazie aktywnej),",
            "• nowotwory, choroby autoimmunologiczne,",
            "• przyjmowanie antybiotyków lub leków przeciwzapalnych,",
            "• cukrzyca w stanie niewyrównanym,",
            "• skłonność do powstawania bliznowców.",
          ],
        },
      ],
      images: [photo2, photo3],
      imageAlt: "Efekty usuwania makijażu permanentnego removerem",
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
              Usuwanie makijażu permanentnego removerem
            </h1>
            <p className="laser-tattoo-removal__subtitle">
              Zabieg przeznaczony dla osób, u których pigment po makijażu permanentnym przybrał trudny do usunięcia odcień, np. zielony, żółty, szary lub niebieskawy odcień.
            </p>
            <p className="laser-tattoo-removal__description">
              Remover to alternatywa dla lasera – stosowany w przypadkach, gdy pigment jest odporny na działanie światła lub został osadzony zbyt głęboko.<br />
              Preparat działa miejscowo w warstwie skóry, w której znajduje się pigment. Składniki aktywne powodują reakcję chemiczną, która osłabia wiązania cząsteczek pigmentu.
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
