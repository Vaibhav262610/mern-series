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
                        <img src="../../public/home.png" alt="home image not loaded" width={400} height={400} />
                    </div>
                </div>
                <div className="bg-white text-gray-700 flex py-6 px-8 rounded-xl gap-10 items-center justify-center">
                    <div className="flex flex-col items-center px-12">
                        <h1 className="text-4xl font-semibold">50+</h1>
                        <h1 className="text-sm">Registered Companies</h1>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="flex flex-col items-center px-12">
                        <h1 className="text-4xl font-semibold">100,00+</h1>
                        <h1 className="text-sm">Happy Clients</h1>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="flex flex-col items-center px-12">
                        <h1 className="text-4xl font-semibold">500+</h1>
                        <h1 className="text-sm">Well Known Developers</h1>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="flex flex-col items-center px-20">
                        <h1 className="text-4xl font-semibold">24/7</h1>
                        <h1 className="text-sm">Service</h1>
                    </div>
                </div>
            </div>
            <div className="w-full pb-32 h-[30rem] flex justify-evenly items-center">
                <div>
                    <img src="../../public/home.png" alt="home image not loaded" width={400} height={400} />
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