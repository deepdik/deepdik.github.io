'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Cpu, Brain, Database, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "PolicyCheck AI",
      description: "Building a policy-aware AI model to evaluate civil project compliance against government regulations using Retrieval-Augmented Generation (RAG) and LLM fine-tuning. Enables automated compliance verification with rule-specific explanations and violation detection.",
      status: "Ongoing",
      technologies: ["LLM", "RAG", "Fine-tuning", "Compliance", "Government Regulations"],
      icon: Brain,
      github: "https://github.com/yourusername/policycheck-ai",
      demo: "https://policycheck-ai.demo.com",
      category: "AI/ML Research"
    },
    {
      title: "LLAMA Fine-Tuning & RAG",
      description: "Fine-tuned LLaMA models (7B/13B) using LoRA/PEFT for domain adaptation; integrated retrieval-augmented generation (RAG) pipelines with vector databases (FAISS), enabling low-latency domain-specific question answering.",
      status: "Completed",
      technologies: ["LLaMA", "LoRA", "PEFT", "RAG", "FAISS", "Fine-tuning"],
      icon: Brain,
      github: "https://github.com/yourusername/llama-rag",
      demo: null,
      category: "AI/ML Research"
    },
    {
      title: "LLM Inference Optimization",
      description: "Implemented quantization (FP16/INT8), KV-cache optimizations, and operator fusion to accelerate LLaMA-7B inference, reducing latency by ~35-40% while preserving output quality.",
      status: "Completed",
      technologies: ["LLM", "Quantization", "KV-cache", "Operator Fusion", "Performance"],
      icon: Cpu,
      github: "https://github.com/yourusername/llm-optimization",
      demo: null,
      category: "Performance Engineering"
    },
    {
      title: "CUDA Vectorization & Kernels",
      description: "Designed custom CUDA kernels for vectorized matrix operations (dot product, reduction, normalization) using warp-level primitives and memory coalescing, improving GPU throughput by 30% over baseline PyTorch ops.",
      status: "Completed",
      technologies: ["CUDA", "GPU Programming", "Matrix Operations", "Performance"],
      icon: Cpu,
      github: "https://github.com/yourusername/cuda-kernels",
      demo: null,
      category: "GPU Programming"
    },
    {
      title: "Distributed Microservices Platform",
      description: "Co-developed a distributed microservices platform managing 10K+ config files, enabling Automated System Health analytics. Led API Gateway and Auth service using Flask + SpringBoot, deployed on Kubernetes with Helm.",
      status: "Completed",
      technologies: ["Microservices", "Kubernetes", "Flask", "Spring Boot", "Helm"],
      icon: Database,
      github: null,
      demo: null,
      category: "Distributed Systems"
    },
    {
      title: "E-commerce Platform",
      description: "Built an e-commerce platform on microservice architecture, resulting in a 40% surge in online sales within the first quarter post-launch. Integrated payment processing, inventory management, and user analytics.",
      status: "Completed",
      technologies: ["Microservices", "E-commerce", "Payment Processing", "Analytics"],
      icon: Globe,
      github: null,
      demo: null,
      category: "Web Development"
    }
  ]

  const categories = ["All", "AI/ML Research", "Performance Engineering", "GPU Programming", "Distributed Systems", "Web Development"]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent research projects, technical implementations, and contributions to the AI/ML community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                    <project.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Ongoing' 
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Research Impact Summary
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">35%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">GPU Utilization Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1.8x</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Throughput Speedup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">GPU Throughput Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100K+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Daily Log Processing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 