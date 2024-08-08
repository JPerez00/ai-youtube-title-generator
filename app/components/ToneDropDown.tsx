import React from 'react';

interface ToneDropDownProps {
  tone: string;
  setTone: (newTone: string) => void;
}

const ToneDropDown: React.FC<ToneDropDownProps> = ({ tone, setTone }) => {
  return (
    <select
      value={tone}
      onChange={(e) => setTone(e.target.value)}
      className="w-full mx-auto px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="friendly">Friendly</option>
      <option value="professional">Professional</option>
      <option value="humorous">Humorous</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default ToneDropDown;
