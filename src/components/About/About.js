import "./About.scss";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutGrid from "../AboutGrid/AboutGrid";

function About({ cards }) {
  return (
    <section className="About">
      <div className="About__content">
        <div className="About__info">
          <SectionTitle text={"О нас"} />
          <h2 className="About__title">
            Компания <span className="About__title-accent">ИвановПром</span>
          </h2>

          <p className="About__text">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
        <AboutGrid cardsArr={cards} />
      </div>
    </section>
  );
}

export default About;
