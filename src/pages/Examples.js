import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import './Examples.css'

export default function Examples() {
  const letters = useLoaderData();

const [imgsInView, setImgsInView] = useState(0)
const length = letters.length
const show = 6


const moveStyle = {
transform: `translateX(-${imgsInView * show}%)`
}

function handleNextSlide(){
  if(imgsInView < (length)){
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
          min-[280px]:w-10 sm:w-14  
          min-[280px]:h-10 sm:h-14  
          rounded-full 
          min-[280px]:top-[19.8rem] sm:top-[22.2rem]
          min-[280px]:left-[50%]
          min-[280px]:translate-x-[-50%]
          flex 
          justify-center
          items-start" 
          to="/coverletters/new">
            <button className=" text-white  
            min-[280px]:text-3xl sm:text-5xl 
            font-bold">
              +</button>
          </Link>
          {/* Under Header */}
          <section className="bg-purple-50 
          w-full 
          underHeader
          overflow-hidden ">
              <h2 className="underHeaderText">Look at all your well written Cover Letters!</h2>
              <img className="clImg" src="https://i.imgur.com/jMqSXdI.png" alt="two purple pencils in the shape of the letters C and L"/>
          </section>
          <section className="overflow-hidden relative 
          h-80 max-2xl:h-fit 
          mt-10">
              <section style={moveStyle} className="w-fit 
              h-full 
              flex
              max-2xl:flex-wrap
              max-2xl:justify-center 
              items-center 
              ease-in-out 
              duration-300
              ">
                  {letters.map((letter) => (
                    <Link className="w-80 max-sm:w-72 
                    h-60 
                    mx-5 " to={`/coverletters/${letter.id}/`}>
                      <section className="bg-[#e8d7ff] 
                      box-border 
                      flex flex-col 
                      justify-between 
                      w-full sm:
                      max-sm:h-48 sm:h-52 
                      text-left 
                      rounded-xl 
                      shadow-lg">
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
              <div className="bg-white opacity-50 absolute w-28 h-full right-0 top-0 max-2xl:hidden"></div>
              <div className="absolute text-9xl right-2 top-24 cursor-pointer max-2xl:hidden" onClick={handleNextSlide}> &gt; </div>
            {imgsInView === 0 ? "" : <>
            <div className="bg-white opacity-50 absolute w-28 h-full top-0 max-2xl:hidden"></div>
            <div className="absolute text-9xl left-2 top-24 cursor-pointer max-2xl:hidden" onClick={handleBackSlide}>&lt;</div>
            </>}      
          </section>
      </main>
    </>
  );
}
