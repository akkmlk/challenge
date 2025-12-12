function ButtonOutline(props) {
    return (
        <div className="w-full h-full">
            <button type={props.type} className="w-full h-full border border-orange-400 font-bold rounded-xl py-2 px-3 bg-white text-orange-400">{props.value}</button>
        </div>
    )
}

export default ButtonOutline