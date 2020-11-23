import "./FeedbackSlide.scss";

function FeedbackSlide({ ava, text, name, caption }) {
  return (
    <div className="FeedbackSlide">
      <div className="FeedbackSlide__content">
        <p className="FeedbackSlide__text">{text}</p>
        <div className="FeedbackSlide__user">
          <img src={ava} alt="Фото клиента" className="FeedbackSlide__avatar" />
          <div className="FeedbackSlide__user-info">
            <p className="FeedbackSlide__name">{name}</p>
            <p className="FeedbackSlide__caption">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSlide;
