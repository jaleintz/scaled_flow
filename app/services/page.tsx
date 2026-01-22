import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Scaled Flow',
  description: 'Explore Scaled Flow\'s technical services including custom development, cloud infrastructure, DevOps, and more.',
}

const services = [
  {
    title: 'Custom Software Development',
    description: 'Full-stack application development tailored to your specific business needs.',
    features: [
      'Web and mobile application development',
      'API design and development',
      'Database architecture and optimization',
      'Third-party integrations',
    ],
    icon: '💻',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Design, deploy, and manage scalable cloud environments on AWS, Azure, or GCP.',
    features: [
      'Cloud architecture design',
      'Migration and deployment',
      'Auto-scaling and load balancing',
      'Cost optimization',
    ],
    icon: '☁️',
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with modern DevOps practices.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as code',
      'Containerization with Docker and Kubernetes',
      'Automated testing and deployment',
    ],
    icon: '⚙️',
  },
  {
    title: 'System Architecture',
    description: 'Design robust, scalable systems that handle growth without breaking.',
    features: [
      'Microservices architecture',
      'Event-driven systems',
      'High-availability design',
      'Performance optimization',
    ],
    icon: '🏗️',
  },
  {
    title: 'Data Engineering',
    description: 'Build data pipelines and analytics infrastructure to power decision-making.',
    features: [
      'ETL pipeline development',
      'Data warehouse design',
      'Real-time data streaming',
      'Business intelligence dashboards',
    ],
    icon: '📊',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing technical support to keep your systems running smoothly.',
    features: [
      'Application monitoring and alerting',
      'Bug fixes and patches',
      'Performance tuning',
      'Security updates and audits',
    ],
    icon: '🛡️',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            End-to-end technical solutions built to solve your unique challenges and scale with your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A proven methodology that delivers consistent results
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', description: 'Understand your requirements, existing systems, and technical goals' },
              { step: '02', title: 'Architect', description: 'Design the right solution with the right technology stack' },
              { step: '03', title: 'Build', description: 'Develop iteratively with regular demos and feedback cycles' },
              { step: '04', title: 'Deploy', description: 'Launch with confidence using automated testing and monitoring' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-100 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and find the right technical solution.
          </p>
          <Link
            href="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
