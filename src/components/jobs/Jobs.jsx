import React from "react";
import "./jobs.css";
import ChristinaLeeResume from "../../assets/ChristinaLeeResume.pdf";
import { BiCheck } from "react-icons/bi";

const Jobs = () => {
  return (
    <div id="jobs">
      <h2>Professional Experience</h2>
      <div className="resume-btn">
        <a href={ChristinaLeeResume} download className="btn">
          Download Resume
        </a>
      </div>
      <div className="container jobs__container">
        <article className="job">
          <div className="job__head">
            <h3>Client Support Specialist</h3>
            <h4>Hustle</h4>
          </div>
          <ul className="job__list">
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                {" "}
                Provided technical support for clients using Zendesk responding
                to an average of 50 tickets on a daily basis.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Collaborated cross-functionally with R&D, client success, and
                other teams to implement client feedback and improve user
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Investigated and escalated 30+ bug reports to the engineering
                team for validation and contributed to delivery of fixes to
                maintain client satisfaction.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Authored and updated over 20 Help Site articles to document
                product updates, weekly releases, and industry-wide changes.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Delivered exceptional support during the 2022 midterm election
                to ensure smooth campaign operations.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF FIRST SECTION */}
        <article className="job">
          <div className="job__head">
            <h3>Software Engineering Intern</h3>
            <h4>BetterHelp</h4>
          </div>
          <ul className="job__list">
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                {" "}
                Collaborated with the engineering team to implement client-facing features, managing 10+ Jira cards to enhance the intake quiz and incorporate A/B test results using the LAMP stack (Linux, Apache, MySQL, PHP), Git, and Laravel.

              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
              Refactored legacy code to transition to Model-View-Controller (MVC) architecture, optimizing the feature for deleting messages between clients and therapists for improved maintainability and scalability.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
              Diagnosed and resolved bugs including dynamically rendering the correct currency for international users in the FAQ section, ensuring consistency with existing front-end code.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
              Developed and maintained integration tests and database migrations to ensure the robustness and reliability of new features and updates.
              </p>
            </li>
          </ul>
        </article>
        <article className="job">
          <div className="job__head">
            <h3>Case Supervisor</h3>
            <h4>SFCASA</h4>
          </div>
          <ul className="job__list">
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                {" "}
                Supervised caseload of 40-50 CASA volunteers serving youth in
                the foster care and juvenile justice systems.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Achieved 85% quarterly volunteer survey completion rates for
                grant writing and financial initiatives.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Championed implementation of Trauma-Informed Systems by
                facilitating monthly Anti-Racism staff discussions.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Contributed to 23% increase in volunteer retention by
                implementing programmatic improvements to address gaps in
                volunteer training and onboarding.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Conducted over 100 in-depth volunteer interviews to actively
                screen candidates for eligibility for the CASA program.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF SECOND SECTION */}
        <article className="job">
          <div className="job__head">
            <h3>Program Assistant</h3>
            <h4>SFCASA</h4>
          </div>
          <ul className="job__list">
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Managed weekly court filings, distributing documents to ensure
                compliance with Judicial Court requirements.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Established collaborative relationships with stakeholders to
                increase annual referral rate by 20%.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Developed partnerships with 10 businesses to offer community
                engagement opportunities for youth and volunteers.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Redesigned monthly volunteer newsletter resulting positive
                feedback from key stakeholders.
              </p>
            </li>
            <li>
              <BiCheck className="job__list-icon" />
              <p>
                Completed 40 hour volunteer training as a Court Appointed
                Special Advocate (CASA).
              </p>
            </li>
          </ul>
        </article>
        {/* END OF THIRD SECTION */}
      </div>
    </div>
  );
};

export default Jobs;
