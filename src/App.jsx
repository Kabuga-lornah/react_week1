import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './music/Navbar'
import List from './music/List'
import Amapiano from './music/Amapiano'
import Rnb from './music/Rnb'
import Eighty from './music/Eighty'
import Ninety from './music/Ninety'
import Trap from './music/Trap'
import Rhumba from './music/Rhumba'

function App() {
  return (

<>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path='amapiano'element={<Amapiano />} />
        <Route path="rnb" element={<Rnb />} />
        <Route path="eighty" element={<Eighty />} />
        <Route path="ninety" element={<Ninety />} />
        <Route path="trap" element={<Trap />} />
        <Route path="rhumba" element={<Rhumba />} />
      </Routes>
 </>
  );
}

export default App