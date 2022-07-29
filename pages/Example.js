import Link from "next/link"

function Example() {
  return (
    <div className="m-auto">
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav bg-danger">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link fw-bold active">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link fw-bold">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link fw-bold">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link fw-bold">Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Example