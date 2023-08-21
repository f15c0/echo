import styles from "./styles/index.module.css";
import Login from "./pages/login";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div className="contentWrapper">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
