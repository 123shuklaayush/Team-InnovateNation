import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import bot from "../image/bot.png"
const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },
    ],
    end: true,
  },
];

const theme = {
  background: '#fffff',
  headerBgColor: '#3c8aca',
  headerFontSize: '20px',
  botBubbleColor: '#3c8aca',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#3c8aca',
  userFontColor: 'white',
};

const config = {
  botAvatar: bot,
  floating: true,
};


function ChatBotComponent() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Chat With Us"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default ChatBotComponent;
