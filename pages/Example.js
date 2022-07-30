import Link from "next/link";
import Auth from "./auth/register";

function Example() {
  return (
    <div className="m-auto mynav">
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="mymain">
          <ul className="navbar-nav bg-secondary navbody">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link fw-bold headlink active">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link fw-bold headlink ">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link fw-bold headlink ">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="./auth/register">
                <a className="nav-link fw-bold headlink ">Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Example