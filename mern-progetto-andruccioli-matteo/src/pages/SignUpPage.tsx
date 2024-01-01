import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function SignUpUser(ev: { preventDefault: () => void; }) {
        ev.preventDefault();
        try {
            axios.post("/register",{
                name,
                email,
                password,
            });
            alert('Registrazione avvenuta con successo!')
        } catch (error) {
            alert('Registrazione fallita  ')
        }

    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-40">
                <h1 className="text-4xl text-center mb-4">Registrati!</h1>
                <form className="max-w-mdd mx-auto " onSubmit={SignUpUser}>
                    <input type="text" placeholder="Matteo A" 
                            value={name}
                            onChange={ev => setName(ev.target.value)}/>
                    <input type="email" placeholder="your email!"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password" placeholder="password!"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}/>
                    <button className="primary">Registrati</button>
                    <div className="text-center py-2 text-gray-500">
                        Gia' iscritto? <Link className="underline text-black" to={"/login"}>Accedi</Link>
                    </div>
                </form>
            </div>   
        </div>
    );
}
 