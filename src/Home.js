import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Say hello to NeuroBank!</h1>
        <p>Your personal AI financial assistant.</p>
      </section>

      <section className="features">
        <table>
          {/* Feature cards */}
          <tr>

            <th>
              <div className="feature">
                <div className="feature-icon"></div>
                <h3>What is NeuroBank?</h3>
                <p>
                NeuroBank is an innovative and inclusive financial AI assistant,
                  <br></br>
                  specifically designed to cater to the needs of minorities. With
                  a<br></br>
                  strong focus on personalization and cultural sensitivity, NeuroBank
                  <br></br>
                  serves as a powerful tool providing essential financial guidance
                  and
                  <br></br>
                  support to individuals from diverse backgrounds. As a virtual
                  <br></br>
                  assistant, Neuro leverages advanced artificial intelligence
                  <br></br>
                  algorithms and data analytics to gain a deep understanding of
                  the
                  <br></br>
                  unique financial challenges faced by minorities. This allows
                  NeuroBank to
                  <br></br>
                  offer tailored and relevant solutions to enhance their overall
                  <br></br>
                  financial well-being.
                </p>
              </div>
            </th>

            <th>
              <div>
                <img
                  id="picChange"
                  src="https://www.apaservices.org/images/title-chatbot-patient-support_tcm9-295956.jpg"
                ></img>
              </div>
            </th>
          </tr>

          <tr>
            <td>
              <div>
                <img src="https://img.freepik.com/premium-vector/finance-concept-with-character-situation-man-brainstorming-generates-new-ideas-development-financial-wealth-making-money-vector-illustration-with-people-scene-flat-design-web_9209-11304.jpg?w=2000"></img>
              </div>
            </td>

            <td>
              <div className="feature">
                <div className="feature-icon"></div>
                <h3>Why NeuroBank?</h3>
                <p>
                NeuroBank is specifically designed to understand the unique financial
                  <br></br>
                  challenges and needs of minorities. It provides personalized and
                  <br></br>
                  culturally sensitive financial advice that addresses your specific
                  <br></br>
                  circumstances, helping you make informed decisions. NeuroBank is<br></br>
                  committed to being accessible and inclusive to all users. It ensures
                  <br></br>
                  that language, cultural nuances, and diverse financial situations
                  <br></br>
                  are considered, creating a safe and welcoming environment for
                  <br></br>
                  minorities to engage with their finances.
                </p>
              </div>

            </td>

          </tr>


        </table>

        <br></br>



        {/* Repeat for other features */}
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>
          With the aim of closing the wealth gap between minority communities
          and those with access to resources we developed NeuroBank <br></br> in
          order to solve the issue that comes along with the lack of financial
          literacy in said communities.
        </p>
        {/* Team members' photos and descriptions */}
      </section>

      <footer className="footer">
        <p>Get in Touch: contact@NeuroBank.com</p>
        <p>© 2025 NeuroBank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
