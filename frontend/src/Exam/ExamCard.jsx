import React from 'react';

const ExamCard = ({ question, answers, onAnswer }) => {
  return (
    <div className="quiz-card p-5 m-5 bg-gray-100 rounded shadow">
      <h2 className="mb-4 font-bold text-xl">{question}</h2>
      {answers.map((answer, index) => (
        <button
          key={index}
          className="transition duration-500 ease-in-out transform active:scale-90 hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => onAnswer(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default ExamCard;