import { useState } from "react"


const Login = () => {

    const [user, setUser] = useState({
        email: "",
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
            <div className="flex h-[40rem] w-full justify-evenly items-center">
                <div>
                    <img className="image" src="../../public/login.png" alt="Login_image" width={500} height={500} />
                </div>
                <div>
                    <div className="mb-16">
                        <h1 className="text-5xl font-semibold text-white">Login Form</h1>
                        <hr className="line2" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="email">Email</label>
                                <input className="bg-gray-800 text-sm text-gray-400 rounded-lg py-3 px-4 border border-gray-400 outline-none" type="email" name="email" required autoComplete="off" onChange={handleInput} value={user.email} id="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="password">Password</label>
                                <input className="bg-gray-800 text-sm text-gray-400 rounded-lg py-3 px-4 border border-gray-400 outline-none" type="password" name="password" required autoComplete="off" onChange={handleInput} value={user.password} id="password" />
                            </div>
                            <button type="submit" className="btn">Login Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login