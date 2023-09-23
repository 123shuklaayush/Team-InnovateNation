import React, { useEffect } from 'react';

const ChatBotComponent = () => {
  useEffect(() => {
    const loadWebChat = async () => {
      const script = document.createElement("script");
      const head = document.head || document.getElementsByTagName("head")[0];

      script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"; // Replace 1.x.x with the version that you want
      script.async = true;

      script.onload = () => {
        window.WebChat.default({
          initPayload: '/greet',
          customData: { language: "en" },
          socketUrl: "http://localhost:5005",
          // Add other props here
        }, null);
      };

      head.insertBefore(script, head.firstChild);
    };

    loadWebChat();
  }, []);

  return (
    <div id="webchat-container">
      {/* You can add a container here if needed */}
    </div>
  );
};

export default ChatBotComponent;
