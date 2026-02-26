import "./CabinetSection.scss";
import { Button } from "@/shared/ui/Button";
import backgroundImg from "@/shared/assets/images/laser-makijaz-remover/fon1.jpg";

const CabinetSection = () => {
  return (
    <section className="cabinet-section">
      <div className="cabinet-section__background">
        <img src={backgroundImg} alt="Nasz gabinet" />
      </div>
      <div className="container">
        <div className="cabinet-section__content">
          <h2 className="cabinet-section__title">Nasz gabinet</h2>
          <p className="cabinet-section__description">
           miejsce, w którym łączymy komfort, bezpieczeństwo i profesjonalizm, dbając o najwyższe standardy jakości, spokojną i dyskretną atmosferę oraz indywidualne podejście do każdego klienta, aby zapewnić skuteczność zabiegów i pełną satysfakcję
            </p>
          <Button className="cabinet-section__button">Zapisać się!</Button>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;
