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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          
          <Route path='/booking' element={<Booking_Page/>} />
          <Route path='/learnmore' element={<Learn_mome_button/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/learn' element={<Mehdi/>} />
          {/* state_wedding_router */}
          <Route path='/goa' element={<Goa_wedding/>} />
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
