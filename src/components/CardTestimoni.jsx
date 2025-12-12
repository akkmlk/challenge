function CardTestimoni(props) {
    return (
        <div className="w-[320px] h-fit flex flex-1 flex-col gap-y-[18px]">
            <h3 className="text-5xl text-center text-orange-400">{props.title}</h3>
            <p className="text-[18px] text-center text-orange-950">{props.description}</p>
        </div>
    )
}

export default CardTestimoni