import React from 'react'
import Header from '../Header/Header';
import ImageTemp from '../ImageTemplate/ImageTemp';
import ChatBotComponent from '../Bot/ChatBotComponent';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Counter from '../Counter/Counter';

const Home = () => {
  return (
    <div>
      <Header/>
      <ImageTemp/>
      <Counter/>
      <Main/>
      <ChatBotComponent/>
      <Footer/>
    </div>
  )
}

export default Home
