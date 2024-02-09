import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }else if(buttonText === "C"){
      setCalVal("");
    }else{
      const  newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  }
  
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}/>
      <ButtonsContainer onButtonClick = {onButtonClick}/>
    </div>
  );
}

export default App;
