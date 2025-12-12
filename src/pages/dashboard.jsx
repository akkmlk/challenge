import ButtonOutline from "../components/ButtenOutline"
import Button from "../components/Button"
import CardTestimoni from "../components/CardTestimoni"
import CardRoom from "../components/CardRoom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {

    const rooms = [
        {
            id: 1,
            title: "Georgetown",
            description: "Bandaraya Georgetown, Northeast Penang, Penang",
            price: 300,
            bedrooms: 3,
            bathrooms: 1,
            sqft: 500,
        },
        {
            id: 2,
            title: "Kuala Lumpur Suite",
            description: "City center, Kuala Lumpur, Malaysia",
            price: 450,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 650,
        },
        {
            id: 3,
            title: "Bangkok Villa",
            description: "Riverside area, Bangkok, Thailand",
            price: 350,
            bedrooms: 3,
            bathrooms: 2,
            sqft: 700,
        },
        {
            id: 4,
            title: "Jakarta Apartment",
            description: "Central Jakarta, near shopping district",
            price: 280,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 400,
        },
        {
            id: 5,
            title: "Singapore Loft",
            description: "Orchard Road area, Singapore",
            price: 500,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 550,
        },
        {
            id: 6,
            title: "Manila Condo",
            description: "Makati City, near business district, Philippines",
            price: 320,
            bedrooms: 2,
            bathrooms: 1,
            sqft: 480,
        },
        {
            id: 7,
            title: "Hong Kong Studio",
            description: "Central District, Hong Kong",
            price: 400,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 350,
        },
        {
            id: 8,
            title: "Tokyo Apartment",
            description: "Shibuya area, Tokyo, Japan",
            price: 600,
            bedrooms: 2,
            bathrooms: 1,
            sqft: 600,
        },
        {
            id: 9,
            title: "Seoul Penthouse",
            description: "Gangnam District, Seoul, South Korea",
            price: 750,
            bedrooms: 3,
            bathrooms: 2,
            sqft: 800,
        },
    ];

    const navigate = useNavigate();

    const [isLoggedIn] = useState(() => {
        return sessionStorage.getItem("login") === "true";
    });

    const handleLogout = () => {
        sessionStorage.removeItem("login");
        navigate("/")
    };

    return (
        <>
            <nav className="w-full h-fit flex justify-between items-center py-6 px-10">
                <div className="w-fit h-fit flex gap-x-[50px] items-center">
                    <img src="/images/logo.png" alt="logo" />
                    <ul className="flex gap-x-[78px] w-fit h-fit items-center">
                        <li><a href="" className="font-bold text-orange-400 text-lg">Home</a></li>
                        <li><a href="" className="font-bold text-slate-800 text-lg">Property</a></li>
                        <li><a href="" className="font-bold text-slate-800 text-lg">About Us</a></li>
                        <li><a href="" className="font-bold text-slate-800 text-lg">Contact</a></li>
                    </ul>
                </div>
                {isLoggedIn ? (
                    <div className="flex gap-1 justify-center items-center">
                        <button type="button" className="w-full h-full text-red-700 rounded-xl py-2 px-3 font-semibold" onClick={handleLogout}>Logout</button>
                        <div className="w-fit h-fit">
                            <img src="/images/menu.svg" alt="menu-icon" />
                        </div>
                    </div>
                ) : (
                    <div className="w-fit h-fit flex gap-x-5 items-center ">
                        <div className="w-[120px] h-fit">
                            <Link to="/login">
                                <ButtonOutline type="button" value="Login" />
                            </Link>
                        </div>
                        <div className="w-[120px] h-fit">
                            <Link to="/register">
                                <Button type="button" value="Register" />
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <section className="relative w-full h-[509px]">
                <img src="/images/image-dashboard.jpg" alt="image-hero" className="w-full h-full object-contain" />
                <div className="flex flex-col gap-y-[29px] w-[626px] h-fit items-center absolute top-1/2 left-1/2 -translate-1/2">
                    <h1 className="text-orange-50 text-5xl text-center font-libertinus">Build Your Dream Home Live the Lifestyle You Crave.</h1>
                    <p className="text-[18px] font-bold text-state-50 text-center">Realize your dream home. We craft spaces that are functional, inspiring joy, tranquility, and connection.</p>
                </div>
            </section>
            <section className="w-full h-[450px]  relative flex justify-center">
                <div className="w-[95%] h-fit flex flex-col gap-y-[58px] items-center absolute -top-12   ">
                    <div className="w-fit h-fit bg-white rounded-[20px] py-[27px] px-5 flex gap-x-7 justify-center items-center ">
                        <input type="search" placeholder="Search by locations" className="placeholder:text-blue-950 pr-10 bg-state-50 w-[724px] max-w-[724px] h-fit rounded-[10px] py-3 px-2" />
                        <div className="w-fit h-fit">
                            <Button type="button" value="Search" />
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col items-center gap-y-10 ">
                        <h2 className="text-[40px] text-orange-400 text-center font-libertinus">Trusted by Hundreds, Recognized for Excellence.</h2>
                        <div className="w-full h-fit flex gap-x-[25px] flex-wrap">
                            <CardTestimoni title="750+" description="Successfully built over 750 unique homes tailored to each client's vision." />
                            <CardTestimoni title="200+" description="Expertise in building functional and inspiring spaces, from offices to retail." />
                            <CardTestimoni title="15+" description="A decade of dedicated expertise ensuring timeless quality." />
                            <CardTestimoni title="50+" description="Honored with numerous industry awards for our innovative ." />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-fit mb-20">
                <h2 className="font-libertinus text-[40px] text-orange-400 text-center mb-[53px]">Find the property that defines your lifestyle</h2>
                <div className="flex justify-center gap-[19px] w-full h-fit flex-wrap">
                    {rooms.map(room => (
                        <CardRoom title={room.title} description={room.description} price={room.price} bedrooms={room.bedroos} bathrooms={room.bathrooms} sqft={room.sqft} />
                    ))}
                </div>
            </section>
            <section className="w-full h-fit bg-orange-950 flex justify-between py-9 px-[130px]">
                <div className="w-[278px] h-fit flex flex-col gap-y-3.5">
                    <img src="/images/logo-light.png" alt="logo-light" className="w-[123px] h-[76px]" />
                    <p className="text-[16px] text-white">The trushted platform for finding your perfect home, whether you’re buying, renting, or selling.</p>
                    <div className="flex gap-x-6 w-fit h-fit">
                        <img src="/images/instagram.svg" alt="icon-instagram" />
                        <img src="/images/youtube.svg" alt="icon-youtube" />
                        <img src="/images/facebook.svg" alt="icon-facebook" />
                        <img src="/images/tiktok.svg" alt="icon-tiktok" />
                        <img src="/images/x.svg" alt="icon-x" />
                    </div>
                </div>
                <div className="w-fit h-fit flex flex-col gap-y-6">
                    <h5 className="text-[18px] text-white font-bold">Quick Links</h5>
                    <p className="text-[16px] text-white">Property</p>
                    <p className="text-[16px] text-white">Rent</p>
                    <p className="text-[16px] text-white">Talk to an expert</p>
                    <p className="text-[16px] text-white">Blog</p>
                    <p className="text-[16px] text-white">About Us</p>
                </div>
                <div className="w-fit h-fit flex flex-col gap-y-6">
                    <h5 className="text-[18px] text-white font-bold">Resources</h5>
                    <p className="text-[16px] text-white">Help Center</p>
                    <p className="text-[16px] text-white">Guides & Articles</p>
                    <p className="text-[16px] text-white">Real Estate News</p>
                    <p className="text-[16px] text-white">Market Trends</p>
                    <p className="text-[16px] text-white">Mortgage Calculator</p>
                </div>
                <div className="w-[307px] h-fit flex flex-col gap-y-3.5">
                    <h5 className="text-[18px] text-white font-bold">Stay Updated</h5>
                    <p className="text-[16px] text-white">Subcribe to our newsletter for the latest properties and real estate tips.</p>
                    <div className="flex gap-x-6 w-fill h-fit">
                        <input type="email" placeholder="Enter Email Address" className="w-[182px] h-fit rounded-md p-2.5 bg-white placeholder-state-200 placeholder:font-semibold" />
                        <button className="py-2.5 px-[30px] rounded-md w-fit h-fit bg-white text-orange-950 font-semibold">Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard