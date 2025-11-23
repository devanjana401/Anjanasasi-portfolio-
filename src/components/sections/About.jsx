import React from "react";

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen bg-[#0f0f0f] text-white py-20 px-6 flex justify-center">
            <div className="max-w-5xl w-full">

                <h2 className="text-5xl font-bold mb-8 text-center">Introduction</h2>

                {/* about paragraph */}
                <p className="text-gray-300 leading-relaxed text-lg text-justify">
                    I am a web developer with strong frontend expertise and a passion for creating clean, responsive, and user-centered interfaces. I enjoy simplifying complex ideas, solving problems, and working collaboratively to deliver practical, high-quality solutions. My experience includes building real-world projects, improving performance, and ensuring smooth, intuitive user experiences across devices and browsers.
                </p>

                {/* cards */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">

                    {/* card 1 */}
                    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform">
                        <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold text-center">
                                Web Developer
                            </h3>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform">
                        <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold text-center">
                                Frontend Developer
                            </h3>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform">
                        <div className="bg-[#1a1a1a] rounded-2xl p-8 min-h-[200px] flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold text-center">
                                React Developer
                            </h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
