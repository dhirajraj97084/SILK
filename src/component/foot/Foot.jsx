import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export  function Foot() {
  return (
    <div className=" bg-black/90">
    <footer className="flex  text-white container mx-auto  w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-8 text-center md:justify-between">
      <Typography  className="font-normal">
        &copy; 2024 SILK By SEPHI BERGERSON
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"            
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link to={'/'}>Home</Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"           
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
           <Link to={'/weddingduct'}> Wedding </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"           
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
           <Link to={'/faq'}>Faq</Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"            
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
           <Link to={'/about'}> About</Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"            
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
       <Link to={'/contact'}>     Contact Us</Link>
          </Typography>
        </li>
      </ul>
    </footer>
    </div>
  );
}