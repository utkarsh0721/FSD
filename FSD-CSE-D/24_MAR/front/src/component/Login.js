import React, {useState} from "react";
import API from "../api";

function Login(){
    const [username, setUsername] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await API.post("/login",form);
            alert(res.data.message);

        }catch(err){
            alert("Invalid credentials");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    )

}

export default 

