import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Show() {
  const letter = useLoaderData();

  const [openClose, setOpenClose] = useState("translate-x-[-100%]")

  const handleClose = () => {
    setOpenClose("translate-x-[-100%]")
  }
  const handleOpen = () => {
    setOpenClose("translate-x-[0%]")
  }

  

  return (
    <>
      <main className="flex 
      justify-between 
      w-screen 
      min-[280px]:h-full sm:h-screen h-screen 
      relative">
        <aside className={`bg-purple-1000 
        min-[280px]:w-full sm:max-w-[30rem] lg:w-[30rem] 
        flex flex-col 
        h-full 
        absolute 
        z-10 
        ${openClose} ease-in-out duration-300`}>
          <h2 className="text-white 
          min-[280px]:text-2xl text-3xl 
          my-5 font-semibold">Update Cover Letter</h2>
          <button onClick={handleClose} className="font-bold text-white text-2xl absolute right-2">X</button>
          <Form
            className="flex flex-col w-full h-full items-center"
            action={`/coverletters/update/${letter.id}`}
            method="post"
          >
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={letter.name}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="position"
              placeholder="Job Position"
              defaultValue={letter.position}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="date"
              placeholder="Today's Date"
              defaultValue={letter.date}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="company"
              placeholder="Company's Name"
              defaultValue={letter.company}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="skill"
              placeholder="Relevant Skills/Experience"
              defaultValue={letter.skill}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="yoe"
              placeholder="Years of Experience"
              defaultValue={letter.yoe}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="expertise"
              placeholder="Relevant Expertise"
              defaultValue={letter.expertise}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="passion"
              placeholder="Relevant Field/Industry"
              defaultValue={letter.passion}
            />
            <input
              className="w-6/12 h-8 p-2 rounded-md my-2"
              type="text"
              name="products"
              placeholder="Company's Products/Services"
              defaultValue={letter.products}
            />
            <button className="bg-white text-purple-1000 font-semibold w-44 h-8 my-2 rounded
            min-[280px]:text-sm lg:text-base">
              Update Letter
            </button>
          </Form>
        </aside>
        
        <section className="bg-purple-50 
        w-full
        p-5 
        shadow-[inset_1px_.5px_20px_rgba(0,0,0,0.4)] 
        relative">
          
          <section className="flex justify-between">

            {/* Update Button */}
            <button onClick={handleOpen} className="bg-white
            rounded-lg
            p-2
            min-[280px]:w-16 lg:w-36
           
            left-5
            font-semibold
            min-[280px]:text-xs lg:text-base
            border-2
            border-purple-1000 text-purple-1000">Update</button>
            
            {/* Back Button */}
            <Link className="bg-purple-1000 
            text-white
            min-[280px]:text-xs lg:text-base 
            p-2 
            rounded-lg" to="/coverletters">
              <button>Go Back</button>
            </Link>

            {/* Delete Button */}
            <Form className="bg-red-500
            text-white
            min-[280px]:text-xs lg:text-base
            font-semibold
            min-[280px]:w-16 lg:w-36
            p-2
            rounded-lg
            top-5
            right-5" action={`/coverletters/delete/${letter.id}`} method="post">
              <button>Delete</button>
            </Form>
          </section>

          
          {/* Cover Letter */}
          <article className="bg-white 
          min-[280px]:w-[98%] md:w-[35rem] lg:w-[45rem] 
          min-[280px]:h-[45rem] lg:h-[55rem] 
          mx-auto 
          text-left 
          flex flex-col 
          justify-evenly 
          p-5 
          mt-5 
          shadow-md
          min-[280px]:text-[10px] md:text-sm lg:text-base
          ">
            <p>Dear {letter.company} Hiring Manager,</p>
            <p>
              I am writing to express my interest in the {letter.position} role
              at {letter.company}. I am excited to apply my skills in{" "}
              {letter.skill} to make a valuable contribution to your team.
            </p>
            <p>
              In my {letter.yoe} years of experience, I have honed my skills in{" "}
              {letter.skill} and worked on a variety of projects that have
              enabled me to develop {letter.expertise}. I have also collaborated
              with cross-functional teams and stakeholders to deliver projects
              on time and within budget.
            </p>
            <p>
              Additionally, I am committed to staying up-to-date with the latest
              developments and trends. I am confident that my skills in{" "}
              {letter.skill} and passion for {letter.passion} make me an ideal
              candidate for the {letter.position} role at {letter.company}.
            </p>
            <p>
              I am excited about the opportunity to join a dynamic and
              innovative company like {letter.company} and to be a part of a
              team that is committed to delivering high-quality{" "}
              {letter.products}. I am confident that my skills, experience, and
              passion will enable me to make a valuable contribution to your
              team and to help drive the success of your business.
            </p>
            <p>
              Thank you for considering my application. I look forward to the
              opportunity to discuss my qualifications further and to learn more
              about the {letter.position} role at {letter.company}.
            </p>
            <p>Sincerely,</p>
            <p>{letter.name}</p>
          </article>
        </section>
      </main>
    </>
  );
}
