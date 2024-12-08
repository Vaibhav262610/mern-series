import Analytics from "../components/Analytics"

const Home = () => {
    return (
        <>
            <div className="w-full flex flex-col h-screen justify-evenly items-center">
                <div className="w-full flex justify-evenly items-center">
                    <div className="text-white flex flex-col gap-3">
                        <h2 className="text-gray-300">We are the World Best IT Company</h2>
                        <h1 className="text-4xl font-semibold w-[20rem]">Welcome to Zoro Technical</h1>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Zoro Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.</h2>
                        <div className="flex gap-10">
                            <button className="btn">Connect Now</button>
                            <button className="btn2">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <img className="image" src="../../public/home.png" alt="home image not loaded" width={400} height={400} />
                    </div>
                </div>
                <Analytics />
            </div>
            <div className="w-full pb-32 h-[30rem] flex justify-evenly items-center">
                <div>
                    <img className="image" src="../../public/design.png" alt="home image not loaded" width={400} height={400} />
                </div>
                <div className="text-white flex flex-col gap-3">
                    <h2 className="text-gray-300">We are the World Best IT Company</h2>
                    <h1 className="text-4xl font-semibold w-[20rem]">Welcome to Zoro Technical</h1>
                    <h2 className="text-gray-300 w-[36rem] py-4 ">Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Zoro Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.</h2>
                    <div className="flex gap-10">
                        <button className="btn">Connect Now</button>
                        <button className="btn2">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home