import React, { useState } from 'react';

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);

  const questions = {
    1: {
      id: 1,
      text: '¡Hola! ¿En qué puedo ayudarte?',
      options: [
        { id: 1, text: '¿Cómo puedo realizar un pedido?', nextQuestionId: 2 },
        { id: 2, text: '¿Cuáles son los métodos de pago disponibles?', nextQuestionId: 3 },
        { id: 3, text: '¿Cuál es la política de devoluciones?', nextQuestionId: 4 },
      ],
    },
    2: {
      id: 2,
      text: '¿Cómo puedo realizar un pedido?',
      options: [
        { id: 1, text: '¿Cuáles son los requisitos para realizar un pedido?', nextQuestionId: 5 },
        { id: 2, text: '¿Puedo realizar un pedido por teléfono?', nextQuestionId: 6 },
        { id: 3, text: 'Volver', nextQuestionId: 1 },
      ],
    },
    3: {
      id: 3,
      text: '¿Cuáles son los métodos de pago disponibles?',
      options: [
        { id: 1, text: '¿Aceptan tarjetas de crédito?', nextQuestionId: 7 },
        { id: 2, text: '¿Se puede pagar en efectivo?', nextQuestionId: 8 },
        { id: 3, text: 'Volver', nextQuestionId: 1 },
      ],
    },
    4: {
      id: 4,
      text: '¿Cuál es la política de devoluciones?',
      options: [
        { id: 1, text: '¿Cuál es el plazo para realizar una devolución?', nextQuestionId: 9 },
        { id: 2, text: '¿Qué productos no son elegibles para devolución?', nextQuestionId: 10 },
        { id: 3, text: 'Volver', nextQuestionId: 1 },
      ],
    },
    5: {
      id: 5,
      text: '¿Cuáles son los requisitos para realizar un pedido?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 2 },
      ],
    },
    6: {
      id: 6,
      text: '¿Puedo realizar un pedido por teléfono?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 2 },
      ],
    },
    7: {
      id: 7,
      text: '¿Aceptan tarjetas de crédito?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 3 },
      ],
    },
    8: {
      id: 8,
      text: '¿Se puede pagar en efectivo?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 3 },
      ],
    },
    9: {
      id: 9,
      text: '¿Cuál es el plazo para realizar una devolución?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 4 },
      ],
    },
    10: {
      id: 10,
      text: '¿Qué productos no son elegibles para devolución?',
      options: [
        { id: 1, text: 'Volver', nextQuestionId: 4 },
      ],
    },
  };

  const startChat = () => {
    setShowChat(true);
  };

  const selectAnswer = (optionId) => {
    const selectedQuestion = questions[currentQuestion];
    const answer = {
      question: selectedQuestion.text,
      option: selectedQuestion.options.find((o) => o.id === optionId).text,
    };
    setAnswers([...answers, answer]);

    const nextQuestionId = selectedQuestion.options.find((o) => o.id === optionId).nextQuestionId;
    if (nextQuestionId) {
      setCurrentQuestion(nextQuestionId);
    } else {
      setShowChat(false);
      setCurrentQuestion(1);
      setAnswers([]);
    }
  };

  return (
    <div className="chatbot">
      {!showChat ? (
        <button className="chatbot-toggle" onClick={startChat}>
          Iniciar Chat
        </button>
      ) : (
        <div className="chatbot-dialog">
          {answers.map((answer, index) => (
            <div key={index} className="chatbot-message">
              <strong>Pregunta:</strong> {answer.question}
              <br />
              <strong>Respuesta:</strong> {answer.option}
            </div>
          ))}
          <div className="chatbot-options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className="chatbot-option"
                onClick={() => selectAnswer(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
