import React from 'react';
import CategorySection from '../components/organisms/CategorySection';
import Banner from '../components/organisms/Banner';
import Navbar from '../components/organisms/Navbar';
import TopTenSection from '../components/organisms/TopTenSection';
import ContinueWatchingSection from '../components/organisms/ContinueWatchingSection';

// Importacion de las imagenes desde assets
import friends from '../assets/friends.jpg';
import gameOfThrones from '../assets/game-of-thrones.jpg';
import gumball from '../assets/gumball.jpg';
import justiceLeague from '../assets/justice-league.jpg';
import kungFuPanda from '../assets/kung-fu-panda.jpg';
import regularShow from '../assets/regular-show.jpg';
import shrek from '../assets/shrek.jpg';
import shrek2 from '../assets/shrek2.jpg';
import theLastOfUs from '../assets/the-last-of-us.jpg';
import twoAndHalfMen from '../assets/two-and-half-men.jpg';
import got from '../assets/got.jpg';

const Home = () => {
  // Lista de contenido para cada categoria
  const destacados = [
    { image: friends, title: 'Friends' },
    { image: gameOfThrones, title: 'Game Of Thrones' },
    { image: gumball, title: 'Amazing World of Gumball' },
    { image: justiceLeague, title: 'Justice League' },
  ];

  const soloParaTi = [
    { image: kungFuPanda, title: 'Kung Fu Panda'},
    { image: regularShow, title: 'Regular Show'},
    { image: shrek, title: 'Shrek'},
    { image: shrek2, title: 'Shrek 2'},
]

const topTen = [
  { image: gameOfThrones, title: 'Game of Thrones' },
  { image: shrek, title: 'Shrek' },
  { image: justiceLeague, title: 'Justice League' },
  { image: gumball, title: 'Gumball' },
  { image: regularShow, title: 'Regular Show' },
  { image: twoAndHalfMen, title: 'Two And A Half Men' },
  { image: friends, title: 'Friends' },
  { image: kungFuPanda, title: 'Kung Fu Panda' },
  { image: shrek2, title: 'Shrek 2' },
  { image: theLastOfUs, title: 'The Last Of Us' },
];

const continuarViendo = [
  { image: shrek, title: 'Shrek', progress: 30 },
  { image: kungFuPanda, title: 'Kung Fu Panda', progress: 65 },
  { image: gameOfThrones, title: 'Game of Thrones', progress: 85 },
];



  return (
  <div style={{ backgroundColor: '#111', minHeight: '100vh' }}>
    
    {/* Banner principal */}
    <Navbar />
    <Banner image={got} title="Game of Thrones" />

    {/* Secciones de contenido */}
    <CategorySection title="Destacados" items={destacados} />
    <CategorySection title="Solo Para Ti" items={soloParaTi} />
    <TopTenSection items={topTen} />
    <ContinueWatchingSection items={continuarViendo} />

  </div>
);

};


export default Home;
