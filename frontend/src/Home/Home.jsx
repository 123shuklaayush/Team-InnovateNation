import React from 'react'
import Header from '../Header/Header';
import ImageTemp from '../ImageTemplate/ImageTemp';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Counter from '../Counter/Counter';
import ChabotComponent from '../Bot/ChatBotComponent'
const Home = () => {
  return (
    <div>
      <Header/>
      <ImageTemp/>
      <Counter/>
      <Main/>
      <ChabotComponent/>
      <Footer/>
    </div>
  )
}

export default Home
