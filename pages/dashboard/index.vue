<template>
    <div class="lg:w-8/12 xl:w-11/12 mx-auto py-5">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5">
          <nuxt-link to="/provider/create">
            <div
                class="border-black/12.5 shadow hover:shadow-xl hover:bg-gray-200 relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
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
          class="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5 sm:mt-0">
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
          class="w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5">
          <div
            class="border-black/12.5 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl bg-white border-0 border-solid bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-6">
                <p class="mb-0 uppercase">Orders</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                  <input
                    checked=""
                    class="rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"/>
                </div>
              </div>
              <img src="purchas.gif" class="w-24 h-24" alt="">
              <p class="mt-6 mb-0 font-semibold">395</p>
              <span class="text-xs leading-tight">36 Pending for response</span>
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5">
          <div
            class="border-black/12.5 shadow-xl bg-blue-800 relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid text-white bg-clip-border">
            <div class="flex-auto p-6">
              <div class="flex mb-6">
                <p class="mb-0 uppercase">Revenue</p>
                <div class="min-h-6 mb-0.5 ml-auto block pl-12">
                  <input
                    class="rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                    type="checkbox"/>
                </div>
              </div>
              <img src="transaction.gif" class="w-24 h-24" alt="">
              <p class="mt-6 mb-0 font-semibold">$54,355 Birr</p>
              <span class="text-xs leading-tight">$15,987: This week</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12">
          <div
            class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl ">
            <div class="p-4 bg-blue-800 pb-5">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <h6 class="mb-0 text-white uppercase font-bold">My Services</h6>
                </div>
                <div
                  class="flex items-center justify-end text-white w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <nuxt-link to="/service/create">Add new</nuxt-link>
                </div>
              </div>
            </div>

            <div class="flex-auto px-4">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li v-for="jobPreference in jobPreferences.data " :key="jobPreference.id"
                  class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                  <div class="flex">
                    <div class="flex items-center">
                      <img
                        :src="jobPreference.jobCategory.icon_image"
                        class="h-10 w-10 mb-0 mr-4 border border-solid border-gray-600  transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none"/>
                      <div class="flex flex-col">
                        <h6
                          class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                          {{ jobPreference.jobCategory.name }}
                        </h6>
                        <span class="text-xs leading-tight">{{ jobPreference.employment_type }}</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-center ml-auto">
                      <p
                        class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                        + $ {{jobPreference.amount}} <small>Birr</small>
                      </p>
                    </div>
                  </div>
                  <hr
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
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
                  <h6 class="mb-0 dark:text-white font-bold uppercase">My Work History</h6>
                </div>
                <div
                  class="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                  <i class="mr-2 far fa-calendar-alt"></i>
                  <small>01 - 07 June 2021</small>
                </div>
              </div>
            </div>
            
            <hr class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>    

            <div class="flex-auto px-4">
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
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
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
                    class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
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
    </div>
</template>
  
<script>
  import { JOB_PREFERENCE_QUERY } from '~/schema/JobPreference';

  export default {
      name: "Dashboard",
      layout: "AdminLayout",
      middleware: ['authenticated'],

      data() {
        return {
          jobPreferences: [],
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

      apollo: {
        jobPreferences: {
          query: JOB_PREFERENCE_QUERY,
          prefetch: true,
          variables() {
            if (this.filter) return this.filter;
            return {};
          }
        },
      },

  };
</script>
  