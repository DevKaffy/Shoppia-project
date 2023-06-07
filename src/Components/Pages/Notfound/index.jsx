import React from 'react'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <Layout>
      <main>
    <div>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go to home page</p>
      <button>
        <Link to="/Home">Back to home page</Link>
      </button>
    </div>
      </main>
    </Layout>
  )
}

export default Notfound