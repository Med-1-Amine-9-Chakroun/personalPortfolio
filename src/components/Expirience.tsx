import React from "react";

export default function Experience() {
  const educationData = [
    {
      year: "2022 – 2025",
      title: "Engineering Cycle in Computer Science",
      description: "Institut Supérieur Privé d’Ingénierie de Monastir - ESPRIM",
    },
    {
      year: "2019 – 2022",
      title: "Bachelor’s Degree in Management Informatics",
      description:
        "Institut Supérieur de Gestion de Sousse - Université de Sousse",
    },
    {
      year: "2015 – 2018",
      title: "Baccalauréat in Computer Science",
      description: "High School of Sayada",
    },
  ];

  const experienceData = [
    {
      year: "July 2025 – Present",
      title: "Backend Software Engineer | Anypli",
      description: (
        <>
          Developing and maintaining scalable backend APIs using{" "}
          <span className="font-bold">Nest.js</span>,{" "}
          <span className="font-bold">TypeScript</span>, and{" "}
          <span className="font-bold">MySQL</span>. Implementing caching with{" "}
          <span className="font-bold">Redis</span> and concurrency control using{" "}
          <span className="font-bold">Mutex</span> to ensure data integrity and
          performance. Leveraging <span className="font-bold">Docker</span> for
          containerized environments and using{" "}
          <span className="font-bold">Bitbucket</span> and{" "}
          <span className="font-bold">Jira</span> for version control and project
          management. Committed to writing clean, maintainable code and following
          software engineering best practices.
        </>
      ),
    },
    {
      year: "February 2025 – June 2025",
      title: "Final-Year Internship | Anypli",
      description: (
        <>
          Contributed to <span className="font-bold">DRIVE-TN</span>, an online
          car sales platform with 3D vehicle visualization. Developed backend APIs
          with <span className="font-bold">Nest.js</span> and{" "}
          <span className="font-bold">TypeScript</span>, and frontend components
          with <span className="font-bold">React.js</span>. Managed data with{" "}
          <span className="font-bold">MySQL</span> and coordinated development
          using <span className="font-bold">Bitbucket</span> and{" "}
          <span className="font-bold">Jira</span>. Implemented real-time features
          using <span className="font-bold">RTK Query</span>,{" "}
          <span className="font-bold">RabbitMQ</span>, and{" "}
          <span className="font-bold">WebSockets</span>, and leveraged{" "}
          <span className="font-bold">Python</span> with{" "}
          <span className="font-bold">Hugging Face</span> to generate 3D vehicle
          models using advanced AI techniques.
        </>
      ),
    },
    {
      year: "July 2024 – September 2024",
      title: "Technician Internship | Mobelite Tunisie",
      description: (
        <>
          Developed a task management web application (<span className="font-bold">AGTIA</span>) using the{" "}
          <span className="font-bold">MERN stack</span> (
          <span className="font-bold">MongoDB</span>,{" "}
          <span className="font-bold">Express.js</span>,{" "}
          <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Node.js</span>) with a{" "}
          <span className="font-bold">microservices</span> architecture focused
          on modularity and data efficiency.
        </>
      ),
    },
    {
      year: "September 2023 – November 2023",
      title: "Freelance | Seamaster Project",
      description: (
        <>
          Designed a desktop application for trawler management and invoicing
          using <span className="font-bold">Python</span> and{" "}
          <span className="font-bold">SQLite3</span>, reducing processing time by
          60%.
        </>
      ),
    },
    {
      year: "July 2023 – August 2023",
      title: "Summer Internship | PSZ Tunisie",
      description: (
        <>
          Contributed to the development of features for a web application using{" "}
          <span className="font-bold">C# .NET</span> and{" "}
          <span className="font-bold">Angular</span>, participating in team
          meetings and code reviews.
        </>
      ),
    },
    {
      year: "March 2022 – June 2022",
      title: "Final-Year Internship | Infolib",
      description: (
        <>
          Developed the <span className="font-bold">'RAPIDO'</span> application
          for delivery management using <span className="font-bold">Python</span>{" "}
          and <span className="font-bold">Flutter</span>, significantly reducing
          order processing time.
        </>
      ),
    },
    {
      year: "2018 – 2024",
      title: "Private Tutoring",
      description: (
        <>
          Taught computer science to high school students with a personalized
          approach, resulting in improved performance for 65% of students.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {edu.year}
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {exp.year}
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
