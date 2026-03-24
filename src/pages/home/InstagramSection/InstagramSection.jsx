import "./InstagramSection.scss";
import phonesImg from "@/shared/assets/images/instagram-phones.svg";
import { Button2 } from "@/shared/ui/Button2";
import instIcon from "@/shared/assets/images/inst_icon.svg";
 
const InstagramSection = () => {
  return (
    <section className="instagram">
      <div className="container instagram__inner">
        <p className="instagram__kicker">Usuń przeszłość, podkreśl przyszłość.</p>
        <p className="instagram__lead">Re Line – miejsce, gdzie zaczyna się nowe.</p>
 
        <h2 className="instagram__title">INSTAGRAM</h2>

        <div className="instagram__media">
          <img
            className="instagram__phones"
            src={phonesImg}
            alt="Podgląd Instagram RE LINE"
          />
        </div>
        <Button2 
          href="https://www.instagram.com/reline.studio.lbn/"
          target="_blank"
          className="instagram__button"
          icon={<img src={instIcon} alt="Instagram" />}
        >
          Zobacz na Instagramie
        </Button2>
      </div>
    </section>
  );
};

export default InstagramSection;