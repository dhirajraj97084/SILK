import React from 'react'
import Hero from '../../component/hero/Hero'
import Hero_about from '../../component/heroabout/Hero_about'
import Herobox2 from '../../component/herobox2/Herobox2'
import HerophotoGrephy from '../../component/photography_items/HerophotoGrephy'
import Fixed_herp from '../../component/fixedhero/Fixed_herp'
import Texthero from '../../component/texts_hero/Texthero'
import Mehdi_hero from '../../component/hero_mehdi/Mehdi_hero'
import Layout from '../../component/layout/Layout'
import HeroGallery from '../../component/heroGallery/heroGallery1/HeroGallery'


function Home() {
  return (
    <Layout>
      <Hero/>
      <Hero_about/>
      <Herobox2/>
      {/* <HerophotoGrephy/> */}
      <HeroGallery/>
      <Fixed_herp/>
      <Texthero/>
      <Mehdi_hero/>    
    </Layout>
  )
}

export default Home
