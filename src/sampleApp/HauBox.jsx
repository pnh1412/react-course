import React from 'react';

import InputField from '../components/InputField';
import Button from '../components/Button';

// export default function HauBox() {
//   const [numberOfBoxes, setNumberOfBoxes] = React.useState(0);

//   const handleInputChange = (e) => {
//     const value = parseInt(e.target.value, 10) || 0;
//     setNumberOfBoxes(value);
//   };

//   const renderBoxes = () => {
//     const boxes = [];

//     for (let i = 1; i <= numberOfBoxes; i++) {
//       boxes.push(
//         <div key={i} className="box">
//           Box #{i}
//         </div>
//       );
//     }

//   console.log('boxs: ', boxes)

//     return boxes;
//   };


//   return (
//     <div className="">
//       <h1>Sample App: GenerateBox - Hau </h1>
//       <div>
//         <label htmlFor="boxInput">Enter the number of boxes: </label>
//         <input
//           type="number"
//           id="boxInput"
//           value={numberOfBoxes}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="box-container">{renderBoxes()}</div>
//     </div>
//   );
// }

export default function HauBox() {
  const [numberOfBoxes, setNumberOfBoxes] = React.useState(0);
  const [boxes, setBoxes] = React.useState([]);

  function handleAddBox(){
    setBoxes(() => {
      const newBoxes = [];
      for (let i = 1; i <= numberOfBoxes; i++) {
        newBoxes.push({ 
          id: i,
          text: `Box #${i}`,
          bgColor: '#f00'          
        });
      }
      return newBoxes;
    });
  }

  function handleChangeColorBox(boxId) {
    // step 1: find box by id
    // step 2: update color of this box
    // step 3: update state of boxes
    const newBoxes = boxes.map(box => {
      if(box.id === boxId) {
        box.bgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      }
      return box;
    })
    setBoxes(newBoxes);
  }
    
  return (
    <div className="">
      <h1>Sample App: GenerateBox - Hau </h1>
      <div>
        <label htmlFor="boxInput">Enter the number of boxes: </label>
        <InputField 
          onChange={(e) => setNumberOfBoxes(parseInt(e.target.value, 10) || 0)}
        />
        <Button textButton="Submit" onClick={handleAddBox} />
      </div>
      <div className="box-container">
        {boxes.map(box => {
          return (
            <div 
              key={box.id} 
              className="box" 
              onClick={() => handleChangeColorBox(box.id)}
              style={{ 
                backgroundColor: box.bgColor,
              }}
            >           
              Box #{box.id}
            </div>
          )
        })}
        
      </div>
    </div>
  );
}


/*
boxs = [
  { id 1, text: 'Box #1', color: '#fff' },
]

*/