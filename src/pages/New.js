import { Form } from "react-router-dom";
import "../index.css";

export default function New() {

  return (
    <>
      <main className="w-full h-full ">
        <section className="flex flex-col items-center">
            <h2 className="max-[280px]:text-3xl max-sm:text-4xl text-5xl 
            font-bold
            text-white 
            mt-5
            mx-3">Make a New Cover Letter</h2>
            <div className="max-[280px]:flex-col max-sm:flex-col max-[875px]:flex-col flex
            justify-evenly 
            max-[280px]:items-center max-sm:items-center max-[875px]:items-center
            w-full 
            h-4/5 
            max-[280px]:mt-0 mt-10">
              
              {/* Form */}
              <Form
                className="flex flex-col 
                items-center
                max-[280px]:w-11/12 max-sm:w-11/12 w-96"
                action="/coverletters/create"
                method="post"
              >
                {/* Inputs Section */}
                <section className="flex flex-col 
                justify-evenly 
                items-center 
                max-[280px]:w-full max-sm:w-full sm:w-full w-3/5 
                h-[40rem]">
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full 
                    h-8 
                    rounded-md 
                    p-1"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="position"
                    placeholder="Job Position"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="date"
                    placeholder="Today's Date"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="company"
                    placeholder="Company's Name"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="skill"
                    placeholder="Relevant Skills/Experience"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="yoe"
                    placeholder="Years of Experience"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="expertise"
                    placeholder="Relevant Expertise"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="passion"
                    placeholder="Relevant Field/Industry"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1"
                    type="text"
                    name="products"
                    placeholder="Company's Products/Services"
                  />
                  <button className="bg-orange-1000 
                  max-sm:max-w-[13rem] sm:max-w-[13rem] w-11/12 
                  font-bold 
                  text-white text-md 
                  rounded-lg 
                  py-1">Create a Cover Letter</button>
                </section>
              </Form>
              {/* Example Paper */}
              <section className="bg-white 
              max-[280px]:w-11/12 max-sm:w-11/12 min-[430px]:max-w-[26rem]  w-[40rem] 
              text-left 
              max-[280px]:text-sm max-sm:text-sm sm:text-base text-xl 
              p-5 
              flex flex-col 
              justify-between 
              shadow-lg
              max-[280px]:mb-3 max-sm:mb-6 sm:mb-6 mb-6">
                <p>
                  Dear <span className="redText">[Hiring Manager]</span>,
                </p>
                <p>
                  I am writing to express my interest in the{" "}
                  <span className="redText">[Position]</span> role at{" "}
                  <span className="redText">[Company]</span>. As an experienced{" "}
                  <span className="redText">[your profession or job title]</span>, I
                  am excited to apply my{" "}
                  <span className="redText">[relevant skills or experience]</span>{" "}
                  to make a valuable contribution to your team.
                </p>
                <p>
                  In my <span className="redText">[Number of Years]</span> years of
                  experience, I have honed my skills in{" "}
                  <span className="redText">[relevant skills or technologies]</span>{" "}
                  and worked on a variety of projects that have enabled meto develop{" "}
                  <span className="redText">[relevant expertise]</span>. I have also
                  collaborated with cross-functional teams and stakeholders to
                  deliver projects on time and within budget.
                </p>
                <p>
                  Additionally, I have a passion for{" "}
                  <span className="redText">[relevant field or industry]</span> and
                  am committed to staying up-to-date with the latest developments
                  and trends. I am confident that my skills in{" "}
                  <span className="redText">[relevant skills or experience]</span>{" "}
                  and passion for{" "}
                  <span className="redText">[relevant field or industry]</span>
                  make me an ideal candidate for the{" "}
                  <span className="redText">[Position]</span> role at{" "}
                  <span className="redText">[Company]</span>.
                </p>
                <p>
                  I am excited about the opportunity to join a dynamic and
                  innovative company like <span className="redText">[Company]</span>{" "}
                  and to be a part of a team that is committed to delivering
                  high-quality{" "}
                  <span className="redText">[relevant products or services]</span>.
                  I am confident that my skills, experience, and passion will enable
                  me to make a valuable contribution to your team and to help drive
                  the success of your business.
                </p>
                <p>
                  Thank you for considering my application. I look forward to the
                  opportunity to discuss my qualifications further and to learn more
                  about the <span className="redText">[Position]</span> role at{" "}
                  <span className="redText">[Company]</span>.
                </p>
                <p>Sincerely,</p>
                <p>
                  <span className="redText">[Your Name]</span>
                </p>
              </section>
            </div>
        </section>
      </main>
    </>
  );
}
