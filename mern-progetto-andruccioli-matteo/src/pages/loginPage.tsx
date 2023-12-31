import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect ] = useState(false);
    async function handleLoginSubmit(ev: { preventDefault: () => void; }) {
        ev.preventDefault();
        try {
            await axios.post('/login' , {email, password } );
            alert('Login ok!');
            setRedirect(true);
        } catch (error) {
            alert('Login fallita!');
        }  
    }   

    if (redirect)
    {
        return <Navigate to = {'/'}></Navigate>
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-40">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-mdd mx-auto " onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder="your email!" value=
                    {email}
                        onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password" placeholder="password!" value=
                    {password}
                        onChange={ev => setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Registrati ora <Link className="underline text-black" to={"/signup"}>Registrati</Link>
                    </div>
                </form>
            </div>   
        </div>
    );
}
 