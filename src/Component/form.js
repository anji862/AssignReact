import React,{useState,useEffect} from 'react'
import './form.css'

const Form = (props) => {
  const name=props.location.state
  const [formData, setFormData] = useState({
    movieName: "",
    showDate: "",
    quantity:"",
    emailid: "",
    contact:"",
    address: ""
  })
  const [email, setEmail] = useState("")
  const [showDate, setShowDate] = useState("")
  const [tel, setTel] = useState("")
  const [qty,setQty] = useState("")
  const [address, setAddress] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({movieName:name,showDate:showDate,quantity:qty,emailid:email,contact:tel,address:address})
    setEmail("");
    setShowDate("");
    setTel("");
    setQty("");
    setAddress("")
    console.log(formData);
}

useEffect(() => {
  const json = JSON.stringify(formData);
  localStorage.setItem("data", json);
}, [formData]);
  return (
    <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Book Tickets</h1>
                    </div>
                <form onSubmit={handleSubmit}>
                <div class="form-group"> <input class="form-control" type="text" value={name} /></div>
                        <div class="row">
                            <div class="col-md-6">
                    <div class="form-group"> <input onChange={(e) => setShowDate(e.target.value)} class="form-control" value={showDate} type="date" required/> <span class="form-label">Show Date</span> </div>
                  </div>
                  <div class="form-group"> <select onChange={(e) => setQty(e.target.value)} class="form-control" id="select" required>
                                        <option value="" selected hidden>Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                </select><span class="select-arrow"></span></div>
                        </div>
                        <div class="d-flex flex-row">
                            <div class="col-4">
                    <div class="form-group"> <input onChange={(e)=>setEmail(e.target.value)} class="form-control" value={email}  type="email" placeholder="Enter your Email"/></div>
                            </div>
                            <div class="col-4">
                                <div class="form-group"> <input onChange={(e)=>setTel(e.target.value)} class="form-control" value={tel} name="tel" type="tel" placeholder="Enter you Phone"/></div>
                            </div>
                      </div>
                <div class="form-group"> <input onChange={(e)=>setAddress(e.target.value)}class="form-control" value={address} type="text" placeholder="Address"/> <span class="form-label">Address</span> </div>
                        <div class="form-btn"> <button class="submit-btn" onClick={handleSubmit}>Book Now</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Form