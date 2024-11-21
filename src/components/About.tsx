import { Award, BookOpen, Coffee, Heart } from "lucide-react";

const stats = [
  { icon: <Award />, label: "Years Experience", value: "5+" },
  { icon: <BookOpen />, label: "Projects Completed", value: "50+" },
  { icon: <Coffee />, label: "Cups of Coffee", value: "1000+" },
  { icon: <Heart />, label: "Happy Clients", value: "30+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 ">
      <div className="py-10 bg-gray-50 dark:bg-gray-800 "></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="space-y-6 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hello! I am Chakroun Mohamed Amine, a dedicated Full Stack Developer
            specializing in delivering innovative solutions across desktop, web,
            and mobile platforms using technologies such as React.js, Node.js,
            Python, and ReactNative. My expertise spans designing and
            implementing diverse software architectures to create scalable and
            efficient applications. Alongside my professional development work.
          </p>
          <div className="py-2 bg-gray-50 dark:bg-gray-800 "></div>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I am also a private tutor in computer science, empowering high
            school students to enhance their programming skills and academic
            performance through personalized teaching approaches. This blend of
            technical proficiency and educational mentorship underscores my
            passion for creating impactful digital solutions and inspiring the
            next generation of tech innovators.
          </p>
        </div>
      </div>
      <div className="py-5 bg-gray-50 dark:bg-gray-800 "></div>
    </section>
  );
}
