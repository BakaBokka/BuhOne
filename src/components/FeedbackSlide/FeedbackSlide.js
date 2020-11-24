import "./FeedbackSlide.scss";

function FeedbackSlide({ ava, text, name, caption }) {
  return (
    <div className="FeedbackSlide">
      <div className="FeedbackSlide__content">
        <blockquote className="FeedbackSlide__text">{text}</blockquote>
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
