import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtistPage from "./components/ArtistPage";
import Player from "./components/Player";
import AlbumList from "./components/AlbumList";
import VerticalSideBar from "./components/VerticalSidebar";
import SearchPage from "./components/Search";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VerticalSideBar />
        <Player />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album" element={<AlbumList />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/search-page/:artistName" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
