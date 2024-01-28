import React from 'react';
import clsx from 'clsx';

import Button from './Button';

import styles from './greetingLogout.module.css';

// use clsx to handle multiple className

function GreetingLogout({ title, className, handleToggleAut }) {
  return (
    <div>
      <div 
        className={clsx(
          styles.heading,
          className
        )}
      >
        {title}
      </div>
      <Button 
        danger
        textButton='Logout'
        onClick={handleToggleAut}
        // onClick={() => {
        //   setIsAut(false)
        // }}
      />
    </div>
  )
}

export default GreetingLogout