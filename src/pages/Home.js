import Header from "../components/Header";
import { Link } from "react-router-dom";
import HomeImg from '../images/happy-news.svg'

export default function Home() {
  return (
    <>
      <main className="bg-blue-1000 w-full h-screen flex flex-col items-center ">
        <Header />
        <section className="w-2/5 max-sm:w-4/5 h-full flex flex-col items-center justify-evenly ">
          <h2 className="text-5xl max-sm:text-2xl text-white font-bold leading-[4rem] ">
            Get noticed by employers with our professional cover letters
          </h2>
          <p className="text-3xl max-sm:text-lg text-white leading-10">
            Make your application process easy and stress-free by creating a
            cover letter that showcases your skills and experience.
          </p>
          <section className="w-2/3 max-sm:w-11/12 flex justify-evenly">
            <Link to="/coverletters/new">
              <div className="bg-orange-1000 text-white w-40 max-sm:w-24 h-11 max-sm:h-8 text-2xl max-sm:text-sm flex justify-center items-center rounded-full font-semibold">
                Get Started
              </div>
            </Link>
            <Link to="/coverletters">
              <div className="bg-white w-40 max-sm:w-24 h-11 max-sm:h-8 text-2xl max-sm:text-sm flex justify-center items-center rounded-full font-semibold">
                Examples
              </div>
            </Link>
          </section>
          <img className="max-sm:shrink" src={HomeImg} alt=""/>
        </section>
      </main>
    </>
  );
}
