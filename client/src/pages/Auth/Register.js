import React ,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css"


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    //form function 
    const handleSubmit =async (e) => {
        e.preventDefault();
   try {
       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
           { name, email, password, phone, address,answer }
       );
       if (res && res.data.success) {
           toast.success(res.data && res.data.message)
           navigate("/login");
       } else {
           toast.error(res.data.message)
       }
   } catch (error) {
       console.log(error);
       toast.error('Something went wrong')
   }
    };
console.log(process.env.REACT_APP_API)
    return (
        <Layout title={"Register - Ecommerce App"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <h4 className='title'>Register Page</h4>
  <div className="mb-3">
    
                        <input type="text"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder=" Name:"
                            required
                            autofocus
                        />
   
                    </div>
                    <div className="mb-3">
    
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder=" Email: "
                        required/>
   
  </div>
  <div className="mb-3">
    
    <input type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1"
                            placeholder=" Password:"
                            required/>
                    </div>
                    <div className="mb-3">
    
                        <input type="text" value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder=" Phone no:"
                            required/>
   
                    </div>
                    
                    <div className="mb-3">
  
                        <input type="text" value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder=" Address:"
                            required />
                        
   
                    </div>
                    <div className="mb-3">
    
                        <input type="text" value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder="What is your favourite sports"
                            required/>
   
                    </div>
 
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

          </div>
        </Layout>
    )
};

export default Register;