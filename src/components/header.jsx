import { useState } from "react";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("Share Feedback");
  const sharedfeedbackCount = 2;
  const myFeedBackCount = 8;

  return (
    <header>
      <nav className="header">
        <h3 className="echo-text">Echo</h3>
        <div className="tabs">
          <li
            className={selectedTab === "Share Feedback" ? "active" : ""}
            onClick={() => setSelectedTab("Share Feedback")}
          >
            <span
              className="notification-badge"
              data-count={sharedfeedbackCount}
            >
              Share Feedback
            </span>
          </li>
          <li
            className={selectedTab === "My Feedback" ? "active" : ""}
            onClick={() => setSelectedTab("My Feedback")}
          >
            <span className="notification-badge" data-count={myFeedBackCount}>
              My Feedback
            </span>
          </li>
          <li
            className={selectedTab === "Team Feedback" ? "active" : ""}
            onClick={() => setSelectedTab("Team Feedback")}
          >
            Team Feedback
          </li>
        </div>
        <div className="profile-section">
          <div className="avatar-box">
            <img src="https://i.pravatar.cc/150?img=68" alt="John Smith" />
          </div>
          <div className="logout-box">
            <h5 className="profile-name">John Smith</h5>
            <p>LOGOUT</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
