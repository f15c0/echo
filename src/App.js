import styles from "./styles/index.module.css";
import Footer from "./components/footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import ShareFeedback from "./pages/share_feedback";
import NoMatch from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/share-feedback" element={<ShareFeedback />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
