import React from 'react';
import '../index.css';
export default function HauBox() {
  const [numberOfBoxes, setNumberOfBoxes] = React.useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumberOfBoxes(value);
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 1; i <= numberOfBoxes; i++) {
      boxes.push(
        <div key={i} className="box">
          Box #{i}
        </div>
      );
    }
    return boxes;
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="boxInput">Enter the number of boxes: </label>
        <input
          type="number"
          id="boxInput"
          value={numberOfBoxes}
          onChange={handleInputChange}
        />
      </div>
      <div className="box-container">{renderBoxes()}</div>
    </div>
  );
}
