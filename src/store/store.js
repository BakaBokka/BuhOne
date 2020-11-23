import cardback from "../images/cardback.jpg";
import clientlogo from "../images/clientlogo.png";
import avatar from "../images/ivanova.jpg";

let store = {
  serviceCards: [
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 1,
    },
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 2,
    },
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 3,
    },
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 4,
    },
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 5,
    },
    {
      text: "Бухгалтерское обслуживание",
      style: { backgroundImage: `url(${cardback})` },
      link: "#t",
      id: 6,
    },
  ],

  aboutCards: [
    {
      number: "90",
      text: "Завершенно крупных сделок",
      url: "#g",
      link: "Все кейсы",
      id: 1,
    },
    {
      number: "90",
      text: "Завершенно крупных сделок",
      url: "#g",
      link: "Все кейсы",
      id: 2,
    },
    {
      number: "90",
      text: "Завершенно крупных сделок",
      url: "#g",
      link: "Все кейсы",
      id: 3,
    },
    {
      number: "90",
      text: "Завершенно крупных сделок",
      url: "#g",
      link: "Все кейсы",
      id: 4,
    },
  ],

  clients: [
    {
      logo: `${clientlogo}`,
      id: 1,
      url: "#g",
    },
    {
      logo: `${clientlogo}`,
      id: 2,
      url: "#g",
    },
    {
      logo: `${clientlogo}`,
      id: 3,
      url: "#g",
    },
    {
      logo: `${clientlogo}`,
      id: 4,
      url: "#g",
    },
  ],

  feedback: [
    {
      ava: `${avatar}`,
      id: 1,
      text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати
      и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для текстов
      на латинице с начала XVI века. В то время некий безымянный печатник
       создал большую коллекцию размеров и форм шрифтов, используя Lorem
       Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба",
        часто используемый в печати и вэб-дизайне. `,
      name: `Екатерина Иванова`,
      caption: `Директор ООО “Раз-два”`
    },
    {
      ava: `${avatar}`,
      id: 2,
      text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати
      и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для текстов
      на латинице с начала XVI века. В то время некий безымянный печатник
       создал большую коллекцию размеров и форм шрифтов, используя Lorem
       Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба",
        часто используемый в печати и вэб-дизайне. `,
      name: `Екатерина Иванова`,
      caption: `Директор ООО “Раз-два”`
    },
    {
      ava: `${avatar}`,
      id: 3,
      text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати
      и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для текстов
      на латинице с начала XVI века. В то время некий безымянный печатник
       создал большую коллекцию размеров и форм шрифтов, используя Lorem
       Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба",
        часто используемый в печати и вэб-дизайне. `,
      name: `Екатерина Иванова`,
      caption: `Директор ООО “Раз-два”`
    },
    {
      ava: `${avatar}`,
      id: 4,
      text: `Lorem Ipsum - это текст-"рыба", часто используемый в печати
      и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для текстов
      на латинице с начала XVI века. В то время некий безымянный печатник
       создал большую коллекцию размеров и форм шрифтов, используя Lorem
       Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба",
        часто используемый в печати и вэб-дизайне. `,
      name: `Екатерина Иванова`,
      caption: `Директор ООО “Раз-два”`
    },
  ],
};

export default store;
