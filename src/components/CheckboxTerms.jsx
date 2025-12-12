function CheckboxTerms(props) {

    return (
        <div>
            <input type="checkbox" id={props.id} name={props.name} checked={props.checked} onChange={props.onChange} className="accent-orange-400" />
            <label htmlFor="vehicle1" className="text-neutral-500 "> By registering, I agree to <span className="font-bold text-orange-400">Rentverse Terms & Conditions and Privacy Policy</span></label>
        </div>
    )
}

export default CheckboxTerms