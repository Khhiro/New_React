import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const {pathname} = useLocation()

  return (
    <div>
      <h1>Header</h1>
<Link className={`${pathname == "/section 1" ? "active" : "inactive"}`} to={'/section1'}>section1</Link>
<Link   className={`${pathname == "/section 2" ? "active" : "inactive"}`} to={'/section2'}>section2</Link>
<Link  className={`${pathname == "/section 3" ? "active" : "inactive"}`} to={'/section3'}>section3</Link>
<Link  className={`${pathname == "/section 4" ? "active" : "inactive"}`} to={'/section4'}>section4</Link>
<Link  className={`${pathname == "/section 5" ? "active" : "inactive"}`} to={'/section5'}>section5</Link>
<Link  className={`${pathname == "/section 6" ? "active" : "inactive"}`} to={'/section6'}>section6</Link>
<Link  className={`${pathname == "/section 7" ? "active" : "inactive"}`} to={'/section7'}>section7</Link>
<Link  className={`${pathname == "/section 8" ? "active" : "inactive"}`} to={'/section8'}>section8</Link>
<Link  className={`${pathname == "/section 9" ? "active" : "inactive"}`} to={'/section9'}>section9</Link>
<Link  className={`${pathname == "/section 10" ? "active" : "inactive"}`} to={'/section10'}>section10</Link>
    </div>
  )
}
