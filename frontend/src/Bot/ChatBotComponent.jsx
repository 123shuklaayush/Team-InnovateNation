import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const head = document.head || document.getElementsByTagName("head")[0];

    script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"; // Replace 1.x.x with the version you want
    script.async = true;

    script.onload = () => {
      window.WebChat.default({
        initPayload: '/greet',
        customData: { language: "en" },
        socketUrl: "http://localhost:5005",
        // add other props here
      }, null);
    };

    head.insertBefore(script, head.firstChild);

    return () => {
      // Cleanup if needed
      head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your chatbot UI can be added here */}
    </div>
  );
};

export default Chatbot;
