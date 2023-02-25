import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

export default function Examples() {
  const letters = useLoaderData();

//   document.URL === "http://localhost:3000/coverletters" ? document.querySelector("body").style.backgroundColor = "white" : null;

const [imgsInView, setImgsInView] = useState(0)
const length = letters.length
const show = 6


const moveStyle = {
transform: `translateX(-${imgsInView * show}%)`
}

function handleNextSlide(){
  if(imgsInView < (length - 2)){
     setImgsInView(prevState => prevState + 2)
  }
}
function handleBackSlide(){
  if(imgsInView > 0){
     setImgsInView(prevState => prevState - 2)  
  }
}

  return (
    <>
      <main className=" h-screen">
          <Link className="absolute right-28 bottom-28" to="/coverletters/new">
            <button className="bg-orange-1000 text-white w-16 h-16 rounded-full text-5xl font-bold ">+</button>
          </Link>
          <section className="overflow-hidden relative h-60 mt-10">
              <section style={moveStyle} className="w-fit h-60 flex ease-in-out duration-300">
                  {letters.map((letter) => (
                    <Link className="w-80 h-52 mx-5 " to={`/coverletters/${letter.id}/`}>
                      <section className="bg-[#3D5A80] box-border flex flex-col justify-between w-full h-60 text-left rounded-xl ">
                        <p className="text-white p-2">
                          I am writing to express my interest in the {letter.position} role
                          at {letter.company}. I am excited to apply my skills in{" "}
                          {letter.skill} to make a valuable contribution to your team.
                        </p>
                        <section className="bg-[#98C1D9] w-full p-2 rounded-b-xl">
                          <h3>{letter.position}</h3>
                          <h4>{letter.company}</h4>
                        </section>
                      </section>
                      </Link>
              ))}
              </section>
              <div className="bg-white opacity-50 absolute w-28 h-full right-0 top-0"></div>
              <div className="absolute text-9xl right-2 top-10" onClick={handleNextSlide}> &gt; </div>
            {imgsInView === 0 ? "" : <>
            <div className="bg-white opacity-50 absolute w-28 h-full top-0"></div>
            <div className="absolute text-9xl left-2 top-10" onClick={handleBackSlide}>&lt;</div>
            </>}      
          </section>
      </main>
    </>
  );
}
