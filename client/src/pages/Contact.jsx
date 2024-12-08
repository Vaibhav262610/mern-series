import { useState } from "react"


const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(contact)
    }


    return (
        <>
            <div className="flex h-screen w-full justify-evenly items-center">
                <div className="flex flex-col gap-3">
                    <div>
                        <h1 className="text-5xl font-semibold text-white">Contact Form</h1>
                        <hr className="line2" />
                    </div>
                    <img className="image" src="../../public/support.png" alt="Login_image" width={500} height={500} />
                </div>
                <div>
                    <div className=" ">
                        <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="username">Username</label>
                                <input className="bg-gray-800 w-[30rem] text-sm text-gray-400 rounded-lg py-3 px-4 border border-gray-400 outline-none" type="username" name="username" required autoComplete="off" onChange={handleInput} value={contact.username} id="username" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="email">Email</label>
                                <input className="bg-gray-800 w-[30rem] text-sm text-gray-400 rounded-lg py-3 px-4 border border-gray-400 outline-none" type="email" name="email" required autoComplete="off" onChange={handleInput} value={contact.email} id="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-md" htmlFor="message">Message</label>
                                <textarea className="bg-gray-800 h-[15rem] w-[30rem] text-sm text-gray-400 rounded-lg py-3 px-4 border border-gray-400 outline-none" type="message" name="message" required autoComplete="off" onChange={handleInput} value={contact.message} id="message" />
                            </div>
                            <button type="submit" className="btn">Send </button>
                        </form>
                    </div>
                </div>
            </div>
            <section className="h-[50rem] flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41318744296!2d55.06267968534835!3d25.07624244769027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1733682843408!5m2!1sen!2sin" width="600" height="650" className="w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default Contact