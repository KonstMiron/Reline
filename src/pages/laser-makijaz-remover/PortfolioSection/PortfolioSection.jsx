import "./PortfolioSection.scss";
import { Button } from "@/shared/ui/Button";
import instIcon from "@/shared/assets/images/inst_icon.svg";
import logo from "@/shared/assets/images/laser-makijaz-remover/reline.svg";
import video1 from "@/shared/assets/images/laser-makijaz-remover/portfolio1.mp4";
import video2 from "@/shared/assets/images/laser-makijaz-remover/portfolio2.mp4";
import video3 from "@/shared/assets/images/laser-makijaz-remover/portfolio3.mp4";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-section__title">PORTFOLIO</h2>
        <p className="portfolio-section__subtitle">Zobacz nasze portfolio na Instagramie</p>
        
        <Button 
          href="https://instagram.com/reline_lublin"
          target="_blank"
          className="portfolio-section__button"
          icon={<img src={instIcon} alt="Instagram" />}
        >
          Instagram
        </Button>

        <div className="portfolio-section__gallery">
          <div className="portfolio-section__gallery-item">
            <video autoPlay loop muted playsInline>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="portfolio-section__gallery-item">
            <video autoPlay loop muted playsInline>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="portfolio-section__gallery-item">
            <video autoPlay loop muted playsInline>
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="portfolio-section__footer">
          <img src={logo} alt="R'LINE Logo" className="portfolio-section__footer-logo" />
          <h3 className="portfolio-section__footer-title">Piękno bez kompromisów</h3>
          <p className="portfolio-section__footer-description">
            Profesjonalizm i wygoda w każdym zabiegu — dla Twojej pewności siebie
          </p>
          <p className="portfolio-section__footer-tagline">Laserowa precyzja</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
