import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="maincontainer">
      <h2>About Our Website</h2>
      <section>
        <h3>Smart India Hackathon 2023</h3>
        <p>
          <strong>Topic:</strong> Development of E-portal for facilitating Case
          Management hearing of various types of cases
        </p>
      </section>
      
      <section>
        <h3>Implementation</h3>
        <h4>Project Initiation: Our Project comprises of four types of users: Super Admin, judge, lawyer, and client</h4>
        <ul>
          <h5>Super Admin Section</h5>
          <li>Responsible of adding and removing the cases.</li>
          <li>Will provide with a client id and password which will led to login for the client</li>
          <li>Can add lawyers and judges involved in this case and provide the access to them</li>
          <li>Can modify the pdf and documents regarding the case</li>
          <li>Admin can generate the summarise pdf and document of the provided pdf and can share it with the client, lawyers and judges</li>
          <li>Could see the pending cases and upcoming cases and update them for the other users</li>
          <li>Would be managing the dates about when is the next hearing in the court</li>
        </ul>
        <ul>
        <h5>Lawyer and Judge</h5>
          <li>A lawyer has its dashboard in which he/she can manage his/her education, number of cases won, his payment, and many other things</li>
          <li>Can view the upcoming cases and has the read access to the documents uploaded by the super admin</li>
        </ul>
        <ul>
          <h5>Client</h5>
          <li>Has access to read the documents and summarised documents</li>
          <li>Can view the dates on which the conferencing is being scheduled</li>
        </ul>
      </section>

      <section>
        <h5>Our Team Members</h5>
        <ul>
          <li>Sachin Yadav - Leader</li>
          <li>Ayush Shukla - BackEnd Developer</li>
          <li>Aryan Maurya - FrontEnd Developer</li>
          <li>Mohit Sai Kiran - Works on AI/ML </li>
          <li>Saurabh Kushwaha - Integrate the web application</li>
          <li>Sharmila - UI/UX developer</li>
        </ul>
      </section>
      

      

      {/* Add other sections for Technology Stack Selection, Development Phases, Security and Compliance, Testing and Quality Assurance, Deployment, User Adoption and Training, Ongoing Maintenance and Support, Monitoring and Improvement, and Evaluation */}
    </div>
  );
};

export default Main;
