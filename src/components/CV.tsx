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
            <h1 className="text-[20px] font-bold uppercase tracking-[4px] leading-tight">
              Ahmed El Naggar
            </h1>
            <p className="text-[11.5px] mt-0.5 tracking-[1.5px]">
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
                github.com/ahmedaaaa111
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://www.linkedin.com/in/AhmedElnaggar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/AhmedElnaggar
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://your-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-bold"
              >
                your-portfolio.vercel.app ↗
              </a>
            </p>
          </div>

          {/* ============ SUMMARY ============ */}
          <section className="mb-2.5">
            <SectionTitle>Summary</SectionTitle>
            <p className="text-[10px] leading-[1.5] text-justify">
              Front-End Developer with a BSc in Informatics and 6+ months of
              freelance experience delivering 5+ responsive web applications.
              Proficient in React, Next.js, TypeScript, and Tailwind CSS. Achieved
              40% faster page loads through performance optimization and 95+
              Lighthouse scores. Experienced with 3D web (Three.js), animation
              libraries (GSAP, Framer Motion), and RESTful API integration.
              Multilingual professional (Arabic, English, Czech) bringing
              cross-cultural perspective to international teams.
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
                  <td className="py-[1px]">React.js, Next.js 14</td>
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
                    RESTful APIs, Axios, Fetch API, JSON
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
                    Responsive Design, Mobile-First, Agile, Cross-Browser Testing
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
                  <span className="italic text-gray-600">
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
                    Live ↗
                  </a>
                  {" · "}
                  <a
                    href="https://github.com/ahmedaaaa111/adasa-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub ↗
                  </a>
                </p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Built a responsive blog platform with dynamic content rendering
                  and GSAP scroll animations, serving 200+ monthly visitors
                </li>
                <li>
                  Created 10+ reusable React components with clean architecture,
                  reducing future dev time by 35%
                </li>
                <li>
                  Implemented SEO-friendly semantic HTML and mobile-first design
                  for cross-browser consistency
                </li>
              </ul>
            </div>

            {/* Project 2 — Portfolio */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Developer Portfolio</B>
                  <span className="italic text-gray-600">
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
                    Live ↗
                  </a>
                  {" · "}
                  <a
                    href="https://github.com/ahmedaaaa111/my-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub ↗
                  </a>
                </p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Built an interactive 3D portfolio with Next.js 14, Three.js, and
                  15+ Framer Motion animations, scoring 98 on Lighthouse
                </li>
                <li>
                  Implemented particle effects, custom cursor, auto-typing, and
                  fully responsive dark-themed design
                </li>
                <li>
                  Optimized asset loading with lazy loading and code splitting,
                  achieving sub-2-second load times
                </li>
              </ul>
            </div>

            {/* Project 3 — Social Media */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Social Media Platform</B>
                  <span className="italic text-gray-600">
                    {" — React.js · TypeScript · Tailwind CSS · REST API"}
                  </span>
                </p>
                <p className="text-[9.5px] italic">In Development — 80%</p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Building a full-stack social app with JWT auth, CRUD
                  posts/comments, user profiles, and REST API integration
                </li>
                <li>
                  Designing a fully responsive UI with Tailwind CSS following
                  atomic design principles
                </li>
              </ul>
            </div>

            {/* Project 4 — Weather Dashboard */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Weather Dashboard</B>
                  <span className="italic text-gray-600">
                    {" — React.js · Tailwind CSS · REST API"}
                  </span>
                </p>
                <p className="text-[9.5px] whitespace-nowrap">
                  <a href="#" className="hover:underline">
                    Live ↗
                  </a>
                  {" · "}
                  <a href="#" className="hover:underline">
                    GitHub ↗
                  </a>
                </p>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Built a real-time weather app consuming OpenWeatherMap API with
                  location search and 5-day forecasts
                </li>
                <li>
                  Added local storage caching to reduce API calls by 60% and
                  dynamic theming based on conditions
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
                  <span className="italic text-gray-600">
                    {" — Self-employed, Prague"}
                  </span>
                </p>
                <span className="text-[10px]">Oct 2025 – Present</span>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Delivered 5+ client projects using React, TypeScript, and
                  Tailwind CSS with 100% on-time delivery rate
                </li>
                <li>
                  Reduced page load times by 40% via code splitting, lazy loading,
                  and image optimization
                </li>
                <li>
                  Translated UI/UX mockups into pixel-perfect responsive websites
                  with 95+ Lighthouse scores
                </li>
                <li>
                  Managed full project lifecycles with Git/GitHub and CI/CD
                  deployment to Vercel
                </li>
                <li>
                  Ensured cross-browser compatibility across Chrome, Firefox,
                  Safari, and Edge
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px]">
                  <B>Linguistic QA Tester</B>
                  <span className="italic text-gray-600">
                    {" — TransPerfect (Amazon CJQA), Prague"}
                  </span>
                </p>
                <span className="text-[10px]">Feb 2026 – Present</span>
              </div>
              <ul className="text-[10px] ml-3.5 list-disc leading-[1.5] mt-0.5">
                <li>
                  Identified and documented 50+ content bugs using structured QA
                  processes, improving quality by 30%
                </li>
                <li>
                  Collaborated with international teams across 3 time zones to
                  deliver localized content
                </li>
                <li>
                  Ensured content accuracy, clarity, and cultural appropriateness
                  per global standards
                </li>
              </ul>
            </div>
          </section>

          {/* ============ EDUCATION ============ */}
          <section className="mb-2.5">
            <SectionTitle>Education</SectionTitle>
            <div className="flex justify-between items-baseline">
              <p className="text-[10px]">
                <B>BSc Informatics</B>
                <span className="italic text-gray-600">
                  {" — Czech University of Life Sciences Prague"}
                </span>
              </p>
              <span className="text-[10px]">2022 – 2025</span>
            </div>
            <p className="text-[10px] leading-[1.5] mt-0.5 ml-3.5">
              <B>Thesis:</B> Impact of IT on Economic Growth &nbsp;·&nbsp;
              <B>Coursework:</B> Frontend Dev, Web Technologies, Databases,
              Software Engineering
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
                      <td className="py-[1px] italic text-gray-500">
                        freeCodeCamp
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>JavaScript Algorithms</B>
                      </td>
                      <td className="py-[1px] italic text-gray-500">
                        freeCodeCamp
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>Frontend Libraries</B>
                      </td>
                      <td className="py-[1px] italic text-gray-500">
                        freeCodeCamp
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-2 py-[1px]">
                        <B>Git & GitHub</B>
                      </td>
                      <td className="py-[1px] italic text-gray-500">
                        Coursera
                      </td>
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
    className="text-[10px] font-bold uppercase tracking-[2.5px] mb-1.5 pb-[2px]"
    style={{ borderBottom: "1px solid #000" }}
  >
    {children}
  </h2>
);

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);

export default CV;