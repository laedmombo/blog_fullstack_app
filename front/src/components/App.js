import ArticlesList from './ArticlesList';
import Banner from './Banner';
import Favoris from './Favoris';
import Footer from './Footer';
import logo from '../assets/logo.png'
import '../styles/Layout.css'
import { useEffect, useState } from 'react';

function App() {
  const [favoris, updateFavoris] = useState([])


  return (
    <div>
      <Banner>
        <img src={logo} alt='Blog de Baudouin et Dael' className='bg-logo'/>
        <h1 className='bg-title'>Blog Baudouin et Dael</h1>
      </Banner>
      <div className='bg-layout-inner'>
        <Favoris favoris={favoris} updateFavoris={updateFavoris} />
        <ArticlesList favoris={favoris} updateFavoris={updateFavoris} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
