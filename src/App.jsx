import { Routes, Route } from "react-router-dom";
import { Main } from "pages/Main";
import { Profile } from "pages/Profile";
import { Support } from "pages/Support";
import { Tariffs } from "pages/Tariffs";
import { Menu } from "compnents/Menu";
import { mainMenuItems } from "constants/menu";
import { News } from "pages/News";
import { NewsDetail } from "pages/NewsDetail";
import { Tickets } from "pages/Tickets";
import { ReactComponent as Logo } from "icons/logo.svg";
import "./styles.css";
import { Counter } from "compnents/Counter";
import { useSelector } from "react-redux";

function App() {
  const balance = useSelector((store) => store.balance.value);

  return (
    <div className="App">
      <header className="active">
        <div className="container">
          <a href="#">
            <Logo />
          </a>
          Ваш баланс: {balance}
        </div>
      </header>
      <aside>
        <Menu links={mainMenuItems} />
      </aside>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/support" element={<Support />} />
          </Routes>
          <Routes>
            <Route path="/tariffs" element={<Tariffs />} />
          </Routes>
          <Routes>
            <Route path="/news" element={<News />} />
          </Routes>
          <Routes>
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
          <Routes>
            {/* <Route path="/news/:slug" element={<NewsDetail />} /> */}
            <Route path="/news/:pageAddress" element={<NewsDetail />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          i'm footer
          <Counter />
        </div>
      </footer>
    </div>
  );
}

export default App;
