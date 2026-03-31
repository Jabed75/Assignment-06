

const Card = ({cards}) => {
    console.log(cards);
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Your Card</h1>
            {
                cards.map(item=><div key={item.id}>
                    <div>
                        <h2>{item.icon}</h2>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Card;