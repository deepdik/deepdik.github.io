'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, TrendingUp, Code2 } from 'lucide-react'

const Research = () => {
  const researchAreas = [
    {
      title: "LLM Inference Optimization",
      description: "Specialized in optimizing large language model inference through custom CUDA kernels, speculative decoding, and memory management techniques.",
      icon: Zap,
      metrics: ["35% GPU utilization improvement", "1.8x throughput speedup", "Custom SoftMax kernels"]
    },
    {
      title: "CUDA Kernel Development",
      description: "Designed and implemented custom CUDA kernels for matrix operations, leveraging warp-level primitives and memory coalescing for optimal performance.",
      icon: Cpu,
      metrics: ["Warp-level programming", "Memory coalescing", "Kernel fusion techniques"]
    },
    {
      title: "Model Quantization",
      description: "Research on model quantization techniques including FP16/BF16/INT8 precision for efficient model serving while maintaining accuracy.",
      icon: TrendingUp,
      metrics: ["Mixed precision training", "KV-cache optimization", "TensorRT integration"]
    },
    {
      title: "High-Performance Computing",
      description: "Focus on distributed systems, GPU profiling, and performance optimization for AI/ML workloads.",
      icon: Code2,
      metrics: ["Nsight Systems profiling", "SM occupancy optimization", "Arithmetic intensity tuning"]
    }
  ]

  const currentResearch = {
    title: "Inferneo: High-Performance LLM Inference Server",
    description: "Contributing to an open-source, high-performance inference server for large language models. Focus areas include:",
    contributions: [
      "Designed custom CUDA kernels (SoftMax, matrix multiplication, convolution) leveraging warp-level primitives and memory coalescing",
      "Implemented speculative decoding with draft models (DistilGPT2 + GPT-J-6B), achieving up to 1.8x speedup in throughput",
      "Profiled model performance using Nsight Systems/Compute, identifying GPU bottlenecks and tuning execution",
      "Mix precision KV-cache strategy to support long-context in LLMs"
    ]
  }

  return (
    <section id="research" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research Focus
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My research centers on advancing AI/ML systems through innovative optimization techniques, 
            with particular focus on LLM inference, GPU programming, and high-performance computing.
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Research Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {currentResearch.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentResearch.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentResearch.contributions.map((contribution, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                  <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {contribution}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Research Impact
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35%</div>
                <div className="text-blue-700 dark:text-blue-300">GPU Utilization Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.8x</div>
                <div className="text-blue-700 dark:text-blue-300">Throughput Speedup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100K+</div>
                <div className="text-blue-700 dark:text-blue-300">Daily Log Processing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Research 