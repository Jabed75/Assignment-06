import React, {  use,   } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelPromise, cards, setCards}) => {
    const models=use(modelPromise)
    
 
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {models.map(model=> (
                <ModelCard key ={model.id}model={model} cards={cards} setCards={setCards}/>
                ))}
        
        </div>
        </div>
    );
};

export default Models;