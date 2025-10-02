'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Illinois Institute of Technology, Chicago, IL",
      period: "Aug 2023 - May 2025",
      gpa: "GPA: 3.72/4.0",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology",
      school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow, India",
      period: "2015 - 2019",
      gpa: "",
      icon: GraduationCap
    }
  ]

  const highlights = [
    "5+ years of experience in AI/ML and software engineering",
    "Specialized in LLM inference optimization and CUDA programming",
    "Contributor to open-source projects like Inferneo",
    "Experience with distributed systems and microservices architecture"
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate researcher and engineer focused on advancing AI/ML systems through innovative optimization techniques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Background
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">United States</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">5+ Years in Software Engineering & AI/ML</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Research Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">LLM Inference Optimization, CUDA Kernels, Model Quantization</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Highlights</h4>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <edu.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {edu.school}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{edu.period}</span>
                        {edu.gpa && <span className="font-medium text-primary-600 dark:text-primary-400">{edu.gpa}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Research Interests</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "LLM Inference Optimization",
                  "Custom CUDA Kernels",
                  "Model Quantization",
                  "Distributed Systems",
                  "High-Performance Computing",
                  "Machine Learning Systems",
                  "GPU Programming",
                  "AI/ML Infrastructure"
                ].map((interest, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 