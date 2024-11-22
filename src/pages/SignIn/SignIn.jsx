import "./SignIn.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../app/store";
import { useState } from "react";



export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function logInCheck(email, password) {
        try {
            const logInFetch = await fetch("http://localhost:3001/api/v1/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password }),
                })
            const logInData = await logInFetch.json();
            if (!logInFetch.ok) {
                throw new Error("Echec de connexions")
            }
            return logInData.body.token
        } catch (e) {
            console.error(e)
            alert("Nom de l'utilisateur et/ou mot de passe incorrectes");
        }
    }

    const handleLogIn = async (evt) => {
        evt.preventDefault();
        const token = await logInCheck(username, password)
        if (token) {
            dispatch(setToken(token))
            navigate("/user")
        } else {

        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogIn}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </main >

    );
}

