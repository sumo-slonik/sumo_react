import React, {Dispatch, SetStateAction, useState} from 'react';
import {Modal} from "react-bootstrap";

import {useCookies} from "react-cookie";
import axios from "axios";
import Authorities from "../Objects/Authorities";

type Props = {
    'show': boolean,
    'onHide': () => void,
    'loginSuccess': boolean,
    'setLoginSuccess': (arg: any) => void
    userLoggedIn:boolean,
    setUserLoggedIn:Dispatch<SetStateAction<boolean>>
};


const LoginModal: React.FC<Props> = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token', 'username', 'roles_details']);

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const loginParams = new URLSearchParams()
        loginParams.append('username', login)
        loginParams.append('password', password)
        axios({
            url: "http://localhost:8090/api/login",
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data: loginParams
        }).then((response: {
            status: any;
            data: { access_token: string; refresh_token: string; }
        }) => {
            if (response.status === false) {
                console.log("coś poszło nie tak przy logowaniu");
                props.setLoginSuccess(false)
            } else {
                setCookie("access_token", response.data.access_token, {maxAge: 60 * 60, path: "/", secure: false});
                setCookie("refresh_token", response.data.refresh_token, {
                    maxAge: 60 * 60 * 24,
                    path: "/",
                    secure: false
                });
                setCookie("username", login, {maxAge: 60 * 60, path: "/", secure: false});
                props.setLoginSuccess(true);
                props.onHide();
                axios({
                    url: "http://localhost:8090/authorizationDetails",
                    method: "GET",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                        'Authorization':`Bearer ${response.data.access_token}`
                    },
                }).then((res:{data:Authorities})=>{
                    console.log(res)
                    setCookie("roles_details", JSON.stringify(res.data), {
                        maxAge: 60 * 60 * 24,
                        path: "/",
                        secure: false
                    });
                    console.log(res.data)
                    console.log(JSON.stringify(res.data))
                    props.setUserLoggedIn(true)
                }).then(()=>
                {
                    console.log(cookies.roles_details)
                }
                )
            }
        }).catch(reason => console.log(reason)
        )
    }



    return (<Modal
        show={props.show}
        onHide={props.onHide}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Logowanie
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        className="form-control"
                        placeholder="Wprowadź login"
                        type="text"
                        value={login}
                        onChange={handleLoginChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Wprowadź hasło"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Zaloguj
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Zapomniałeś <a href="#">danych?</a>
                </p>
            </form>
        </Modal.Body>
        <Modal.Footer>
            W celu utworzenia konta skontaktuj się z administratorem
        </Modal.Footer>
    </Modal>)
}


export default LoginModal