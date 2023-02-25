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
          <Link className="bg-purple-1000 
          absolute 
          min-[280px]:w-10 2xl:w-16 
          min-[280px]:h-7 2xl:h-16 
          rounded-full 
          min-[280px]:top-[20.1rem]
          min-[280px]:left-[50%]
          2xl:right-28 
          2xl:bottom-28 
          2xl:flex 
          2xl:justify-center 
          2xl:items-start" 
          to="/coverletters/new">
            <button className=" text-white 
            max-[280px]:mt-0 2xl:mt-[5px] 
            max-[280px]:text-base 2xl:text-5xl 
            font-bold">
              +</button>
          </Link>
          <section className="bg-purple-50 w-full h-72 flex justify-evenly items-center overflow-hidden ">
              <h2 className="text-5xl">Look at all your well written Cover Letters!</h2>
              <img className="h-96 mt-7" src="https://i.imgur.com/jMqSXdI.png" alt="two purple pencils in the shape of the letters C and L"/>
          </section>
          <section className="overflow-hidden relative h-80 mt-10">
              <section style={moveStyle} className="w-fit h-full flex items-center ease-in-out duration-300">
                  {letters.map((letter) => (
                    <Link className="w-80 h-52 mx-5 " to={`/coverletters/${letter.id}/`}>
                      <section className="bg-[#e8d7ff] box-border flex flex-col justify-between w-full h-60 text-left rounded-xl shadow-lg">
                        <p className="p-2">
                          I am writing to express my interest in the {letter.position} role
                          at {letter.company}. I am excited to apply my skills in{" "}
                          {letter.skill} to make a valuable contribution to your team.
                        </p>
                        <section className="bg-purple-1000 text-white w-full p-2 rounded-b-xl">
                          <h3 className="font-bold">{letter.position}</h3>
                          <h4 className="font-semibold">{letter.company}</h4>
                        </section>
                      </section>
                      </Link>
              ))}
              </section>
              <div className="bg-white opacity-50 absolute w-28 h-full right-0 top-0"></div>
              <div className="absolute text-9xl right-2 top-24 cursor-pointer" onClick={handleNextSlide}> &gt; </div>
            {imgsInView === 0 ? "" : <>
            <div className="bg-white opacity-50 absolute w-28 h-full top-0"></div>
            <div className="absolute text-9xl left-2 top-24 cursor-pointer" onClick={handleBackSlide}>&lt;</div>
            </>}      
          </section>
      </main>
    </>
  );
}
