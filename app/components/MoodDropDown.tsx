import React from 'react';

interface MoodDropDownProps {
  mood: string;
  setMood: (newMood: string) => void;
}

const MoodDropDown: React.FC<MoodDropDownProps> = ({ mood, setMood }) => {
  return (
    <select
      value={mood}
      onChange={(e) => setMood(e.target.value)}
      className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="excited">Excited</option>
      <option value="curious">Curious</option>
      <option value="serious">Serious</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default MoodDropDown;
