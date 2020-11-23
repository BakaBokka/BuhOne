import "./Footer.scss";

function Footer() {
  return (
    <section className="Footer">
      <div className="Footer__content">
        <p className="Footer__copy">2020 (с) Все права защищены. БухОне.ру</p>
        <a
          href="https://github.com/BakaBokka"
          className="Footer__developer"
          target="_blank"
          rel="noreferrer"
        >
          Разработано: BakaBokka
        </a>
      </div>
    </section>
  );
}

export default Footer;
