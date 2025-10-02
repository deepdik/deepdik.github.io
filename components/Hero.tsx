'use client'

import { Download, Mail, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Hi, I'm{' '}
              <span className="text-gray-800 dark:text-gray-200">Deepak Kumar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              AI/ML Researcher & Software Engineer
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Master's student at Illinois Institute of Technology specializing in LLM inference optimization, 
              custom CUDA kernels, and high-performance computing. Passionate about pushing the boundaries 
              of AI/ML systems through innovative research and engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded font-medium transition-colors duration-200"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded font-medium transition-all duration-200"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero