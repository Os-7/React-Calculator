import React from 'react'
import styles from './ButtonsContainer.module.css';

export default function ButtonsContainer({onButtonClick}) {

  const buttonNames = ['C', '1', '2','+', '3', '4','-', '5', '6','*', '7','8','/','=','9 ', '0' , '.' ];

  return <div className={styles.buttonsContainer}>
  {buttonNames.map(buttonName =><button className={styles.button} onClick={()=>onButtonClick(buttonName)} key={buttonName}>{buttonName}</button>)}
</div>
}
