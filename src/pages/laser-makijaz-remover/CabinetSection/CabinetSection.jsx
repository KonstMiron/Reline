// import "./CabinetSection.scss";
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
          <a href="https://booksy.com/pl-pl/303971_reline-studio_tatuaz-i-piercing_6832_lublin?do=invite&_branch_match_id=1469312206242631988&utm_medium=profile_share_from_boost&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVtwgOyDULCzOtiEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAxHHrizwAAAA%3D" target="_blank" rel="noopener noreferrer">
            <Button className="cabinet-section__button">Zapisać się!</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;
