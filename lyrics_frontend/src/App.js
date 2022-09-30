import './App.css';
import { Routes, Route } from 'react-router-dom';
import SongList from './pages/SongList/SongList';
import NewSong from './pages/NewSong/NewSong';
import SongDetails from './pages/SongDetails/SongDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SongList />}></Route>
      <Route path='/songs/new' element={<NewSong />}></Route>
      <Route path='/songs/:songId' element={<SongDetails />}></Route>
    </Routes>
  );
}

export default App;
