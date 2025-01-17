import { useAuth } from "../../../core/auth/auth.hook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Register (){
    const [t, i18n] = useTranslation("global");

    const {register, isLoading, isAuth} = useAuth();
    const [showEmailConfirm, updateshowEmailConfirm] = useState(false);
    const navigate = useNavigate();
    if(isAuth) navigate("/"); //si entro al registro logado no me lo debe permitir
                   //("/")
                   //https://pomoback-dev.onrender.com/
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.pass.value,
        };
        register(user).then(() => updateshowEmailConfirm(true));
    }
       return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <>
                    {showEmailConfirm ? <p>Te hemos enviado un email, revisa tu bandeja para validarlo</p>: ''}
                    <form className="formularios" onSubmit={handleSubmit}>
                        <input className="input"name="email" type="email" placeholder="Email" />
                        <input className="input"name="pass" type="password" placeholder="Contraseña" />          
                        <button className="boton" type="submit">{t("buttons.two")}</button>
                        <button className="login" type="submit"><Link to="/auth/login">{t("buttons.one")}</Link></button>
                        
                    </form>
                    </>
            }
        </>
    )
}

export default Register;