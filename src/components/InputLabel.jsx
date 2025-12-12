import { useState } from "react"

function InputLabel(props) {
    const [showPassword, setShowPassword] = useState(false)
    const { id, label, placeholder, type = "text", value, onChange, is_required } = props;
    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="w-full flex flex-col gap-y-1.5">
            <label htmlFor={props.id} class="block mb-2.5 text-lg text-slate-700 font-bold">{label}</label>
            <div className="relative border border-red-700">
                <input
                    type={inputType}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="bg-orange-50 z-1 text-slate-700 text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-body pr-10"
                    placeholder={placeholder}
                    required={is_required}
                />
                {type === 'password' && (
                    <div className="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <img src="/public/images/eye-on.svg" className="w-full h-full" alt="hide" />
                        ) : (
                            <img src="/public/images/eye-off.svg" className="w-full h-full" alt="show" />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputLabel