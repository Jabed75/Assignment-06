import React from 'react';

const Banner1 = () => {
    return (
        <div className='bg-[#4F39F6] min-h-[20vh]' style={{ marginBottom: '200px' }}>
           <div className='flex justify-around items-center'>
             <div>
                <h1 className='text-2xl text-white'>50K+</h1>
                 <p className='text-xl text-white'>Active user</p>
             </div>
            <div>
              <h1 className='text-2xl text-white'>200+</h1>
            <p className='text-xl text-white'>Primiun user</p> 
            </div>
            <div>
                <h1 className='text-2xl text-white'>4.9</h1>
            <p className='text-xl text-white'>Rating</p>
            </div>
           </div>
        </div>
      
    );
};

export default Banner1;