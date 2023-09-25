import React from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

function SiteLayout() {
  return (
    <>
      < Navbar />
      <main>
        <div className="container my-5">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default SiteLayout