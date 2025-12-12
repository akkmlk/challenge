import Checkbox from "../components/CheckboxTerms";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [accepted, setAccepted] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        if (accepted === false) {
            e.preventDefault();
            alert("Mohon untuk menerima persyaratan aplikasi kami!");
        } else {
            e.preventDefault();
            console.log(email)
            console.log(password)
            const formData = new URLSearchParams();
            formData.append("email", email);
            formData.append("password", password);

            try {
                const response = await fetch("https://ush-frontend-challenge.onrender.com/api/v1/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: formData.toString(),
                });

                const data = await response.json();
                if (response.ok) {
                    alert("Login berhasil!")
                    sessionStorage.setItem("login", "true");
                    navigate("/")
                } else {
                    console.log("Responsenya: ", data)
                }
            } catch (error) {
                console.error("Error: ", error)
                alert("Login Gagagl")
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="w-screen h-screen flex">
                <div className="border border-black flex-1 h-full relative">
                    <div className="w-[563px] flex flex-col items-center gap-y-[29px] absolute top-1/2 left-1/2 -translate-1/2">
                        <h1 className="text-[48px] text-white font-bold">Welcome to Rentverse</h1>
                        <p className="text-[18px] text-white font-semibold text-center">Realize your dream home. We craft spaces that are functional, inspiring joy, tranquility, and connection.</p>
                    </div>
                    <img src="/images/image-credentials.jpg" className="h-full w-full object-cover" alt="" />
                </div>
                <div className="flex flex-1 justify-center items-center ">
                    <div className="py-8 px-6 w-[515px] flex flex-col gap-y-8">
                        <div className="flex w-full h-fit flex-col gap-y-[34px]">
                            <h1 className="text-3xl font-bold text-center text-orange-950">Login Now</h1>
                            <div className="flex flex-col gap-y-3 w-full">
                                <InputLabel id="email" type="text" label="Email" placeholder="budi siregar@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} is_required={true} />
                                <InputLabel id="password" type="password" label="Password" placeholder="**************" value={password} onChange={(e) => setPassword(e.target.value)} is_required={true} />
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-y-[15px">
                            <Checkbox id="terms" name="terms" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
                            <div className="w-full h-fit">
                                <Button type="submit" value="Next" />
                            </div>
                        </div>
                        <p className="text-neutral-500 text-center">Don't have a Rentverse account yet?<a href="/register" className="text-orange-400 font-bold"> Register</a></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login