import { Link } from "react-router-dom";
import HomeImg from '../images/happy-news.svg'

export default function Home() {
  return (
    <>
      <main className="bg-blue-1000 
      w-full 
      h-screen
      flex flex-col items-center ">
        <section className="max-sm:w-4/5 sm:w-3/5 xl:w-2/5 w-2/5
        h-full">
          <h2 className=" max-[280px]:text-2xl max-sm:text-3xl sm:text-4xl text-5xl
          text-white 
          font-bold 
          leading-[4rem] 
          mt-10">
            Get noticed by employers with our professional cover letters
          </h2>
          <p className="max-[280px]:text-sm max-sm:text-lg sm:text-xl text-3xl
          text-white 
          leading-10
          mt-5">
            Make your application process easy and stress-free by creating a
            cover letter that showcases your skills and experience.
          </p>
          <section className="max-[280px]:w-full max-sm:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
          flex justify-evenly 
          max-sm:mx-auto max-sm:mt-7 sm:mx-auto sm:mt-7">

            <Link to="/coverletters/new">
              <div className="bg-orange-1000 text-white 
              w-40 max-sm:w-24 sm:w-32 
              h-11 max-sm:h-8 sm:h-9 
              text-2xl max-sm:text-sm sm:text-base 
              flex justify-center items-center 
              rounded-full 
              font-semibold">
                Get Started
              </div>
            </Link>
            <Link to="/coverletters">
              <div className="bg-white 
              w-40 max-sm:w-24 sm:w-32 
              h-11 max-sm:h-8 sm:h-9 
              text-2xl max-sm:text-sm sm:text-base 
              flex justify-center items-center 
              rounded-full 
              font-semibold">
                Examples
              </div>
            </Link>
          </section>
          <img className="max-sm:w-56 sm:w-80 
          max-sm:mx-auto max-sm:mt-7 sm:mx-auto sm:mt-7" src={HomeImg} alt=""/>
        </section>
      </main>
    </>
  );
}
