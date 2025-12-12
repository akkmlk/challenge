function Button(props) {
    return (
        <div className="w-full h-full">
            <button type={props.type} className="w-full h-full bg-orange-400 text-white rounded-xl py-2 px-3 font-semibold">{props.value}</button>
        </div>
    )
}

export default Button