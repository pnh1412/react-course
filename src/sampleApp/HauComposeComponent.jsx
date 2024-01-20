import React from 'react';
import '../index.css';

function Button({ label }) {
  return <button className = "custom-button" >{label}</button>;
}

function Text({ content }) {
  return <p>{content}</p>;
}

function HauComposeComponent() {
  return (
    <div className= "block">
      <div className= "block-text">
        <Text content="No Items!" />
      </div>
      <div className="container">
        <Button label="Increasement" />
      </div>
      
    </div>
  );
}

export default HauComposeComponent;
