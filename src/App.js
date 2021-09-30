import {useState} from "react";

function App() {
  let [parastatus,changestatuspara]  = useState(false);
  const showpara = () => {
    changestatuspara(true);
  };
  
  return (
    <>
    <button id="click" onClick = {showpara}> Click me ! </button>
    {parastatus && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </>
  );
}

export default App;
