import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Booking_Page from './pages/booking_page/Booking_Page';
import Goa_wedding from './pages/state_wedding_page/goa_wedding/Goa_wedding';
import Udaipur from './pages/state_wedding_page/udaipur_page/Udaipur';
import Kerala from './pages/state_wedding_page/kerala/Kerala';
import Jaypur from './pages/state_wedding_page/jaypur/Jaypur';
import Chennai from './pages/state_wedding_page/chennai/Chennai';
import Couple from './pages/state_wedding_page/couple/Couple';
import Learn_mome_button from './pages/learnMore_page/Learn_mome_button';
import Mehdi from './pages/mehdi_section/learnmore_Button/Mehdi';
import Gallery from './pages/mehdi_section/gallery_Button/Gallery';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import NoPage from './pages/nopage/NoPage';
import WeddingDuc from './pages/portfolio/wedding_document/WeddingDuc';
import CouplePortraits from './pages/portfolio/couples02/CouplePortraits';
import Family from './pages/portfolio/family/Family';

import Denny from './pages/state_wedding_page/goa_wedding/denny/Denny';
import Dina from './pages/state_wedding_page/goa_wedding/dina/Dina';
import Raahil from './pages/state_wedding_page/goa_wedding/raahil/Raahil';
import Raahil2 from './pages/state_wedding_page/goa_wedding/raahil2/Raahil2';
import SarahVivek from './pages/state_wedding_page/goa_wedding/sarah&Vivek/SarahVivek';
import ClaytonAnn from './pages/state_wedding_page/goa_wedding/claytonAnn/ClaytonAnn';
import LindaJoerg from './pages/state_wedding_page/goa_wedding/lindaJoerg/LindaJoerg';
import ScrollTop from './component/scrollTop/ScrollTop';
import AnalisaAndJaydev from './pages/state_wedding_page/goa_wedding/analisajaydev/AnalisaAndJaydev';
import UditShivani from './pages/state_wedding_page/goa_wedding/uditAndShivani/UditShivani';
import Faq from './pages/faq/Faq';


function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          {/* paging */}
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<NoPage/>} />
          {/* portfolio */}
          <Route path='/weddingduct' element={<WeddingDuc/>} />
          <Route path='/coupleport' element={<CouplePortraits/>} />      
          
          
          

          <Route path='/family' element={<Family/>} />
          <Route path='/faq' element={<Faq/>} />
        
           {/* herosection */}
          <Route path='/booking' element={<Booking_Page/>} />
          <Route path='/learnmore' element={<Learn_mome_button/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/learn' element={<Mehdi/>} />
          {/* state_wedding_router */}
          <Route path='/goa' element={<Goa_wedding/>} />
                {/* innner_route */}
               <Route path='/denny' element={<Denny/>} />
               <Route path='/dina' element={<Dina/>} />
               <Route path='/rahil' element={<Raahil/>} />
               <Route path='/analisa' element={<AnalisaAndJaydev/>} />
               <Route path='/udit' element={<UditShivani/>} />
               <Route path='/rahiltwo' element={<Raahil2/>} />
               <Route path='/sarah' element={<SarahVivek/>} />
               <Route path='/clayton' element={<ClaytonAnn/>} />
               <Route path='/linda' element={<LindaJoerg/>} />
              

          <Route path='/udaipur' element={<Udaipur/>} />
          <Route path='/kerala' element={<Kerala/>} />
          <Route path='/jaipur' element={<Jaypur/>} />
          <Route path='/chennai' element={<Chennai/>} />
          <Route path='/couple' element={<Couple/>} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
