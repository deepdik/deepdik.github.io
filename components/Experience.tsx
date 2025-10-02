'use client'
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer ML",
      company: "Inferneo",
      location: "Remote",
      period: "Aug 2023 - Aug 2025",
      type: "Volunteer, Master's Research",
      description: "Contributing to an open-source, high-performance inference server for large language models.",
      achievements: [
        "Designed custom CUDA kernels (SoftMax, matrix multiplication, convolution) leveraging warp-level primitives and memory coalescing, improving GPU utilisation by 35% over PyTorch defaults",
        "Implemented speculative decoding with draft models (DistilGPT2 + GPT-J-6B), achieving upto 1.8x speedup in throughput while maintaining target model accuracy",
        "Profiled model performance using Nsight Systems/Compute, identifying GPU bottlenecks and tuning execution for higher arithmetic intensity and SM occupancy utilization",
        "Mix precision KVCache strategy to support long-context in LLMs"
      ],
      technologies: ["CUDA", "PyTorch", "LLM", "GPU Programming", "Performance Optimization"],
      link: "https://github.com/inferneo",
      logo: "/logos/inferneo.png"
    },
    {
      title: "Software Engineer",
      company: "Oracle",
      location: "Remote",
      period: "May 2021 - Aug 2023",
      type: "Full-time",
      description: "Developed and maintained critical database systems and microservices for Oracle's cloud infrastructure.",
      achievements: [
        "Developed a Python-based graph algorithm to detect invalid objects and components in 100k+ Oracle Database logs daily, reducing customer service resolution time by 50% and reducing support costs",
        "Designed a microservice-powered debugging tool for cross-version DB issues, enabling 80% faster resolution across 20+ Oracle DB versions, enhancing engineering productivity",
        "Co-developed a distributed microservices platform managing 10K+ config files, enabling Automated System Health analytics. Led API Gateway and Auth service using Flask + SpringBoot, deployed on Kubernetes with Helm",
        "Deployed full-stack observability using Prometheus + Grafana monitoring 20+ metrics across services, including DB latency, API errors, and throughput",
        "Deployed and fully configured projects on cloud-based Kubernetes clusters with Helm, implementing auto-scaling, health checks, and rollout strategies for reliable, production-grade deployments",
        "Architected and implemented a robust CI/CD pipeline using Jenkins for a complex team project, streamlining deployment workflows to ensure reliable, automated, and rapid delivery across multiple environments"
      ],
      technologies: ["Python", "Spring Boot", "Kubernetes", "Docker", "Jenkins", "Prometheus", "Grafana", "Helm"],
      link: "https://oracle.com",
      logo: "/logos/oracle.png"
    },
    {
      title: "Software Engineer",
      company: "Finoit Inc",
      location: "India",
      period: "Jan 2020 - Apr 2021",
      type: "Full-time",
      description: "Led development of payment systems and B2B SaaS platforms with focus on scalability and performance.",
      achievements: [
        "Led and orchestrated the end-to-end development of payment microservice for B2B SaaS Platform in Django Rest API, Stripe, MySQL, and RabbitMQ with Stripe 3D Secure and split payment functionality, resulting in a 10% reduction in operating costs",
        "Developed an integrated platform to manage employee attendance, efficiency, project health, invoices, revenue distribution, and security. Achieved 15% fewer project delays and an 18% increase in revenue",
        "Built a scalable lab order and reporting system that automated end-to-end workflows for 100K+ samples/month, reducing processing time by 37% and boosting annual revenue by $12.6M",
        "Developed AWS Lambda function to process SNS events, enabling real-time data sync between platform databases and QuickBooks, reducing data discrepancies and improving operational efficiency",
        "Guided and mentored juniors, conducted thorough code reviews, and enhanced code quality"
      ],
      technologies: ["Django", "Stripe", "MySQL", "RabbitMQ", "AWS Lambda", "SNS", "QuickBooks API"],
      link: "https://finoit.com",
      logo: "/logos/finoit.png"
    },
    {
      title: "Software Engineer",
      company: "Fluper Ltd",
      location: "India",
      period: "Feb 2019 - Jan 2020",
      type: "Full-time",
      description: "Developed high-performance web applications and e-commerce platforms with focus on user experience and scalability.",
      achievements: [
        "Enhanced existing API performance by 300% using Async task management with RabbitMQ + Celery. Used caching mechanisms to reduce redundant computations and database queries",
        "Restructured existing project database tables and optimised queries, used Redis for caching, achieving up to a 50% improvement in ORM-heavy endpoints",
        "Collaborated to build an e-commerce platform built on microservice architecture, resulting in a 40% surge in online sales within the first quarter post-launch",
        "Developed a scalable social media platform for a startup with an Instagram-like feed, chatting, and lucky draw system using RabbitMQ, Celery, Twilio, Firebase(Chat), MySQL, PostgreSQL, EC2, S3, Redis, Stripe for subscription, attracting 10K+ users and 30K+ posts within the first month",
        "Developed a full-stack application similar to Yelp, enabling users to create map pins, rate tourist spots, and search popular nearby locations. Built with Django REST & MVC, Twilio, Angular, PostgreSQL (for geospatial queries), Google Maps, and Firebase, AWS service, OAuth 2.0 Integration"
      ],
      technologies: ["Django", "Angular", "PostgreSQL", "Redis", "RabbitMQ", "Celery", "AWS", "Firebase", "Twilio"],
      link: "https://fluper.com",
      logo: "/logos/fluper.png"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional career, showcasing impactful projects and technical achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <Building className="w-8 h-8 text-gray-600 dark:text-gray-400 hidden" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                </div>
                
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 lg:ml-4"
                  >
                    <span className="text-sm font-medium">Company Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 