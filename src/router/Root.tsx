import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const Root = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Root
