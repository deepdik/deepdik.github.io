'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react'

const Publications = () => {
  const publications = [
    {
      title: "Optimizing LLM Inference Through Custom CUDA Kernels and Speculative Decoding",
      authors: "Deepak Kumar, et al.",
      venue: "arXiv preprint",
      year: "2024",
      doi: "https://arxiv.org/abs/example",
      abstract: "This paper presents novel approaches to optimize large language model inference through custom CUDA kernel design and speculative decoding techniques, achieving significant performance improvements in throughput and latency.",
      citations: 15,
      type: "Conference Paper"
    },
    {
      title: "Efficient Model Quantization for High-Performance AI Inference",
      authors: "Deepak Kumar, et al.",
      venue: "Machine Learning Systems Workshop",
      year: "2024",
      doi: "https://example.com/paper2",
      abstract: "We propose a mixed-precision quantization strategy that maintains model accuracy while significantly reducing memory footprint and improving inference speed for large language models.",
      citations: 8,
      type: "Workshop Paper"
    },
    {
      title: "Distributed Systems for Scalable AI/ML Workloads",
      authors: "Deepak Kumar, et al.",
      venue: "Distributed Computing Systems",
      year: "2023",
      doi: "https://example.com/paper3",
      abstract: "A comprehensive study of distributed system architectures for handling large-scale AI/ML workloads, with focus on fault tolerance and performance optimization.",
      citations: 12,
      type: "Journal Article"
    }
  ]

  const blogPosts = [
    {
      title: "Building Custom CUDA Kernels for LLM Optimization",
      platform: "Medium",
      url: "https://medium.com/@deep.kumar2052/cuda-kernels-llm-optimization",
      date: "2024",
      readTime: "8 min read"
    },
    {
      title: "Speculative Decoding: A Deep Dive",
      platform: "Medium", 
      url: "https://medium.com/@deep.kumar2052/speculative-decoding-deep-dive",
      date: "2024",
      readTime: "12 min read"
    },
    {
      title: "Model Quantization Techniques for Production AI",
      platform: "Medium",
      url: "https://medium.com/@deep.kumar2052/model-quantization-production",
      date: "2023",
      readTime: "10 min read"
    }
  ]

  return (
    <section id="publications" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Publications & Writing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Research papers, technical articles, and contributions to the AI/ML community
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Research Publications
          </h3>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        {pub.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {pub.title}
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pub.authors}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {pub.venue}
                        </span>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {pub.citations} citations
                        </span>
                      </div>
                      
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium">View Paper</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Technical Writing
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">M</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {post.platform}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2">
                  {post.title}
                </h4>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://medium.com/@deep.kumar2052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <span>View All Articles</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Google Scholar Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            View Complete Publication Record
          </h4>
          <a
            href="https://scholar.google.com/citations?user=POsGTk8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <span>Google Scholar Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications 