import Header from "../components/header";
import Share from "../components/sharefeedback";

const ShareFeedback = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="contentShare">
          <div className="contentHeader">
            <h1 className="share-text">Share FeedBack</h1>
            <div className="">
              <p className="fp-text">Feedback Period</p>
              <select
                name="options"
                id="optionSelect"
                className="feedback-period"
              >
                <option value="option1">October 2018</option>
                <option value="option2">October 2019</option>
                <option value="option3">October 2020</option>
              </select>
            </div>
          </div>
          <Share />
        </div>
      </div>
    </>
  );
};

export default ShareFeedback;
