import React, { useState, useEffect } from 'react';
import './HomePage.css';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import Card1 from '../../assets/images/exploreplugin.gif';
import Stepper from '../../components/Stepper/Stepper';
import Technologies from '../Technologies/Technologies';
import UdaanSystemDiagram from '../../assets/images/Udaan.svg'
import { Link as ScrollLink, Element } from 'react-scroll';
import Pagination from '../../components/Pagination/Pagination';
const HomePage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(24 34 44)', 
};



const [selcted, setSelected] = useState(0);

// useEffect(() => {
//   // Function to handle the scroll event
//   const handleScroll = () => {
//     // Set isScrolled to true when the user has scrolled down
//     setIsScrolled(window.scrollY > 0);
//   };

//   // Attach the event listener when the component mounts
//   window.addEventListener('scroll', handleScroll);

//   // Detach the event listener when the component unmounts
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [isScrolled]);

  const [projectItems, setProjectItems] = useState([
    { id: 1, title: 'Payment Service (TrueRev)',bannerImage: require('../../assets/project/payment.svg'), description: `Engineered and implemented a high-performance payment microservice for a SaaS platform, integrating Stripe(Payment Gateway) with advanced security and payment distribution features. Leveraged 3D Secure authentication to enhance transaction security and customer trust, while incorporating split payment functionality to optimize revenue allocation among multiple stakeholders. This strategic development resulted in a 10% reduction in payment processing costs, significantly improving the platform's financial efficiency and user experience`,chips: ['Back-End Web Development', 'Python', 'Django', "RabbitMQ", 'Firebase' , 'MySQL', 'Distributed Systems','Stripe', 'kafka', 'Micro Servies'] },
    { id: 2, title: 'Automation Multipurpose Platform (Marc)',bannerImage: require('../../assets/project/marc.svg'), description: `Played a pivotal role in the development of a highly adaptable automation health and analytics platform. Efficiently managed and optimized over 10k+ engine configuration files, leading to precise assessments of system effectiveness and the identification of critical areas for enhancement by using Machine learning. Engineered an advanced URL resolution system for robust authorization by implementing a Trie data structure, significantly improving performance and security. Spearheaded the design and development of both the API gateway service and the authentication service. Resulting reduced manual effort by 80% in identifying and compiling monthly progress reports. Extracted data from logs database and generating trigger emails for critical issues, ensuring timely alerts and responses. `, chips: ['Micro Servies','React', 'Java', 'Python', 'Flask', 'SpringBoot', "Redis", 'MySQL', 'OracleDB', 'Docker','Kubernetes', 'Distributed Systems'] },
    { id: 2, title: 'E-commerce Site (IfashionUp)',bannerImage: require('../../assets/project/ecom.svg'), description: `Led the end-to-end development of the backend for a client's E-commerce platform on a microservices architecture distributed system, ensuring high scalability and availability. This comprehensive effort resulted in a 40% surge in online sales within the first quarter post-launch. The platform's improved design, functionality, and user experience played a crucial role in this success. The impact of this achievement was recognized with the prestigious "Code of the Month" award, highlighting the exceptional quality and effectiveness of the solution`,chips: ['Micro Servies', 'Python', 'Django', 'Firebase' , 'MySQL', 'MongoDB', 'Redis', 'EC2', 'S3', 'AWS','Docker', 'Stripe', 'Kafka', 'Elestic Search'] },
    { id: 2, title: 'Labotary Management (GenistaBio)',bannerImage: require('../../assets/project/lab.svg'), description: `Contributed to the Laboratory Management software by developing robust backend APIs for seamless integration with frontend functionality. Users upload samples collected by customers in PDF and XLS files, which are read to identify all samples and the rules that need to be applied. The backend then resolves all required tests for each sample, generates comprehensive reports, and sends them to users. The system features robust authentication with role-based permissions, ensuring secure access and management. These improvements reduced sample processing time by 37%, leading to a 16% increase in monthly revenue.`,chips: ['Back-End Web Development', 'Python', 'Django', "RabbitMQ", 'MySQL', 'Test Driven Development', 'Distributed Systems'] },
    { id: 2, title: 'Social Media (Viewed)',bannerImage: require('../../assets/project/viewed.svg'), description: `Built a highly engaging social media platform with an Instagram-like feed featuring posts in image, text, and video formats. Users can create unique lucky draw posts where multiple participants join and a random winner is selected. The platform allows users to follow an unlimited number of other users and offers extensive settings options for customization. Developed on top of a microservices event-driven architecture, the platform achieved rapid scalability and high performance. Within one month of launch, the platform attracted over 10k users and facilitated over 30k posts, demonstrating its widespread popularity and robust functionality.`,chips: ['Back-End Web Development', 'Python', 'Django', "RabbitMQ", 'Firebase' , 'MySQL', 'PostgreSQL', 'Test Driven Development', 'Distributed Systems'] },
    { id: 2, title: 'Project Management Software (FinoitPMS)',bannerImage: require('../../assets/project/finpms-2.svg'), description: `Developed an integrated, scalable platform on a microservices distributed architecture to manage employee attendance, efficiency, project health, invoices, revenue distribution, and security. Initially built for internal use, the platform's success led to its commercialization, contributing to 25% of the company's total revenue. The platform improved project health with a 15% reduction in project delays and an 18% increase in on-time completions. This highly successful project demonstrated significant positive impacts on both internal operations and the company's financial performance.`,chips: ['Back-End Web Development', 'Python', 'Django', 'PostgreSQL', 'Docker', 'AWS SQS', 'LDAP', 'Distributed Systems', 'Micro Servies'] },
  ]); 
  const [blogItems, setBlogItems] = useState([
    { id: 1, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },
    { id: 2, title: 'Neural Networks behind the Chat-Gpt',bannerImage: require('../../assets/images/Neural_Networks_Chat_gpt.svg'), description: `The neural network in ChatGPT is a type of machine learning model that relies on small mathematical functions called neurons. These neurons work together to process and understand complex patterns in the input data, enabling ChatGPT to generate coherent and contextually relevant text.`,chips: ['Tag C', 'Tag D'], redirect: 'localhost:3000/wdhd/wdewd/ewded' },
    { id: 3, title: 'Building a NLP model like Transformer from scratch',bannerImage: require('../../assets/images/nlp.svg'), description: ` The transformer architecture comprises an encoder-decoder structure. The encoder processes input sequences, and the decoder generates output sequences. Key components include self-attention mechanisms, feedforward networks, and layer normalization. A crucial innovation in transformers is the self-attention mechanism. It allows the model to weigh different parts of the input sequence differently, enabling effective handling of long-range dependencies.`, chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/wne/efef/efef' },
    { id: 4, title: `Large Scale Distributed Models and it's deployment`,bannerImage: require('../../assets/images/large_scale_model1.svg'), description: `Scaling and deploying large-scale distributed machine learning (ML) models efficiently involves several best practices:`, chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sd/edf/edfdef' },
    { id: 5, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },
    { id: 6, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },
  ]);
  return (
    
    <div style={pageStyle}>
      <div className='homepage'>
      <Element name="about-me" >
        <div className='homepage_content'>
          <div className="crowsel_wrapper">
          <p className='homepage_crowsel_text_static_text'> Hi there 👋</p>
            <div className='homepage_title_text' style={{ color: 'white' }}>
                <b>
                        <span1>
                            A System Design Geek<br />
                            5+ years of Industry Experience<br />
                            Built Large Scale Distributed System<br />
                            A Product Thinker <br />
                        </span1>
                </b>
        </div>
          </div>
            <div className='homepage_intro_text'>Driven Software Professional with a proven 5-year track record in developing microservices distributed web applications. A coding enthusiast with a passion for tackling real-world challenges. Currently pursuing a Master's in Computer Science, I'm eager to bring my expertise to an innovative internship where I can not only enhance my skills but also make a meaningful impact on cutting-edge projects.</div>
            <div className='homepage_symlinks'></div>
        </div>
        </Element>
        <div className='homepage_banner_img'>
            <img/>
        </div>
        <hr/>
        <div className='homepage_list_projects_title_text'>Work Experience</div>
        <Stepper/>
        <hr/>
        <Technologies/>
        <Element name="projects" >
        <div className='homepage_list_projects'>
        <div className='homepage_list_projects_cards'>
        <div className='homepage_list_projects_title_text'>Recent Projects</div>
        {projectItems.map((item) => (
            <HorizontalCard
            imageUrl = {item.bannerImage}
            title = {item.title}
            description={item.description}
            chips={item.chips}
            />
        ))}
        </div>
        </div>
        </Element>
        <hr/>
        <Element name="blogs">
        <div className='homepage_list_blogs'>
        <div className='homepage_list_blogs_cards'>
        <div className='homepage_list_blogs_title_text'>Recent Blogs</div>
        <div className='homepage_list_blogs_innner_wrapper'>
          {blogItems.map((item) => (
              <VerticalCard
              imageUrl = {item.bannerImage}
              title = {item.title}
              description={item.description}
              chips={item.chips}
              />
          ))}
        </div>
        </div>
        </div>
        <Pagination
        pages = {blogItems}
        selcted = {selcted}
        />
        </Element>
      </div>
    </div>
  );
};

export default HomePage;