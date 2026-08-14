const experiences = [
  {
    company: "Tshwane University of Technology",
    department: "Faculty of ICT",
    period: "July 2023 – December 2023",
    role: "Internet Security & Database Programming Tutor",
    points: [
      "Tutored students in Internet Security and Database Programming modules.",
      "Explained technical concepts through practical examples and one-on-one support.",
      "Assisted students with assignments, debugging, and understanding course material.",
      "Helped improve student confidence and academic performance through regular mentoring.",
    ],
  },
  {
    company: "Teambix (Pty) Ltd",
    department: "Software Development",
    period: "August 2024 – August 2025",
    role: "Software Developer Intern",
    points: [
      "Developed and maintained Laravel web applications.",
      "Implemented new features based on business requirements.",
      "Diagnosed and resolved production bugs.",
      "Collaborated with developers using Git and Agile workflows.",
    ],
  },
  {
    company: "Spacebar Solutions",
    department: "Software Development",
    period: "September 2025 – April 2026",
    role: "Software Developer",
    points: [
      "Developed web applications using PHP and Java.",
      "Maintained and optimized MySQL databases.",
      "Implemented new client features and system improvements.",
      "Worked closely with the team to deliver production-ready solutions.",
    ],
  },
];

const WorkProcess = () => {
  return (
    <section id="experience" className="ontent pt-[-5] pb-10">
      <h2 className="text-5xl font-bold text-center text-picto-primary">
        My Experience
      </h2>

      <p className="text-center text-gray-500 text-lg mt-4 mb-20">
        My journey as a software developer.
      </p>

      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-[34%] top-0 bottom-18 w-[2px] bg-gray-300"></div>

        {experiences.map((job, index) => (
          <div
            key={index}
            className="grid grid-cols-[30%_70%] gap-12 relative pb-24"
          >
            {/* Left Side */}
            <div className="text-right">
              <h3 className="text-l font-bold text-gray-800">
                {job.company}
              </h3>

              <p className="text-gray-500 mt-2">
                {job.department}
              </p>
            </div>

            {/* Right Side */}  
            <div className="relative pl-10">

              {/* Timeline Dot */}
              <p className="text-gray-500 text-sm">
                {job.period}
              </p>

              <div className="absolute -left-[7px] top-[38px] w-3.5 h-3.5 rounded-full bg-white border-[3px] border-picto-primary"></div>
              

              <h3 className="text-1xl font-bold text-picto-primary mt-1">
                {job.role}
              </h3>

              <ul className="mt-3 space-y-2 text-gray-600 text-sm list-disc pl-5">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;