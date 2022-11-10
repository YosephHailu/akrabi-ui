<template>
    <div class="lg:w-8/12 xl:w-11/12 mx-auto py-5">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/5">
            <nuxt-link to="/provider/create">
                <div
                    class="border-black/12.5 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                    <div class="flex-auto p-6">
                    <div class="flex mb-6">
                        <p class="mb-0 uppercase">My Services</p>
                        <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                        </div>
                    </div>
                    <img src="cart.gif" class="w-28" alt="">
        
                    <p class="mt-6 mb-0 font-semibold">Add new</p>
                    <span class="text-xs leading-tight">Click here to add </span>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/5 sm:mt-0">
          <div
            class="border-black/12.5 bg-blue-800 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-4">
                <p class="mb-0 text-white uppercase">Vendors</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                </div>
              </div>
              <img src="vendor.gif" class="w-24" alt="">
              <p class="mt-6 mb-0 font-semibold text-white">89</p>
              <span class="text-xs leading-tight text-white">34 with has products</span>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/5">
          <div
            class="border-black/12.5 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl bg-white border-0 border-solid bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-6">
                <p class="mb-0 uppercase">Orders</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                  <input
                    checked=""
                    class="rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                  />
                </div>
              </div>
              <img src="purchas.gif" class="w-24 h-24" alt="">
              <p class="mt-6 mb-0 font-semibold">395</p>
              <span class="text-xs leading-tight">36 Pending for response</span>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/5">
          <div
            class="border-black/12.5 shadow-xl bg-blue-800 relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid text-white bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-6">
                <p class="mb-0 uppercase">Revenue</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                  <input
                    class="rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                  />
                </div>
              </div>
              <img src="transaction.gif" class="w-24 h-24" alt="">
              <p class="mt-6 mb-0 font-semibold">$54,355 Birr</p>
              <span class="text-xs leading-tight">$15,987: This week</span>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/5">
          <div
            class="border-black/12.5 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-10">
                <p class="mb-0 uppercase">Products</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                  <input
                    class="rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                  />
                </div>
              </div>
              <svg
                width="70"
                viewBox="0 0 306 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f)">
                  <path
                    d="M165.907 35.625C165.907 35.625 156.143 48.861 148.512 48.425C138.946 47.863 137.312 36.325 128.444 35.625C119.166 35.764 118.219 47.725 108.163 48.425C99.1529 48.264 95.3359 35.843 86.7469 35.625C78.1579 35.407 69.0029 48.425 69.0029 48.425"
                    stroke="#CED4DA"
                    stroke-width="16"
                    stroke-linecap="round"></path>
                  <path
                    d="M154.919 103.625C154.919 103.625 140.219 116.861 128.726 116.425C114.326 115.863 111.855 104.325 98.508 103.625C84.538 103.764 83.108 115.725 67.969 116.425C54.403 116.262 48.655 103.842 35.719 103.625C22.783 103.408 9 116.425 9 116.425"
                    stroke="#CED4DA"
                    stroke-width="16"
                    stroke-linecap="round"></path>
                  <path
                    d="M238.919 157.625C238.919 157.625 224.219 170.861 212.726 170.425C198.326 169.863 195.855 158.325 182.508 157.625C168.538 157.764 167.108 169.725 151.969 170.425C138.403 170.262 132.655 157.842 119.719 157.625C106.783 157.408 93 170.425 93 170.425"
                    stroke="#CED4DA"
                    stroke-width="16"
                    stroke-linecap="round"></path>
                  <path
                    d="M220.25 19.4441L257.266 111.061"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M229.482 41.7656L207.122 31.8528"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M229.482 41.7655L239.189 18.897"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M249.223 90.6272L240.025 113.29"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M249.223 90.6271L272.091 100.334"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M190.205 58.6675L288.055 72.4195"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M214.151 61.834L194.387 76.2415"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M214.151 61.834L199.2 41.9931"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M266.338 69.1682L281.365 88.4654"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M266.338 69.1682L286.179 54.217"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M209.151 104.299L269.986 26.4342"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M223.866 85.1443L226.461 109.465"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M223.866 85.1442L199.208 88.1718"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M256.311 43.6169L280.536 40.2513"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <path
                    d="M256.311 43.6168L253.283 18.9585"
                    stroke="#CED4DA"
                    stroke-width="10"
                    stroke-linecap="round"></path>
                  <circle cx="239.321" cy="66.5" r="8.5" fill="white"></circle>
                </g>
                <defs>
                  <filter
                    id="filter0_f"
                    x="0"
                    y="10.9402"
                    width="294.703"
                    height="168.495"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"></feBlend>
                    <feGaussianBlur
                      stdDeviation="0.5"
                      result="effect1_foregroundBlur"></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              <p class="mt-10 mb-0 font-semibold">3, 967</p>
              <span class="text-xs leading-tight">35 in avarage day</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12">
          <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
            <div class="p-4 pb-0 rounded-t-2xl">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <h6 class="mb-0 dark:text-white">Transactions</h6>
                </div>
                <div
                  class="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <i class="mr-2 far fa-calendar-alt"></i>
                  <small>23 - 30 March 2021</small>
                </div>
              </div>
            </div>
            <div class="flex-auto p-4">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li
                  class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-down text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          Netflix
                        </h6>
                        <span class="text-xs leading-tight">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                        - $ 2,500
                      </p>
                    </div>
                  </div>
                  <hr
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
                  />
                </li>
                <li
                  class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          Apple
                        </h6>
                        <span class="text-xs leading-tight">23 March 2020, at 04:30 AM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-green-600 bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text">
                        + $ 2,000
                      </p>
                    </div>
                  </div>
                  <hr
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
                  />
                </li>
                <li
                  class="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          Partner #22213
                        </h6>
                        <span class="text-xs leading-tight">19 March 2020, at 02:50 AM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text">
                        + $ 1,400
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-6/12">
          <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
            <div class="p-4 pb-0 rounded-t-2xl">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <h6 class="mb-0 dark:text-white">Revenue</h6>
                </div>
                <div
                  class="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <i class="mr-2 far fa-calendar-alt"></i>
                  <small>01 - 07 June 2021</small>
                </div>
              </div>
            </div>
            <div class="flex-auto p-4">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li
                  class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          via PayPal
                        </h6>
                        <span class="text-xs leading-tight">07 June 2021, at 09:00 AM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text">
                        + $ 4,999
                      </p>
                    </div>
                  </div>
                  <hr
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
                  />
                </li>
                <li
                  class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          Partner #90211
                        </h6>
                        <span class="text-xs leading-tight">07 June 2021, at 09:00 AM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text">
                        + $ 700
                      </p>
                    </div>
                  </div>
                  <hr
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
                  />
                </li>
                <li
                  class="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <button
                        class="active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
                        <i class="fas fa-arrow-down text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          Services
                        </h6>
                        <span class="text-xs leading-tight">07 June 2021, at 07:10 PM</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                        - $ 1,800
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="">
        </div>
      </div>
  
      <div class="xl:flex mt-10">
        <div class="space-y-4 xl:w-4/12 xl:px-12">
          <div class="text-center mb-8">
            <h3 class="text-lg font-bold leading-6 text-gray-900 uppercase">BRAND SUMMERY</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
          </div>
        </div>
  
        <div class="xl:w-8/12 w-full self-start">
          <div class="text-center mb-6">
            <h3 class="text-lg font-bold leading-6 text-gray-900 uppercase">Statistics</h3>
            <p class="mt-1 text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div class="flex space-x-4"> 
            <div
              class="p-3 w-6/12 min-w-0 break-words bg-pink-100 border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 
                bg-clip-border dark:border-slate-700">
              <div class="p-4 pb-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                    <h6 class="mb-0 dark:text-whi`te">Revenue</h6>
                  </div>
                  <div
                    class="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                    <i class="mr-2 far fa-calendar-alt"></i>
                    <small>01 - 07 June 2021</small>
                  </div>
                </div>
              </div>
  
              <line-chart
                :chart-data='chartData'
                chart-id='myCustomId'
              />
            </div>
  
            <div
              class="p-3 pt-1 w-6/12 min-w-0 break-words bg-yellow-100 border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
              <div class="p-4 pb-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                    <h6 class="mb-0 dark:text-whi`te">Revenue</h6>
                  </div>
                  <div
                    class="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                    <i class="mr-2 far fa-calendar-alt"></i>
                    <small>01 - 07 June 2021</small>
                  </div>
                </div>
              </div>
  
              <bar-chart
                :chart-data='chartData'
                chart-id='myCustomId'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "Dashboard",
      layout: "AdminLayout",
      middleware: ['authenticated'],
      data() {
        return {
          chartData: {
            labels: ["January", "February", "March", "January", "February", "March"],
            datasets: [
              {
                  label: "Data One",
                  backgroundColor: "#f87979",
                  data: [40, 20, 52, 70, 90, 102]
              },
              {
                  label: "Data One",
                  color: "#f87079",
                  data: [20, 52, 70, 40, 90, 10]
              }
            ]
          },
          brands: [],
        };
      },
  };
  </script>
  