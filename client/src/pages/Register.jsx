import { useState } from "react"


const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user)
    }

    return (
        <>
            <div className="flex h-[45rem] w-full justify-evenly items-center">
                <div>
                    <img className="image" src="../../public/register.png" alt="register_image" width={500} height={500} />
                </div>
                <div>
                    <div className="mb-16">
                        <h1 className="text-5xl font-semibold text-white">Registration Form</h1>
                        <hr className="line" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="username">Username</label>
                                <input className="bg-gray-800 text-sm text-gray-400 outline-none rounded-lg py-3 px-4 border border-gray-400" type="text" name="username" required autoComplete="off" onChange={handleInput} value={user.username} id="username" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="email">Email</label>
                                <input className="bg-gray-800 text-sm text-gray-400 outline-none rounded-lg py-3 px-4 border border-gray-400" type="email" name="email" required autoComplete="off" onChange={handleInput} value={user.email} id="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="phone">Phone Number</label>
                                <input className="bg-gray-800 text-sm text-gray-400 outline-none rounded-lg py-3 px-4 border border-gray-400" type="number" name="phone" required autoComplete="off" onChange={handleInput} value={user.phone} id="phone" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="password">Password</label>
                                <input className="bg-gray-800 text-sm text-gray-400 outline-none rounded-lg py-3 px-4 border border-gray-400" type="password" name="password" required autoComplete="off" onChange={handleInput} value={user.password} id="password" />
                            </div>
                            <button type="submit" className="btn">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register