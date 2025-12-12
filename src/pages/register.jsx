import Checkbox from "../components/CheckboxTerms"
import InputLabel from "../components/InputLabel"
import Button from "../components/Button"
import RadioButton from "../components/RadioButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Register() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [accepted, setAccepted] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault()

        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("fullname", fullname);
        formData.append("role", role);

        if (confirmPassword === password) {
            if (accepted === false) {
                e.preventDefault();
                alert("Mohon untuk menerima persyaratan aplikasi kami!");
            }
        } else {
            e.preventDefault();
            alert("Password dan Konfirmasinya tidak sama!");
        }

        try {
            const response = await fetch("https://ush-frontend-challenge.onrender.com/api/v1/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData.toString(),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registrasi berhasil!")
                navigate("/login")
            } else {
                console.log("Responsenya: ", data)
            }
        } catch (error) {
            console.error("Error: ", error)
            alert("Registrasi Gagagl")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-screen h-screen  flex">
                <div className="border border-black flex-1 h-full relative">
                    <div className="w-[563px] flex flex-col items-center gap-y-[29px] absolute top-1/2 left-1/2 -translate-1/2">
                        <h1 className="text-[48px] text-white font-bold">Welcome to Rentverse</h1>
                        <p className="text-[18px] text-white font-semibold text-center">Realize your dream home. We craft spaces that are functional, inspiring joy, tranquility, and connection.</p>
                    </div>
                    <img src="/images/image-credentials.jpg" className="h-full w-full object-cover" alt="" />
                </div>
                <div className="flex flex-1 justify-center items-center border ">
                    <div className="py-8 px-6 w-[515px] flex flex-col gap-y-8">
                        <div className="flex w-full h-fit flex-col gap-y-[34px] ">
                            <h1 className="text-3xl font-bold text-center text-orange-950">Register Now</h1>
                            <div className="flex flex-col gap-y-3">
                                <InputLabel id="fullname" type="text" label="Fullname" placeholder="budi siregar" value={fullname} onChange={(e) => setFullname(e.target.value)} is_required={true} />
                                <InputLabel id="email" type="text" label="Email" placeholder="budi siregar@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} is_required={true} />
                                <div className="w-full h-fit flex flex-col gap-y-1.5">
                                    <label htmlFor="" className="text-slate-700  font-bold">Role</label>
                                    <div className="flex">
                                        <RadioButton id="tenant" name="role" value="tenant" label="Tenant" checked={role === "tenant"} onChange={(e) => setRole(e.target.value)} />
                                        <RadioButton id="property_owner" name="role" value="property-owner" label="Property Owner" checked={role === "property-owner"} onChange={(e) => setRole(e.target.value)} />
                                    </div>
                                    <p className="text-neutral-500 text-xl">*Choose this if you are looking to search for and book an apartment</p>
                                </div>
                                <InputLabel id="password" type="password" label="Password" placeholder="**************" is_required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <InputLabel id="confirm_password" type="password" label="Confirm Password" placeholder="**************" is_required={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-y-[15px] ">
                            <Checkbox id="terms" name="terms" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
                            <div className="w-full h-fit">
                                <Button type="submit" value="Next" />
                            </div>
                        </div>
                        <p className="text-neutral-500 text-center">Already have a Rentverse account yet?<a href="/login" className="text-orange-400 font-bold"> Login</a></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register