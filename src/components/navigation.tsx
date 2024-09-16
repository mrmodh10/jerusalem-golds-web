import { Link } from "react-router-dom"

const Navigation = () => {
    return <div className="appbar">
    <h1>Jerusalem Golds</h1>
    <nav>
      <Link style={{ fontWeight: 'bold' }} to="/">Home</Link>
      <Link style={{ fontWeight: 'bold' }} to="/Privacy-Policy">Privacy Policy</Link>
    </nav> 
  </div>
}

export default Navigation;