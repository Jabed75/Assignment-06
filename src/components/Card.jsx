import { toast } from "react-toastify";


const Card = ({cards, setCards}) => {
    
    const totalPrice = cards.reduce((sum, item) => sum + item.price,0)
    const handlePayment=()=>{
        setCards([])
        toast.success("Payment Succesfully")
    };
    const handleRemove=(item)=>{
        console.log(item);
        const filteredArray = cards.filter(c => c.id !== item.id)
        setCards(filteredArray)
        toast.success("Item Remove succesfully")
    }
    return (
        <div className="p-10 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Your Card</h1>
            {
                cards.length === 0 ? <p className="text-center text-2xl p-5 font-bold">Card is Not  empty
                 </p> :
                
                <>
                 <div className="space-y-5 mt-5">
             {
                cards.map(item=>
                <div className=" border rounded-lg p-3" key={item.id}>
                    <div className="flex items-center gap-2">
                        <h2 className="">{item.icon}</h2>
                          <h2 className="text-xl font-semibold">{item.name}</h2>
                    </div>
                    <h2 className="font-bold text-gray-400  text-2xl">{item.price}</h2>
                    <div >
                        <button onClick={()=> handleRemove(item)} className="items-center bg-red-600 text-white rounded-lg">Remove</button>
                    </div>
                </div>
                
            )}

           </div>
           <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl font-bold">
            <h2>Total</h2>
            <h2>${totalPrice}</h2>
           </div>

           <button onClick={handlePayment} className="btn w-full bg-[#4F39F6] text-white text-2xl mt-5 rounded-lg">Proceed to Checkout</button>
                </>
            }
          
        </div>
    );
};

export default Card;