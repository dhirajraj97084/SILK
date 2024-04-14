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
import FaqPage from './pages/resourceDrop/FaqPage';
import ForCouples from './pages/resourceDrop/forCouples/ForCouples';
import One from './pages/resourceDrop/forCouples/one/One';
import Two from './pages/resourceDrop/forCouples/two/Two';
import Three from './pages/resourceDrop/forCouples/three/Three';
import Four from './pages/resourceDrop/forCouples/four/Four';
import Denny from './pages/state_wedding_page/goa_wedding/denny/Denny';
import Dina from './pages/state_wedding_page/goa_wedding/dina/Dina';
import Raahil from './pages/state_wedding_page/goa_wedding/raahil/Raahil';
import Raahil2 from './pages/state_wedding_page/goa_wedding/raahil2/Raahil2';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* paging */}
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<NoPage/>} />
          {/* portfolio */}
          <Route path='/weddingduct' element={<WeddingDuc/>} />
          <Route path='/coupleport' element={<CouplePortraits/>} />
          {/* resource */}
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='/forcouples' element={<ForCouples/>} />
          <Route path='/one' element={<One/>} />
          <Route path='/two' element={<Two/>} />
          <Route path='/three' element={<Three/>} />
          <Route path='/four' element={<Four/>} />

          <Route path='/family' element={<Family/>} />
        
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
               <Route path='/rahiltwo' element={<Raahil2/>} />

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
