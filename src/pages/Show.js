import { useLoaderData } from "react-router-dom";
import { Form, Link } from "react-router-dom";

export default function Show() {
  const letter = useLoaderData();

  return (
    <>
      <main className="grid grid-cols-12 h-screen">
        <aside className="bg-purple-1000 flex flex-col col-span-3 h-full">
          <Form
            className="flex flex-col h-full items-center"
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
            <button className="bg-white text-purple-1000 font-semibold w-44 h-8 my-2 rounded">
              Update Letter
            </button>
          </Form>
        </aside>
        <section className="bg-purple-50 col-span-9 p-5 shadow-[inset_1px_.5px_20px_rgba(0,0,0,0.4)] relative">
          <Form className="bg-red-500 text-white font-semibold absolute p-2 rounded-lg" action={`/coverletters/delete/${letter.id}`} method="post">
            <button>Delete Todo</button>
          </Form>
          <Link className="bg-purple-1000 text-white p-2 rounded-lg" to="/coverletters">
            <button>Go Back</button>
          </Link>
          <article className="bg-white w-6/12 h-[80vh] mx-auto text-left flex flex-col justify-evenly p-5 mt-5 shadow-md">
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
