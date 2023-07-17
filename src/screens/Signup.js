import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {
    
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit = async(e)=>{
       e.preventDefault();
       console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
       const response =await fetch("http://localhost:5000/api/createuser",{
       method:'POST',
       headers:{
        'Content-Type':'application/json'
       },
       body :JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password,location:credentials.geolocation})
       })
       
       const json =await response.json()
       console.log(json);
       
       if(!json.success){
         alert("Enter Valid Credentials")
       }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    
    return (
        <div style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp7029317.jpg")', backgroundSize: 'cover',height: '100vh' }}>
        <div>
          <Navbar/>
        </div>
        <div className='container mt-5'>
            <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control mt-2" placeholder="Enter your name" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mt-2" name='email' value={credentials.email} onChange={onChange}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <div id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</div>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-2" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="address" className="form-control mt-2" name='geolocation' value={credentials.address} onChange={onChange} placeholder="Address"/>
                </div>

                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to ="/login" className='m-3 btn btn-danger'>Already a User</Link>
                  
            </form>
        </div>
        </div>
    )
}


 