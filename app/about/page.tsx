import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Scaled Flow',
  description: 'Learn about Scaled Flow\'s mission, values, and the team delivering expert technical services.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Scaled Flow</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re a team of experienced engineers passionate about building technology that drives business success.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to deliver enterprise-grade technical solutions to businesses of all sizes, Scaled Flow has grown from a small engineering team to a full-service technology partner serving clients across industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our name reflects our core belief: that great technology should scale effortlessly and flow seamlessly through your organization. We don&apos;t just write code—we build systems that power growth.
              </p>
              <p className="text-gray-600">
                Today, we partner with organizations ranging from ambitious startups to established enterprises, delivering the same engineering excellence and technical rigor to every project.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-700 mb-2">12+</div>
              <div className="text-xl text-primary-800">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with reliable, scalable technology solutions that drive efficiency and growth. We believe every organization deserves access to world-class engineering talent.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted technical partner for businesses building their future, known for our engineering excellence, reliability, and commitment to delivering results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Reliability',
                description: 'We build systems you can count on, with robust architecture and thorough testing.',
                icon: '🛡️',
              },
              {
                title: 'Excellence',
                description: 'We write clean, maintainable code and follow engineering best practices.',
                icon: '⭐',
              },
              {
                title: 'Innovation',
                description: 'We stay current with the latest technologies to deliver modern, effective solutions.',
                icon: '💡',
              },
              {
                title: 'Collaboration',
                description: 'We work as an extension of your team, communicating clearly and delivering on time.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experienced engineers dedicated to delivering great technology
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Leintz',
                role: 'Founder & Lead Engineer',
                bio: 'Full-stack developer with deep expertise in scalable systems and cloud architecture.',
              },
              {
                name: 'Alex Torres',
                role: 'Senior Developer',
                bio: 'Specialist in backend systems, APIs, and database optimization.',
              },
              {
                name: 'Maya Patel',
                role: 'DevOps Engineer',
                bio: 'Expert in cloud infrastructure, CI/CD pipelines, and system reliability.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
