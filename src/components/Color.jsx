import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

const Color = ({ canvasRef, color, setColor }) => {
  const [selectedColor, setSelectedColor] = useState(color);

  const debouncedSetColor = useCallback(debounce(setColor, 300), [setColor]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = selectedColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    debouncedSetColor(selectedColor);
    localStorage.setItem('color', selectedColor);
  }, [selectedColor, debouncedSetColor, canvasRef]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    event.preventDefault();
  };

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor="colorPicker">Pick a color:</label>
      <div className='flex space-x-4'>
        <button className='h-8 w-8 border rounded-full' style={{ backgroundColor: selectedColor }}></button>
        <button className='flex items-center justify-center border h-8 w-8 rounded-full relative'>
          <h1>+</h1>
          <input type="color" id="colorPicker" value={selectedColor} onChange={handleColorChange} className='absolute opacity-0' />
        </button>
      </div>
    </div>
  );
};

export default Color;
