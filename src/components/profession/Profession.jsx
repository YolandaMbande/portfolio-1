import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Building responsive web applications using PHP, Laravel, JavaScript, MySQL, and modern front-end technologies.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing secure APIs, managing databases, implementing business logic, and optimizing application performance.",
  },
  {
    id: 3,
    title: "Software Maintenance & Support",
    description:
      "Debugging production issues, implementing new features, maintaining existing systems, and collaborating within Agile development teams.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
              I develop modern web applications with a focus on clean code, responsive
              interfaces, and reliable backend systems. My goal is to build software
              that solves real problems and delivers a great user experience.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
              With experience in commercial software development, I enjoy turning ideas
              into scalable applications while continuously learning new technologies
              and improving my craft.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact Me
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
