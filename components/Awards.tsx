'use client'

import { Award, Trophy, Star, Medal } from 'lucide-react'

const Awards = () => {
  const awards = [
    {
      title: "Outstanding Research Contribution",
      organization: "Illinois Institute of Technology",
      year: "2024",
      description: "Recognized for exceptional contributions to LLM inference optimization research and open-source development.",
      icon: Trophy,
      category: "Research Excellence"
    },
    {
      title: "Best Technical Paper Award",
      organization: "Machine Learning Systems Conference",
      year: "2024",
      description: "Awarded for the paper on 'Optimizing LLM Inference Through Custom CUDA Kernels and Speculative Decoding'.",
      icon: Award,
      category: "Academic Achievement"
    },
    {
      title: "Performance Excellence Award",
      organization: "Oracle Corporation",
      year: "2023",
      description: "Recognized for outstanding performance in developing critical database systems and reducing customer service resolution time by 50%.",
      icon: Star,
      category: "Professional Excellence"
    },
    {
      title: "Innovation Award",
      organization: "Finoit Inc",
      year: "2021",
      description: "Awarded for developing a scalable lab order system that boosted annual revenue by $12.6M and improved processing efficiency by 37%.",
      icon: Medal,
      category: "Innovation"
    },
    {
      title: "Dean's List",
      organization: "Illinois Institute of Technology",
      year: "2023-2024",
      description: "Consistently maintained GPA of 3.72/4.0 and demonstrated academic excellence in Computer Science program.",
      icon: Award,
      category: "Academic Excellence"
    },
    {
      title: "Open Source Contributor Award",
      organization: "Inferneo Project",
      year: "2024",
      description: "Recognized for significant contributions to open-source LLM inference optimization and community development.",
      icon: Trophy,
      category: "Community Contribution"
    }
  ]

  return (
    <section id="awards" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for outstanding contributions to research, innovation, and professional excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                  <award.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                    {award.organization}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium mb-3">
                  {award.category}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">{award.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Additional Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">35%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">GPU Performance Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">1.8x</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Throughput Speedup Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">$12.6M</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Revenue Impact Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">50%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Service Resolution Time Reduced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards