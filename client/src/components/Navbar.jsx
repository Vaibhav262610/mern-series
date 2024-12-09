import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"

const Navbar = () => {

    const { isLoggedIn } = useAuth()

    return (
        <>
            <div className="flex justify-around py-8">
                <div className="text-2xl font-bold uppercase">
                    <NavLink to='/'>
                        <div className="flex">
                            <h1>VAIBHAV</h1>
                            <h1 className="text-white">MERN</h1>
                        </div>
                    </NavLink>
                </div>
                <div className="flex gap-8 text-md">
                    <NavLink to="/"> <h1 className="duration-150 hover:text-white">Home</h1></NavLink>
                    <NavLink to="/about"><h1 className="duration-150 hover:text-white">About</h1></NavLink>
                    <NavLink to="/services"><h1 className="duration-150 hover:text-white">Services</h1></NavLink>
                    <NavLink to="/contact"><h1 className="duration-150 hover:text-white">Contact</h1></NavLink>
                    {isLoggedIn ?
                        <NavLink to="/logout"><h1 className="duration-150 hover:text-white">Logout</h1></NavLink>
                        :
                        <>
                            <NavLink to="/register"><h1 className="duration-150 hover:text-white">Register</h1></NavLink>
                            <NavLink to="/login"><h1 className="duration-150 hover:text-white">Login</h1></NavLink>
                        </>
                    }
                </div>
            </div >
        </>
    )
}

export default Navbar