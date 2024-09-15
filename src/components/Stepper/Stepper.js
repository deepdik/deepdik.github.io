import React, { useState } from 'react';
import './Stepper.css';
import WorkExperience from '../WorkExperience/WorkExperience';

const Stepper = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Software Engineer', company: 'Oracle',skills:['Back-End', 'Front-End', 'Python', 'Spring Boot', 'Java', 'Flask', 'FastAPI', 'Redis', 'Spring Cloud', 'Hibernate', 'JDBC', 'SQLAlchemy', 'Event Driven Architecture', 'Distributed Systems', 'Event-driven', 'Docker', 'Kubernetes', 'Jenkins', 'React', 'OracleDB', 'Mysql', 'HTML', 'CSS', 'Javascript'], startDate: 'MAY-2021', endDate: 'AUG-2023', tasks: [
      'Developed Python graph algorithm to identify invalid objects in Oracle Databases. Achieved a remarkable 50% reduction in time to resolve customer service requests.',
      'Enhanced functionality through cross-team collaboration, successfully troubleshooting and resolving over 10+ bugs, and seamlessly integrating 5+ new features into core automation engine.',
      'Created Python script using graph algorithm to automate XML output validation from core automation engine, cutting manual testing effort by 100%.',
      'Built survey platform on microservices architecture for Database RCA Analysis, slashing analysis time by 75%. Helped to analyze customer trace file upload behavior towards different severity issues.',
      'Contributed to developing a versatile automation health and analytics platform. Helped to manage 10k+ core engine config files, assess system effectiveness, and pinpointing areas for improvement. Leveraged Java, python, Hibernate, Spring Cloud, Docker, and Kubernetes to architect.']},

    { id: 2, title: 'Software Engineer', company: 'Finoit Technologies',skills:['Back-End', 'Python', 'Django', 'AWS', 'S3', 'EC2','SES', 'AWS-Lambda', 'Stripe', 'Payment-Gateway', 'Redis', 'Test Driven Development', 'Distributed Systems', 'Docker', 'CI/CD', 'Kafka', 'Selenium', 'Memcached'], startDate: 'JAN-2020', endDate: 'APR-2021', tasks: [
      'Designed and developed payment microservice for SaaS Platform, integrating Stripe with 3D Secure and split payment functionality, resulting in a 10% reduction in payment processing costs.',
      'Developed an integrated platform to manage employee attendance, efficiency of employees, health of projects, Invoices, revenue distribution and security etc.Project health improved, with a 15% reduction in project delays and a 18% increase in on-time completions.',
      'Contributed to Laboratory Management software, developing robust backend APIs for seamless integration with frontend functionality, reducing sample process time by 37% and yielding a 16% increase in monthly revenue.',
      'Provided guidance and mentorship to junior colleagues, nurturing their professional growth and development.'
    ]},

    { id: 3, title: 'Software Engineer', company: 'Fluper Ltd',skills:['Back-End', 'Front-End', 'Python', 'Django', 'Mysql', 'PostgreSQL', 'ORM', 'Twillio', 'Celery', 'RabbitMq', 'Angular', 'HTML', 'CSS', 'Javascript', 'JQuery', 'MongoDB', 'Caching'], startDate: 'FEB-2019', endDate: 'JAN-2020',tasks: [
      'Enhanced Existing API performance by 300% by using Async task management with RabbitMq+Celery. Used caching mechanisms to reduce redundant computations and database queries.',
      "Led and orchestrated end-to-end development for a client's E-commerce platform, resulting in a 40% surge in online sales within initial quarter post-launch."
    ]},

    { id: 3, title: 'Software Engineer Intern', company: 'BrandsBrother',skills:['Full Stack Web Development', 'Django', 'Python', 'Mysql', 'ORM'], startDate: 'OCt-2018', endDate: 'JAN-2019',tasks: [
      'Developed RESTful APIs for TouristShop portal, facilitating effortless online booking of travel packages, resulting in a 8% increase in bookings.',
      'Integrated third-party APIs to extend portal functionality and features.'
    ] },
  ]);

return (
<div class="container">
    {items.map((item)=>{
        return (
            <div class="step completed">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content">
              <WorkExperience item ={item}/>
            </div>
        </div>)
    })}
    {/* <div class="step completed">
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>

      <div class="content">
        <WorkExperience/>
      </div>
  </div>
  
  <div class="step active">
    <div class="v-stepper">
      <div class="circle"></div>
      <div class="line"></div>
    </div>

    <div class="content">
    <WorkExperience/>
    </div>
  </div>

  <div class="step">
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <WorkExperience/>
      </div>
  </div> */}
  
</div>
  );
};

export default Stepper;
