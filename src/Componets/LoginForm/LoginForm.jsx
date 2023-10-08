import { useState } from "react";



const Form = () => {
    const [name, setName]= useState('');
    const [title, setTitle] = useState('');
    const [email,Setmail] = useState('xyz@gmail.com')

    return ( 
        <div className="new">
            <h1>Create New Account</h1>
            <form >
                <label>First Name</label>
                <input 
                type="text"
                required
                value = {name}
                onChange={(e)=> setName(e.target.value)}
                />
              <label>Last Name</label>
                <input 
                type="text"
                value = {title}
                onClick={(e)=> setTitle(e.target.value)}
                />
                <label>Email</label>
                <input 
                type="text"
                required
                value = {email}
                onClick={(e)=> Setmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                type="text"
                required
                />              
            </form>
        </div>

     );
}
 
export default Form;