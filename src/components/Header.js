import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <>
      <header className="bg-[#5a1ddc] w-full h-24 max-sm:h-12 flex justify-center items-center">
        <Link to="/">
          <h1 className="text-2xl max-sm:text-xl text-white">COVER LETTER WRITER</h1>
        </Link>
      </header>
    </>
  );
}
