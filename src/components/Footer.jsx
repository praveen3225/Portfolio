import React from "react";

function Footer()
{
    return (
        <>
            <div className="container-footer" style={{marginBottom:"0px"}}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 ">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-0 mb-md-0 mx-4 ">© 2024 Praveen | Aspiring Software Engineer | Ready to Innovate
      </span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4">
      <li className="ms-3"><a href="https://github.com/praveen3225"><i className="bi bi-github"></i></a></li>
      <li className="ms-3"><a href="https://www.linkedin.com/in/praveen-p-4930b127a/" ><i className="bi bi-linkedin"></i></a></li>
      <li className="ms-3"><a href="https://www.instagram.com/praveenpraga/?next=%2F"><i class="bi bi-instagram"></i></a></li>
    </ul>
  </footer>
</div>
        </>
    );
}

export default Footer;