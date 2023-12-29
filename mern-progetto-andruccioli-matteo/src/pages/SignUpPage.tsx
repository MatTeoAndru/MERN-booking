import { Link } from "react-router-dom";

export default function SignUpPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-40">
                <h1 className="text-4xl text-center mb-4">Registrati!</h1>
                <form className="max-w-mdd mx-auto " action="">
                    <input type="text" placeholder="Matteo A" />
                    <input type="email" placeholder="your email!" />
                    <input type="password" placeholder="password!"/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Gia' iscritto? <Link className="underline text-black" to={"/signup"}>Login</Link>
                    </div>
                </form>
            </div>   
        </div>
    );
}
 