import React from 'react';

interface LanguageDropDownProps {
  language: string;
  setLanguage: (newLanguage: string) => void;
}

const LanguageDropDown: React.FC<LanguageDropDownProps> = ({ language, setLanguage }) => {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="english">English</option>
      <option value="spanish">Spanish</option>
      <option value="french">French</option>
      <option value="japanese">Japanese</option>
      <option value="korean">Korean</option>
      <option value="chinese">Chinese</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default LanguageDropDown;
