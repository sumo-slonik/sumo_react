import React from "react";
import Menu from "../Components/BootstrapMenu";

type Props = {
    children?: React.ReactNode
};

const BootstrapPage: React.FC<Props> = ({children})  => (
    <>
        <div className="container-fluid text-center d-flex flex-column vh-95">
            <div className="row content vh-95">
                <div className="col-sm-1 sidenav">
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                </div>
                <div className="col-sm-10 vh-95">
                    <Menu/>
                    {children}
                </div>
                <div className="col-sm-1 sidenav vh-95">
                    <div className="well">
                        <p>ADS</p>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>
        </div>

        <footer className="container-fluid text-center vh-5">
            <p>Footer Text</p>
        </footer>
    </>
)

export default BootstrapPage