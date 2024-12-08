import Analytics from "../components/Analytics"


const About = () => {
    return (
        <>
            <div className="w-full flex flex-col h-[110vh] justify-around items-center">
                <div className="w-full flex justify-evenly items-center">
                    <div className="text-white flex flex-col gap-3">
                        <h2 className="text-gray-300">Welcome, Zoro Technical</h2>
                        <h1 className="text-4xl font-semibold w-[20rem]">Why Choose Us?</h1>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Expertise: Our team consists of experienced IT professionals who are passionate about saying up-to-date with the latest industry trends. </h2>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Customization: We understood that every business is unique. Thats why we create solutions that are tailored to your specific needs and goals. </h2>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.</h2>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Affordability: We offer competitive pricing without compromising on the quality of our services.</h2>
                        <h2 className="text-gray-300 w-[36rem] py-4 ">Reliability: Count on us to be there when you need us. We are committed to ensuring your IT environment is reliable and available 24/7.</h2>
                        <div className="flex gap-10">
                            <button className="btn">Connect Now</button>
                            <button className="btn2">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <img className="image" src="../../public/home.png" alt="home image not loaded" width={400} height={400} />
                    </div>
                </div>
                <div>
                    <Analytics />
                </div>
            </div>
        </>
    )
}

export default About