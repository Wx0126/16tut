
import { Link } from "react-router-dom"
const Missing = () => {

    return (
      <main className="Missing">
            <h2>Page not found</h2>
          <p>Well ,that is disappoting</p>
          <p>
            <Link to='/'>back to our home page</Link>
          </p>
      </main>
    )
  }
  
  export default Missing