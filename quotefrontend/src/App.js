import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [topic,setTopic]=useState("")
  const [type,setType]=useState("")
  const [output,setOutput]=useState("")

  const handleSubmit=async()=>{
    try {
      const response = await axios.post('https://quotes-zvk8.onrender.com/quotes', {
        message: `Tell me a ${type} about ${topic}`
      });
      const responseData = response.data;
      setOutput(responseData)
    } catch (err) {
      console.error(err);
    }
    
    
  }
  return (
    <div style={{display:"flex"}}>
      
      <div style={{width:"30%",height:"450px",textAlign:"center",marginLeft:"50px",marginRight:"100px",marginTop:"200px",border:"2px solid black"}}>
        
       <div>
      <h3>Enter the Topic :</h3>
      <input type="text" value={topic} style={{width:"200px",height:"30px",paddingLeft:"5px",borderRadius:"5px",fontSize:"15px"}} onChange={(e)=>setTopic(e.target.value)} placeholder='Enter your Topic'/>
       </div>
       <div>
       <h3>Select the Subject : </h3>
      <select value={type} onChange={(e)=>setType(e.target.value)} style={{width:"215px",height:"40px",paddingLeft:"5px",borderRadius:"5px",fontSize:"15px"}} >
      <option value="">Select your Subject</option>
        <option value="Quote">Quote</option>
        <option value="Poem">Poem</option>
        <option value="Story">Story</option>
        <option value="Joke">Joke</option>
        <option value="Shayari">Shayari</option>
      </select>
       </div>
      
      <button onClick={handleSubmit} style={{background:"green",marginTop:"20px", borderRadius:'5px',width:"100px",height:"30px",marginLeft:"50px"}}>Submit</button>
      </div>
      
      <div style={{border:"2px solid red"}}>
        <h1 style={{textAlign:"center"}}>Content Generator</h1>
      <div style={{border:"2px solid green",width:"70%",height:"70%",margin:"auto",marginTop:"100px",textAlign:"center"}}>
      {topic && type? <h2>{type} on {topic}</h2>:<h2>Content Arena</h2>}
      <p>{output}</p>

      </div>
      </div>
    </div>

     
  );
}

export default App;
