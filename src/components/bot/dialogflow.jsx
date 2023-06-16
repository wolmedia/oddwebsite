import React, { useState } from "react";
import dialogflow from "dialogflow";
import dialogflowConfig from "../../assets/credentials/dialogflowConfig.json";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    try {
      const sessionClient = new dialogflow.SessionsClient({
        credentials: dialogflowConfig,
      });

      const sessionPath = sessionClient.projectAgentSessionPath(
        dialogflowConfig.project_id,
        "unique-session-id"
      );

      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: "en-US",
          },
        },
      };

      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: result.fulfillmentText, isUserMessage: false },
      ]);
    } catch (error) {
      console.error("Error sending message to Dialogflow:", error);
    }
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUserMessage: true },
    ]);

    sendMessage(message);

    event.target.message.value = "";
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUserMessage ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" name="message" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
