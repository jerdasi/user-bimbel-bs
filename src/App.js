import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Faq from './Pages/Faq';
import PembayaranBerhasil from './Pages/Pembayaran/PembayaranBerhasil';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaketBimbingan from './Pages/PaketBimbingan';
import KelasRekomendasi from './Pages/Pendaftaran/KelasRekomendasi';
import ReviewPendaftaran from './Pages/Pendaftaran/ReviewPendaftaran';
import RincianPembayaran from './Pages/Pembayaran/RincianPembayaran'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}></Route>
          <Route exact path='/faq' element={<Faq/>}></Route>
          <Route exact path='/paket-bimbingan' element={<PaketBimbingan/>}/>
          <Route exact path='/kelas-rekomendasi' element={<KelasRekomendasi/>}/>
          <Route exact path='/review-pendaftaran' element={<ReviewPendaftaran/>}/>
          <Route exact path='/rincian-pembayaran' element={<RincianPembayaran/>}/>
          <Route exact path='/pembayaran-berhasil' element={<PembayaranBerhasil/>}></Route>
          <Route path='*' />
        </Routes>
      </BrowserRouter>
        
      <Footer/>
    </>
  );
}

export default App;
