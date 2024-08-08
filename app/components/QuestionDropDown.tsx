import React from 'react';

interface QuestionDropDownProps {
  question: string;
  setQuestion: (newQuestion: string) => void;
}

const QuestionDropDown: React.FC<QuestionDropDownProps> = ({ question, setQuestion }) => {
  return (
    <select
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  );
};

export default QuestionDropDown;
