import React from "react";
import { useState } from "react";
function Header(props)
{
    const [openMenu, setOpenMenu] = useState(false);
    function toggle()
    {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <div className="header-flex">
                <h1 className="header-name mx-4 mx-sm-5 mx-lg-6">Praveen</h1>
                <div className={`link-flex ${openMenu ? "show" : ''}`}>
                    {/* <a href="#projects">Projects</a> */}
                    {
                        props.link==="#/" ? (<><a href="/#projects">Projects</a>
                        <a href="#/">home</a></>) :(<><a href="/#projects">Projects</a><a href="#/resume">resume</a></>)
                    }
                    <a href="https://github.com/praveen3225"><i className="bi bi-github"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/praveen-p-4930b127a/" ><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="hamburger-menu" onClick={toggle}>
                     <i className="bi bi-list" style={{color: "white", fontSize: "30px"}}></i>
                </div>      
            </div>
        </>
    )
}

export default Header;
