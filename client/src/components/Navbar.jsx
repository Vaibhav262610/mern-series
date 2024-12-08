import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-around py-8">
                <div className="text-lg font-bold uppercase">
                    <h1>VaibhavMern</h1>
                </div>
                <div className="flex gap-8 text-lg">
                    <NavLink to="/"> <h1 className="duration-150 hover:text-white">Home</h1></NavLink>
                    <NavLink to="/about"><h1 className="duration-150 hover:text-white">About</h1></NavLink>
                    <NavLink to="/services"><h1 className="duration-150 hover:text-white">Services</h1></NavLink>
                    <NavLink to="/contact"><h1 className="duration-150 hover:text-white">Contact</h1></NavLink>
                    <NavLink to="/login"><h1 className="duration-150 hover:text-white">Login</h1></NavLink>
                    <NavLink to="/register"><h1 className="duration-150 hover:text-white">Register</h1></NavLink>
                </div>
            </div >
        </>
    )
}

export default Navbar