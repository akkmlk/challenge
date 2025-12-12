import Button from "./Button"

function CardRoom(props) {
    return (
        <div className="w-[440px] h-[489px] border border-x-state-100 border-b-state-100 bg-white rounded-3xl">
            <div className="w-full h-277px relative">
                <img src="/images/image-room.png" alt="" className="w-full h-full object-contain" />
                <div className="w-fit h-fit absolute top-5 left-5">
                    <Button type="button" value="For Rent" />
                </div>
            </div>
            <div className="w-full h-full p-5 flex flex-col gap-y-3">
                <div className="w-full h-fit flex flex-col gap-y-1 items-start">
                    <h4 className="font-bold text-black text-[18px]">{props.title}</h4>
                    <p className="text-slate-500 text-[16px]">{props.description}</p>
                    <h3 className="font-bold text-red-500 text-[18px]">RM{props.price}/mo</h3>
                </div>
                <div className="w-full h-fit flex justify-between">
                    <div className="w-fit h-fit flex flex-col items-start gap-x-2">
                        <div className="w-fit h-fit flex items-start gap-x-2">
                            <img src="/images/bed.svg" alt="bed-icon" />
                            <p className="text-[16px] font-semibold text-black">{props.bedrooms}</p>
                        </div>
                        <p className="text-[14px] font-semibold text-black">Bedrooms</p>
                    </div>
                    <div className="w-fit h-fit flex flex-col items-start gap-x-2">
                        <div className="w-fit h-fit flex items-start gap-x-2">
                            <img src="/images/bathroom.svg" alt="bed-icon" />
                            <p className="text-[16px] font-semibold text-black">{props.bathrooms}</p>
                        </div>
                        <p className="text-[14px] font-semibold text-black">Bathrooms</p>
                    </div>
                    <div className="w-fit h-fit flex flex-col items-start gap-x-2">
                        <div className="w-fit h-fit flex items-start gap-x-2">
                            <img src="/images/sqft.svg" alt="bed-icon" />
                            <p className="text-[16px] font-semibold text-black">{props.sqft}</p>
                        </div>
                        <p className="text-[14px] font-semibold text-black">Total Area</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRoom