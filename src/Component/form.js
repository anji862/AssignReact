import React,{useState,useEffect} from 'react'
import './form.css'

const Form = (props) => {
  const name=props.location.state
  const [formData, setFormData] = useState({
    movieName:"",
    username: "",
    address: ""
  })
  const [username, setUser] = useState("")

  const [address, setAddress] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({movieName:name,username:username,address:address})
    setUser("");
    setAddress("")
    console.log(formData);
}

useEffect(() => {
  const json = JSON.stringify(formData);
  localStorage.setItem("data", json);
}, [formData]);
  return (
    <div className="FormContainer">
    <div className="FormBox">
    <form className="UserForm" onSubmit={handleSubmit}>
      <h1 style={{textAlign:"center",fontSize:"40px"}}> Our Form </h1>
      <div className="FillForm">
      <input  value={name} type="text" name="title" id="title" />
      </div><br/><br/>
      <div className="FillForm">
      <input onChange={(e)=>setUser(e.target.value)} value={username} placeholder="Username" type="text" name="username" id="username" />
      </div><br/><br/>
      <div className="FillForm">
      <input onChange={(e)=>setAddress(e.target.value)} value={address} placeholder="Address" type="text" name="address" id="address" />
      </div><br/><br/>
      <input type="submit" value="Submit" className="subBtn" />
    </form>
    </div>
    </div>
  )
}

export default Form