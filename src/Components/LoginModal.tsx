import React from 'react';
import ButtonInMenu from "./ButtonInMenu";
import {Button, Container, Modal, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
type Props = {
    'show':boolean,
    'onHide':() => void
};

const LoginModal: React.FC<Props> = (props)  => (
    <Modal
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
            <form>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Zaloguj
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </Modal.Body>
        <Modal.Footer>
            W celu utworzenia konta skontaktuj się z administratorem
        </Modal.Footer>
    </Modal>
)


export default LoginModal