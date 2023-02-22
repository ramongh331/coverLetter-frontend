import { Form } from "react-router-dom"

export default function New (){
    return <>
    <h2>New Cover Letter</h2>
<Form action="/coverletters/create" method="post">
<input type="text" name="name" placeholder="Your Name"/>
<input type="text" name="position" placeholder="Job Position"/>
<input type="text" name="date" placeholder="Today's Date"/>
<input type="text" name="company" placeholder="Company's Name"/>
<input type="text" name="skill" placeholder="Relevant Skills/Experience"/>
<input type="text" name="yoe" placeholder="Years of Experience"/>
<input type="text" name="expertise" placeholder="Relevant Expertise"/>
<input type="text" name="passion" placeholder="Relevant Field/Industry"/>
<input type="text" name="products" placeholder="Company's Products/Services"/>
<button>Create a Cover Letter</button>
</Form>
    </>
}