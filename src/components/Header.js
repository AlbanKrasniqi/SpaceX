import { useState } from "react"
import { Link } from 'react-router-dom'
import {SiSpacex} from "react-icons/si"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <header className="absolute flex items-center justify-between px-5 w-full">
    <div>
        <Link to="/">
            {/* ikona */}
            <SiSpacex className='text-8xl text-white' />
        </Link>
    </div>

    <nav className={`${isOpen ? "open" : ""}`}>
        <ul>
            <li>
                <Link to="/capsules" className="text-white text-sm lg:text-base">Capsules</Link>
            </li>
            <li>
                <Link to="/cores" className="text-white text-sm lg:text-base">Cores</Link>
            </li>
            <li>
                <Link to="/crew" className="text-white text-sm lg:text-base">Crew</Link>
            </li>
            <li>
                <Link to="/dragons" className="text-white text-sm lg:text-base">Dragons</Link>
            </li>
            <li>
                <Link to="/landpads" className="text-white text-sm lg:text-base">Landpands</Link>
            </li>
            <li>
                <Link to="/launches" className="text-white text-sm lg:text-base">Launches</Link>
            </li>
            <li>
                <Link to="/launchpads" className="text-white text-sm lg:text-base">Launchpads</Link>
            </li>
            <li>
                <Link to="/payloads" className="text-white text-sm lg:text-base">Payloads</Link>
            </li>
            <li>
                <Link to="/roadster" className="text-white text-sm lg:text-base">Roadster</Link>
            </li>
            <li>
                <Link to="/ships" className="text-white text-sm lg:text-base">Ships</Link>
            </li>
            <li>
                <Link to="/starlink" className="text-white text-sm lg:text-base">Starlink</Link>
            </li>
           
        </ul>

    </nav>
    <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-base   uppercase tracking-wider"
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
    </header>
    </>
  )
}
