import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function toggle() {
        setOpenMenu(!openMenu);
    }

    function handleProjectClick() {
        if (location.pathname === "/") {
            // Already on HomePage, just scroll to Projects
            const projectSection = document.getElementById("projects");
            if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to HomePage first, then scroll to Projects
            navigate("/"); // Navigate to HomePage
            setTimeout(() => {
                const projectSection = document.getElementById("projects");
                if (projectSection) {
                    projectSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Delay to ensure component renders
        }
    }

    return (
        <>
            <div className="header-flex">
                <h1 className="header-name mx-4 mx-sm-5 mx-lg-6">Praveen</h1>
                <div className={`link-flex ${openMenu ? "show" : ''}`}>
                    {/* Added class "projects-link" */}
                    <a 
                        onClick={handleProjectClick} 
                        className="projects-link" 
                        style={{ cursor: "pointer" }}
                    >
                        Projects
                    </a>
                    {props.link === "#/" ? (
                        <>
                            <a href="#/">home</a>
                        </>
                    ) : (
                        <>
                            <a href="#/resume">resume</a>
                        </>
                    )}
                    <a href="https://github.com/praveen3225"><i className="bi bi-github"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/praveen-p-4930b127a/" ><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="hamburger-menu" onClick={toggle}>
                    <i className="bi bi-list" style={{ color: "white", fontSize: "30px" }}></i>
                </div>
            </div>
        </>
    );
}

export default Header;
