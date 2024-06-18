import QRCode from 'qrcode.react';
import { useState } from "react";
const Qrgenerator = () => {
  const [name, setName] = useState('');
  const [ qr , setQr] = useState('Blood bank')
   

  const handleOnchange = (e) =>{
    setName(e.target.value);
    setQr(e.target.value)
}

  const HandleGenerator=(e)=>{
    e.preventDefault()
    console.log(`generator btn clicked ${qr}`)
  }
  console.log(name)
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="header-cont">
        <form action="get" onSubmit={()=> HandleGenerator}>
         <input type="text" name="" onChange={()=> handleOnchange} id="" placeholder="Enter QR Generator content " />
         <button type='submit' >Generator</button>
        </form>
        
      </div>
      <div className="qr-container">
            <QRCode  value={qr} style={{ width:'200px', height:"200px", marginTop:"30px"}}/>
        </div>
    </div>
  );
};

export default Qrgenerator;
