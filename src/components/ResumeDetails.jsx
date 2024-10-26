import Accordion from 'react-bootstrap/Accordion';

function ResumeDetails() {
  return (
    <Accordion flush style={{width:"100%"}}>
      <Accordion.Item eventKey="0" style={{backgroundColor:"transparent"}}>
        <Accordion.Header style={{backgroundColor:"transparent"}}><h1 style={{color:"white"}}>Education</h1></Accordion.Header>
        <Accordion.Body className='accordion-body'>
          <ul>
            <li>
                University - SASTRA Deemed University<br></br>
                Location - Thanjavur<br></br>
                Domain & Degree - Computer Science and Engineering - B.Tech <br></br>
                Tenure - 2020-2024<br></br>
                CGPA - 8.3807<br></br>
            </li>
            <li style={{marginTop:"30px"}}>
                School - Thamarai International School <br></br>
                Location - Thanjavur<br></br>
                Domain & Degree - Computer Science - High School<br></br>
                Tenure - 2019-2020<br></br>
                Percentage - 95.5%
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{backgroundColor:"transparent"}}>
        <Accordion.Header style={{backgroundColor:"transparent"}}><h1 style={{color:"white"}}>Experience</h1></Accordion.Header>
        <Accordion.Body className='accordion-body'>
          Company - BOSCH Global Software Technologies Private Limited <br></br>
          Position - Student trainee <br></br>
          Location - Bangalore <br></br>
          Tenure - Jan 2024 - May 2024 <br></br>
          Work -  Created multiple intuitive front-end graphical user interface (GUI) for an innovative healthcare
technology using Python libraries Tkinter and PyQt5. Implemented responsive design principles to
enhance user experience and accessibility.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{backgroundColor:"transparent"}}>
        <Accordion.Header style={{backgroundColor:"transparent"}}><h1 style={{color:"white"}}>Skills</h1></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <ul>
          <li>Programming Languages - C++, Java, Python</li><br></br>
          <li>Libraries / Frameworks - JavaScript, React, Node.js, SpringBoot, Spring</li><br></br>
          <li>Tools / Platforms - Git, jQuery, Bootstrap, VS Code, HTML, CSS</li><br></br>
          <li>Databases - SQL, PostgreSQL</li></ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={{backgroundColor:"transparent"}}>
        <Accordion.Header style={{backgroundColor:"transparent"}}><h1 style={{color:"white"}}>Certifications</h1></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <ul>
          <li>
          Intern Completion Certicate - </li> <a href="https://drive.google.com/file/d/1J-3fHeKQA2BK5kfJMARVcLDWlV6aIlRf/view?pli=1"><strong>BOSCH Global Software Technologies Private Limited</strong></a><br></br>
          <li>The Complete 2024 Web Development Bootcamp by Angela Yu - </li><a href="https://drive.google.com/file/d/1Nz63kCj1pzXFKhvvYYSQGJfvy6U_U1en/view?usp=drive_link"><strong>Udemy</strong></a><br></br>
          <li>Java Spring Framework 6 with SpringBoot 5 by Navin Reddy - </li><a href="https://drive.google.com/file/d/1yz34UDrLG_5de5oX7WZ1nRvgB2Og_log/view?usp=drive_link"><strong>Udemy</strong></a><br></br>
          <li>Web Development Course Completion - </li><a href="https://drive.google.com/file/d/1ddj3rp-jnhCu-KBUPRA8fl29VNG31zaa/view?usp=drive_link"><strong>Teachnook</strong></a></ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ResumeDetails;