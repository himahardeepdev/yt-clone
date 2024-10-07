
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from './components/PageNotFound';
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
function App() {
  const { loading } = useAuth();
  return (
    <div>
      <Navbar />
      {loading ?<Loading /> : <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      }
      
      
    </div>
  );
}

export default App;
