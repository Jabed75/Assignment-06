import React from 'react';

const Sectoin1 = () => {
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
            <p className='mb-10 p-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch p-6">
  
 
  <div className="border rounded-2xl p-6 w-72 shadow-md flex flex-col justify-between bg-white hover:shadow-xl transition">

    <div>
      <h2 className='text-2xl font-bold mb-1'>Starter</h2>
      <p className='text-gray-500 mb-4'>Perfect for getting started</p>

      <h2 className='text-3xl font-bold mb-4'>
        $0<span className="text-base text-gray-500 font-normal">/month</span>
      </h2>

      <p className='text-gray-600 mb-2'>✔ Access to 10 free tools</p>
      <p className='text-gray-600 mb-2'>✔ Basic templates</p>
      <p className='text-gray-600 mb-2'>✔ Community support</p>
      <p className='text-gray-600 mb-4'>✔ 1 project per month</p>
    </div>

    <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
      Get Started Free
    </button>
  </div>

  <div className="relative rounded-2xl p-6 w-72 shadow-xl flex flex-col justify-between text-white bg-gradient-to-br from-purple-600 to-indigo-600 scale-105">
    
    <span className="absolute top-0 left-0/2 transform translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl text-black">
      Most Popular
    </span>

    <div>
      <h2 className='text-2xl font-bold mb-1'>Pro</h2>
      <p className='mb-4 text-purple-100'>Best for professionals</p>

      <h2 className='text-3xl font-bold mb-4'>
        $29<span className="text-base font-normal text-purple-200">/month</span>
      </h2>

      <p className='mb-2'>✔ Access to all premium tools</p>
      <p className='mb-2'>✔ Unlimited templates</p>
      <p className='mb-2'>✔ Priority support</p>
      <p className='mb-2'>✔ Unlimited projects</p>
      <p className='mb-4'>✔ Advanced analytics</p>
    </div>

    <button className="w-full bg-white text-purple-600 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
      Start Pro Trial
    </button>
  </div>

  {/* Enterprise */}
  <div className="border rounded-2xl p-6 w-72 shadow-md flex flex-col justify-between bg-white hover:shadow-xl transition">

    <div>
      <h2 className='text-2xl font-bold mb-1'>Enterprise</h2>
      <p className='text-gray-500 mb-4'>For large businesses</p>

      <h2 className='text-3xl font-bold mb-4'>
        $99<span className="text-base text-gray-500 font-normal">/month</span>
      </h2>

      <p className='text-gray-600 mb-2'>✔ Everything in Pro</p>
      <p className='text-gray-600 mb-2'>✔ Team collaboration</p>
      <p className='text-gray-600 mb-2'>✔ Custom integrations</p>
      <p className='text-gray-600 mb-2'>✔ Dedicated support</p>
      <p className='text-gray-600 mb-4'>✔ SLA guarantee</p>
    </div>

    <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
      Contact Sales
    </button>
  </div>

</div>
 </div>
    );
};

export default Sectoin1;