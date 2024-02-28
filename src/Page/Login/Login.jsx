import { useState,useContext } from "react";
import "./Login.css"
import { signin,signup } from "../../Service/auth";
import { authContext } from "../../Context/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const {setAuth} = useContext(authContext);
    const onLogin = () => {

        if(isLogin){
        signup(email, password)
            .then(data => {
                setAuth(data);
            })
        }else{
            signin(email, password)
            .then(data => console.log(data))
        }
    }

    return (
        <div className="login">
            <div className="form">
                <h1>{isLogin ? "Connexion" : "Inscription"}</h1>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" onKeyUp={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" onKeyUp={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="switch-login" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "je n'ai pas de compte" : "j'ai déjà un compte"}</button>
                </div>
                <div className="form-group">
                    <button className="login-button" onClick={() => onLogin()}>{isLogin ? "Connexion" : "Inscription"}</button>
                </div>
            </div>
        </div>
    );
}