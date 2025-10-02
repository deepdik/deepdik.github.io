'use client'

import { Cpu, Code2, Database, Cloud, Brain } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Go", level: 75 }
      ]
    },
    {
      title: "AI/ML & LLM",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "CUDA Programming", level: 90 },
        { name: "LLM Inference", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Hugging Face", level: 90 },
        { name: "Model Quantization", level: 85 },
        { name: "RAG Systems", level: 85 },
        { name: "Fine-tuning", level: 80 }
      ]
    },
    {
      title: "GPU & Performance",
      icon: Cpu,
      skills: [
        { name: "CUDA Kernels", level: 90 },
        { name: "TensorRT", level: 85 },
        { name: "vLLM", level: 85 },
        { name: "FlashAttention", level: 80 },
        { name: "GPU Profiling", level: 85 },
        { name: "Memory Optimization", level: 90 }
      ]
    },
    {
      title: "Backend & Frameworks",
      icon: Code2,
      skills: [
        { name: "Django", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Flask", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 85 },
        { name: "AWS", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Docker", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: [
        { name: "CI/CD", level: 85 },
        { name: "Jenkins", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "Prometheus", level: 80 },
        { name: "Grafana", level: 75 },
        { name: "Kafka", level: 80 },
        { name: "RabbitMQ", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across AI/ML, software engineering, and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-2">
                      <div
                        className="bg-gray-600 dark:bg-gray-400 h-2 rounded"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Additional Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "System Design",
                items: ["High-Level Design", "Low-Level Design", "Microservices", "Event-Driven Architecture"]
              },
              {
                title: "Performance Engineering",
                items: ["GPU Profiling", "Memory Optimization", "Latency Optimization", "Throughput Optimization"]
              },
              {
                title: "Research & Development",
                items: ["Algorithm Design", "Performance Analysis", "Research Publication", "Technical Writing"]
              },
              {
                title: "Leadership",
                items: ["Technical Leadership", "Mentoring", "Code Reviews", "Project Management"]
              }
            ].map((expertise, index) => (
              <div key={index} className="card p-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {expertise.title}
                </h4>
                <ul className="space-y-2">
                  {expertise.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Certifications & Training
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Certified Solutions Architect",
              "Kubernetes Administrator (CKA)",
              "NVIDIA Deep Learning Institute",
              "CUDA Programming Certification"
            ].map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills