import React from 'react';

const Footersection = () => {
    return (
        <div class="bg-[#050b17] text-white p-8 md:p-16  border-blue-500">
  
  <div class="max-w-7xl mx-auto  border-dashed border-blue-400/50 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
    
    <div class="lg:col-span-2">
      <h2 class="text-4xl text-white mb-4  bg-clip-text text-transparent">
        DigiTools
      </h2>
      <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Product</h3>
      <ul class="space-y-3 text-gray-400 text-sm">
        <li class="hover:text-green-400 cursor-pointer">Features</li>
        <li class="hover:text-green-400 cursor-pointer">Pricing</li>
        <li class="hover:text-green-400 cursor-pointer">Templates</li>
        <li class="hover:text-green-400 cursor-pointer">Integrations</li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Company</h3>
      <ul class="space-y-3 text-gray-400 text-sm">
        <li class="hover:text-green-400 cursor-pointer">About</li>
        <li class="hover:text-green-400 cursor-pointer">Blog</li>
        <li class="hover:text-green-400 cursor-pointer">Careers</li>
        <li class="hover:text-green-400 cursor-pointer">Press</li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Social Links</h3>
      <div class="flex gap-3">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
    
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-6  border-dashed border-blue-400/50 p-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
    <p>© 2026 DigiTools. All rights reserved.</p>
    <div class="flex gap-8 mt-4 md:mt-0">
      <span class="hover:text-white cursor-pointer">Privacy Policy</span>
      <span class="hover:text-white cursor-pointer">Terms of Service</span>
      <span class="hover:text-white cursor-pointer">Cookies</span>
    </div>
  </div>
</div>
    );
};

export default Footersection;