import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({model, cards, setCards}) => {
        const[isBuy,setIsBuy]=useState(false)
        const handleBuyed =()=>{
            setIsBuy(true)
            
    const isFound=cards.find((item)=> item.id === ModelCard)
        if(isFound){
            toast.error("item already in card!")
            return;
        }
        setCards([...cards, model])

            toast.success("Item add to card")
        }
    return (
        <div className='shadow-lg rounded-lg border'>
                    <div className="">
                        <div className='border-zinc-300 flex justify-between items-center'>
                        <h3 className='text-2xl font-bold'>{model.icon}</h3>
                        <h3 className="bg-base-300 rounded-lg">{model.tag}</h3>
                    </div>
                    </div>
                    <div className='p-4'>
                        <h2 className='text-4xl font-bold'>{model.name}</h2>
                        <p>{model.description}</p>
                        <div className='text-2xl font-bold'>
                            {model.price}/
                            {model.period}
                            </div>
                       <p>{model.features}</p>

                       <button onClick={handleBuyed} className='btn w-full bg-[#4F39F6] text-white rounded-lg mt-5'>{isBuy ? "Buy" : "BuyNow"}</button>

                    </div>
                    </div>
    );
};

export default ModelCard;