import React from 'react';

interface EmojiDropDownProps {
  emoji: string;
  setEmoji: (newEmoji: string) => void;
}

const EmojiDropDown: React.FC<EmojiDropDownProps> = ({ emoji, setEmoji }) => {
  return (
    <select
      value={emoji}
      onChange={(e) => setEmoji(e.target.value)}
      className="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
    >
      <option value="">Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  );
};

export default EmojiDropDown;
