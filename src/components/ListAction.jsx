import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

export default function ListAction() {
  return (
    <div className="section sec-style-dark sec-thematic-areas site-inner">
      <div className="wrap">
        <div className="content-sidebar-wrap">
          <main className="content" role="main" itemProp="mainContentOfPage">
            <article className="entry">
              <div className="entry-content" itemProp="text">
                <section className="bar-links">
                  <ul className="pill-links">
                    <li className="item create-item">
                      <a className="goto react-a-icon" href="#CreateFeature">
                        <div className="react-icon-style">
                          <FaPencilRuler />
                        </div>
                        <span className="title">Create</span>
                        <span className="text">
                          Easily Create Your Advertising Campaigns Across
                          Multiple Channels in Minutes
                        </span>
                      </a>
                    </li>
                    <li className="item manage-item">
                      <a className="goto react-a-icon" href="#ManageFeature">
                        <div className="react-icon-style">
                          <FaCalendarDays />
                        </div>
                        <span className="title">Manage</span>
                        <span className="text">
                          Manage all your advertising campaigns in one place
                        </span>
                      </a>
                    </li>
                    <li className="item analyze-item">
                      <a className="goto react-a-icon" href="#AnalyzeFeature">
                        <div className="react-icon-style">
                          <IoStatsChart />
                        </div>
                        <span className="title">Analyze</span>
                        <span className="text">
                          Analyze your campaigns and get actionable insights
                        </span>
                      </a>
                    </li>
                    <li className="item collaborate-item">
                      <a className="goto react-a-icon" href="#CollaborateFeature">
                        <div className="react-icon-style">
                          <IoPersonSharp />
                        </div>
                        <span className="title">Collaborate</span>
                        <span className="text">
                          Collaborate effectively with your teams and clients
                        </span>
                      </a>
                    </li>
                    <li className="item learn-item">
                      <a className="goto react-a-icon" href="#LearnFeature">
                        <div className="react-icon-style">
                          <FaBook />
                        </div>
                        <span className="title">Learn</span>
                        <span className="text">
                          Grow your ads skills with the AdEspresso University
                        </span>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>{" "}
              {/*/.entry-content*/}
            </article>{" "}
            {/*/.entry*/}
          </main>{" "}
          {/*/.content*/}
        </div>{" "}
        {/*/.content-sidebar-wrap*/}
      </div>{" "}
      {/* /.wrap */}
    </div>
  );
}
