import { useLoaderData } from "react-router-dom";
import { Form,Link } from "react-router-dom";

export default function Show() {
  const letter = useLoaderData();

  return (
    <>
      <h2>Dear {letter.company} Hiring Manager,</h2>
      <Form action={`/coverletters/update/${letter.id}`} method="post">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={letter.name}
        />
        <input
          type="text"
          name="position"
          placeholder="Job Position"
          defaultValue={letter.position}
        />
        <input
          type="text"
          name="date"
          placeholder="Today's Date"
          defaultValue={letter.date}
        />
        <input type="text" name="company" placeholder="Company's Name" defaultValue={letter.company}/>
        <input
          type="text"
          name="skill"
          placeholder="Relevant Skills/Experience"
          defaultValue={letter.skill}
        />
        <input
          type="text"
          name="yoe"
          placeholder="Years of Experience"
          defaultValue={letter.yoe}
        />
        <input
          type="text"
          name="expertise"
          placeholder="Relevant Expertise"
          defaultValue={letter.expertise}
        />
        <input
          type="text"
          name="passion"
          placeholder="Relevant Field/Industry"
          defaultValue={letter.passion}
        />
        <input
          type="text"
          name="products"
          placeholder="Company's Products/Services"
          defaultValue={letter.products}
        />
        <button>Update Letter</button>
      </Form>
      <Form action={`/coverletters/delete/${letter.id}`} method="post">
          <button>Delete Todo</button>
        </Form>
      <Link to="/coverletters">
        <button>Go Back</button>
      </Link>
    </>
  );
}
