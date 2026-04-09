import React, { useState} from "react";     
import API from "../api";

function Signup(){
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await API.post("/signup",form);
            alert(res.data.message);}
        catch(err){
            alert("Error occurred while signing up");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="tel" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <button type="submit">Signup</button>
        </form>
    )
}

export default Signup;      