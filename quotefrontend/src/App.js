import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import burnt from "./images/burntpaper-removebg-preview.png"
import { Spinner } from '@chakra-ui/react';

function App() {
  const [topic,setTopic]=useState("")
  const [type,setType]=useState("")
  const [output,setOutput]=useState("")
  const [loading,setLoading]=useState(false)
  console.log(topic,type)

  const handleSubmit=async()=>{
    console.log(topic,type)
    try {
      setLoading(true)
      const response = await axios.post('https://quotes-zvk8.onrender.com/quotes', {
        message: `Tell me a ${type} about ${topic}`
      });
      const responseData = response.data;
      setLoading(false)
      console.log(responseData)
      setOutput(responseData)
      setType("")
      setTopic("")
    } catch (err) {
      console.error(err);
    }
    
    
  }
  return (
    <div style={{display:"flex",backgroundColor:'black'}}>
      
      <div style={{width:"25%",height:"350px",textAlign:"center",marginLeft:"50px",marginRight:"50px",paddingTop:"50px",marginTop:"150px",border:"1px solid white",borderRadius:"20px",color:"white"}}>
        
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
        <option value="Joke">Joke</option>
        <option value="Shayari">Shayari</option>
      </select>
       </div>
      
      <button onClick={handleSubmit} style={{background:"green",marginTop:"20px", borderRadius:'5px',width:"100px",height:"30px",color:"white"}}>Submit</button>
      </div>
      
      <div style={{width:"70%",height:"100vh"}}>
        <h1 style={{textAlign:"center",color:"white",fontFamily:"Great Vibes"}}>Content Generator</h1>
      <div id="content">
      {topic && type? <h2  style={{paddingTop:"100px",marginLeft:"-250px",fontWeight:"500"}}>{type} on {topic}</h2>:<h2 style={{paddingTop:"100px",marginLeft:"-250px"}}>Content Arena</h2>}
      
      <div style={{width:"300px",marginLeft:"55px"}}>
        {loading?<p>loading Please Wait...</p>:null}
      {output.length>0?
      <p style={{fontFamily:"cursive",marginTop:"20px"}}>{output}</p>:<p>Please Select the Subject and Topic...</p>}

      </div>

      </div>
      </div>
    </div>

     
  );
}

export default App;
