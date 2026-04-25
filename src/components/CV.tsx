"use client";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Button */}
      <div className="print:hidden fixed bottom-8 right-8 z-50">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-black text-white rounded font-medium shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-sm"
        >
          ⬇ Download PDF
        </button>
      </div>

      {/* CV */}
      <div
        id="cv-content"
        className="max-w-[210mm] mx-auto bg-white text-black shadow-xl my-8 print:shadow-none print:my-0"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className="px-9 py-5 print:px-8 print:py-4">
          {/* ============ HEADER ============ */}
          <div className="text-center pb-2.5 mb-3 border-b-[1.5px] border-black">
            <h1 className="text-[20px] font-bold uppercase tracking-[3px] leading-tight">
              Ahmed El Naggar
            </h1>
            <p className="text-[11.5px] mt-0.5 tracking-[1px]">
              Front-End Developer
            </p>
            <p className="text-[10px] mt-1.5 text-gray-700">
              Prague, Czech Republic &nbsp;·&nbsp;
              <a href="tel:+42073053744" className="hover:underline">
                +420 730 53 744
              </a>
              &nbsp;·&nbsp;
              <a
                href="mailto:Ahmeedalaa630@gmail.com"
                className="hover:underline"
              >
                Ahmeedalaa630@gmail.com
              </a>
            </p>
            <p className="text-[10px] text-gray-700">
              <a
                href="https://github.com/ahmedaaaa111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://www.linkedin.com/in/AhmedElnaggar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://my-portfolio-313m4x5yu-ahmedaaaa111s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Portfolio
              </a>
            </p>
          </div>

          {/* ============ SUMMARY ============ */}
          <section className="mb-2.5">
            <SectionTitle>Summary</SectionTitle>
            <p className="text-[10px] leading-[1.5] text-justify">
              Front-End Developer with a BSc in Informatics and hands-on
              experience building responsive web applications using React,
              Next.js, TypeScript, and Tailwind CSS. I enjoy turning ideas and
              designs into clean, user-friendly interfaces and improving website
              performance across desktop and mobile devices. I have also worked
              with APIs, animations, and modern frontend tools, and I am
              currently looking for a junior frontend role where I can continue
              learning and contribute to real projects.
            </p>
          </section>

          {/* ============ SKILLS ============ */}
          <section className="mb-2.5">
            <SectionTitle>Technical Skills</SectionTitle>
            <table className="text-[10px] w-full leading-[1.55]">
              <tbody>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap w-[110px]">
                    Languages:
                  </td>
                  <td className="py-[1px]">
                    JavaScript (ES6+), TypeScript, HTML5, CSS3
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    Frameworks:
                  </td>
                  <td className="py-[1px]">React.js, Next.js</td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    Styling:
                  </td>
                  <td className="py-[1px]">
                    Tailwind CSS, Bootstrap, CSS Modules
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    Animation & 3D:
                  </td>
                  <td className="py-[1px]">
                    GSAP, Framer Motion, Three.js, CSS Animations
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    APIs & Data:
                  </td>
                  <td className="py-[1px]">
                    REST APIs, Axios, Fetch API, JSON
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    Tools:
                  </td>
                  <td className="py-[1px]">
                    Git, GitHub, VS Code, Chrome DevTools, Vercel, Postman
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-3 py-[1px] align-top whitespace-nowrap">
                    Methodologies:
                  </td>
                  <td className="py-[1px]">
                    Responsive Design, Mobile-First Design, Cross-Browser Testing
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ============ PROJECTS ============ */}
          <section className="mb-2.5">
            <SectionTitle>Projects</SectionTitle>

            {/* Project 1 — Adasa Blog */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Adasa Blog</B>
                  <span className="text-gray-600">
                    {" — React.js · JavaScript · CSS · GSAP"}
                  </span>
                </p>
                <p className="text-[9.5px] whitespace-nowrap">
                  <a
                    href="https://tinyurl.com/adasa-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live
                  </a>
                  {" · "}
                  <a
                    href="https://github.com/ahmedaaaa111/adasa-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Built a responsive blog website using React and CSS with smooth
                  scrolling animations using GSAP
                </li>
                <li>
                  Created reusable components to keep the code organized and
                  easier to maintain
                </li>
                <li>
                  Improved mobile responsiveness and used semantic HTML for
                  better structure and accessibility
                </li>
              </ul>
            </div>

            {/* Project 2 — Portfolio */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Developer Portfolio</B>
                  <span className="text-gray-600">
                    {" — Next.js · TypeScript · Three.js · Framer Motion"}
                  </span>
                </p>
                <p className="text-[9.5px] whitespace-nowrap">
                  <a
                    href="https://your-portfolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live
                  </a>
                  {" · "}
                  <a
                    href="https://github.com/ahmedaaaa111/my-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Developed a personal portfolio using Next.js, TypeScript,
                  Three.js, and Framer Motion to showcase projects and frontend
                  skills
                </li>
                <li>
                  Added interactive UI features such as animations, a custom
                  cursor, and responsive dark-themed styling
                </li>
                <li>
                  Focused on performance by optimizing assets, lazy loading
                  components, and improving page speed
                </li>
              </ul>
            </div>

            {/* Project 3 — Social Media */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Social Media Platform</B>
                  <span className="text-gray-600">
                    {" — React.js · TypeScript · Tailwind CSS · REST API"}
                  </span>
                </p>
                <p className="text-[9.5px]">In Development</p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Currently building a social media web app with authentication,
                  posts, comments, and user profile features
                </li>
                <li>
                  Using React, TypeScript, Tailwind CSS, and REST APIs to create
                  a responsive and clean user interface
                </li>
              </ul>
            </div>
          </section>

          {/* ============ EXPERIENCE ============ */}
          <section className="mb-2.5">
            <SectionTitle>Experience</SectionTitle>

            {/* Job 1 */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Freelance Front-End Developer</B>
                  <span className="text-gray-600">
                    {" — Self-employed, Prague"}
                  </span>
                </p>
                <span className="text-[10px]">Oct 2025 – Present</span>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Built responsive websites and web interfaces for clients using
                  React, TypeScript, and Tailwind CSS
                </li>
                <li>
                  Turned design ideas and requirements into functional and
                  user-friendly pages
                </li>
                <li>
                  Improved performance using techniques such as lazy loading,
                  code splitting, and image optimization
                </li>
                <li>
                  Used Git, GitHub, and Vercel to manage code, deployments, and
                  project updates
                </li>
                <li>
                  Tested websites across different browsers and screen sizes to
                  ensure consistent behavior
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Linguistic QA Tester</B>
                  <span className="text-gray-600">
                    {" — TransPerfect (Amazon CJQA), Prague"}
                  </span>
                </p>
                <span className="text-[10px]">Feb 2026 – Present</span>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Reviewed content for language quality, formatting issues, and
                  overall clarity
                </li>
                <li>
                  Reported bugs and inconsistencies using structured QA
                  processes
                </li>
                <li>
                  Worked with international teams to support accurate and
                  culturally appropriate localized content
                </li>
              </ul>
            </div>
          </section>

          {/* ============ EDUCATION ============ */}
          <section className="mb-2.5">
            <SectionTitle>Education</SectionTitle>
            <div className="flex justify-between items-baseline">
              <p className="text-[10px]">
                <B>BSc in Informatics</B>
                <span className="text-gray-600">
                  {" — Czech University of Life Sciences Prague"}
                </span>
              </p>
              <span className="text-[10px]">2022 – 2025</span>
            </div>
            <p className="text-[10px] leading-[1.5] mt-0.5 ml-3.5">
              <B>Thesis:</B> Impact of IT on Economic Growth &nbsp;·&nbsp;
              <B>Coursework:</B> Frontend Development, Web Technologies,
              Databases, Software Engineering
            </p>
          </section>

          {/* ============ CERTIFICATIONS & LANGUAGES ============ */}
          <section>
            <SectionTitle>Certifications & Languages</SectionTitle>
            <div className="grid grid-cols-2 gap-x-8">
              {/* Certifications */}
              <div>
                <table className="text-[10px] leading-[1.6]">
                  <tbody>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>Responsive Web Design</B>
                      </td>
                      <td className="py-[1px] text-gray-500">freeCodeCamp</td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>JavaScript Algorithms</B>
                      </td>
                      <td className="py-[1px] text-gray-500">freeCodeCamp</td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>Frontend Libraries</B>
                      </td>
                      <td className="py-[1px] text-gray-500">freeCodeCamp</td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>Git & GitHub</B>
                      </td>
                      <td className="py-[1px] text-gray-500">Coursera</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Languages */}
              <div>
                <table className="text-[10px] leading-[1.6]">
                  <tbody>
                    <tr>
                      <td className="pr-3 py-[1px]">
                        <B>Arabic</B>
                      </td>
                      <td className="py-[1px]">Native</td>
                    </tr>
                    <tr>
                      <td className="pr-3 py-[1px]">
                        <B>English</B>
                      </td>
                      <td className="py-[1px]">Fluent</td>
                    </tr>
                    <tr>
                      <td className="pr-3 py-[1px]">
                        <B>Czech</B>
                      </td>
                      <td className="py-[1px]">Basic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

/* ============ HELPERS ============ */

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-[10px] font-bold uppercase tracking-[2px] mb-1.5 pb-[2px]"
    style={{ borderBottom: "1px solid #000" }}
  >
    {children}
  </h2>
);

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);

export default CV;