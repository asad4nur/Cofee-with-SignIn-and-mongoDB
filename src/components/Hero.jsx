import heroBanner from '../assets/images/more/3.png'
const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }}>

            {/* Right-aligned content */}
            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">

            </div>

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white space-y-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                            Would you like a Cup of Delicious Coffee?
                        </h2>
                        <p className="text-sm md:text-base">
                            It's coffee time - Sip & Savor – Relaxation in every sip! Get the nostalgia back!!
                            Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="bg-[#E3B577] text-black font-semibold px-6 py-2 rounded hover:bg-[#c59e50] transition">
                            Learn More
                        </button>
                    </div>
                    <div className="w-full max-w-sm ">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;