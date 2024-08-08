import React from 'react';

interface CharacterDropDownProps {
  character: string;
  setCharacter: (newCharacter: string) => void;
}

const CharacterDropDown: React.FC<CharacterDropDownProps> = ({ character, setCharacter }) => {
  return (
    <select
      value={character}
      onChange={(e) => setCharacter(e.target.value)}
      className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="60">60</option>
      <option value="70">70</option>
      <option value="80">80</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default CharacterDropDown;
