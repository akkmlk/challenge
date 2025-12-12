function RadioButton(props) {
    return (
        <div className="flex justify-between flex-1 border-2 border-white-300 w-full h-fit py-3 px-5 rounded-lg">
            <label htmlFor={props.id} className="text-slate-700 font-bold">{props.label}</label>
            <input type="radio" id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} className="accent-amber-400 text-slate-700 font-bold" />
        </div>
    )
}

export default RadioButton