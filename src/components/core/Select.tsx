import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const CustomSelect = ({
  options,
  placeholder,
  selectedOption,
  setSelectedOption,
}) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState({});

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    setSelectedOption({ ...option });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full font-sans" ref={dropdownRef}>
      <div
        className="bg-white border rounded-lg p-3 flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span
          className={`${
            selectedOption.value || selectedOption.value === 0
              ? 'text-black'
              : 'text-gray-400'
          }`}
        >
          {selectedOption.text || placeholder}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-h-80 overflow-scroll z-[9999]">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={`p-3 rounded-lg mt-2 cursor-pointer text-black ${
                  selectedOption.value === option.value
                    ? 'bg-[#ff9d3f] text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
