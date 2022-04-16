import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Profile } from 'pages/Profile';
import { Support } from 'pages/Support';
import { Tariffs } from 'pages/Tariffs';
import { Menu } from 'compnents/Menu';
import { mainMenuItems } from 'constants/menu';
import { News } from 'pages/News';
import { NewsDetail } from 'pages/NewsDetail';

function App() {
  return (
    <div className="App">
      <header className="active">i'm header</header>
      <aside>
        <Menu links={mainMenuItems} />
      </aside>
      <main>
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
          {/* <Route path="/news/:slug" element={<NewsDetail />} /> */}
          <Route path="/news/:pageAddress" element={<NewsDetail />} />
        </Routes>
      </main>
      <footer>i'm footer</footer>
    </div>
  );
}

export default App;
