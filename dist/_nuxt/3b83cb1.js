(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{378:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return m})),r.d(e,"b",(function(){return x}));var l,n,o,d=r(65),c=r(44),v=Object(c.a)(l||(l=Object(d.a)(["\n    query($job_category_id: ID, $amount: Float) {\n        jobPreferences(first:50, page: 1, job_category_id: $job_category_id, amount: $amount) {\n            data {\n                id,\n                employment_type,\n                amount,\n                jobCategory {\n                    name,\n                    description,\n                    icon_image,\n                },\n                user {\n                    id,\n                    name,\n                    user_image\n                    status\n                    badge_id\n                    description\n                    verified\n                    current_location {\n                        lat\n                        lng\n                    }\n                }\n            }\n        }\n    }\n"]))),m=Object(c.a)(n||(n=Object(d.a)(["\n    query($id: ID!) {\n        jobPreference(id: $id) {\n            id,\n            employment_type,\n            amount,\n            jobCategory {\n                name,\n                description,\n                icon_image,\n            },\n            user {\n                id,\n                name,\n                user_image\n                status\n                badge_id\n                description\n                verified\n                jobPreferences {\n                id,\n                employment_type,\n                amount,\n                jobCategory {\n                    name,\n                    description,\n                    icon_image,\n                },\n                }\n                current_location {\n                    lat\n                    lng\n                }\n            }\n        }\n    }\n"]))),x=Object(c.a)(o||(o=Object(d.a)(["\n    mutation($amount: Float!, $employment_type: String!, $job_category_id: ID!) {\n        createJobPreference(input: {jobCategory: {connect: $job_category_id}, employment_type: $employment_type, amount: $amount}) {\n            id\n        }\n    }\n"])))},405:function(t,e,r){"use strict";r.r(e);r(61),r(33),r(15);var l={name:"Dashboard",layout:"AdminLayout",middleware:["authenticated"],data:function(){return{jobPreferences:[],chartData:{labels:["January","February","March","January","February","March"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,20,52,70,90,102]},{label:"Data One",color:"#f87079",data:[20,52,70,40,90,10]}]},brands:[]}},apollo:{jobPreferences:{query:r(378).a,prefetch:!0,variables:function(){return this.filter?this.filter:{}}}}},n=r(21),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:w-8/12 xl:w-11/12 mx-auto py-5"},[e("div",{staticClass:"flex flex-wrap -mx-3"},[e("div",{staticClass:"w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5"},[e("nuxt-link",{attrs:{to:"/provider/create"}},[e("div",{staticClass:"border-black/12.5 shadow hover:shadow-xl hover:bg-gray-200 relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"},[e("div",{staticClass:"flex-auto p-6"},[e("div",{staticClass:"flex mb-6"},[e("p",{staticClass:"mb-0 uppercase"},[t._v("My Services")]),t._v(" "),e("div",{staticClass:"min-h-6 mb-0.5 ml-auto block pl-12"})]),t._v(" "),e("img",{staticClass:"w-28",attrs:{src:"cart.gif",alt:""}}),t._v(" "),e("p",{staticClass:"mt-6 mb-0 font-semibold"},[t._v("Add new")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("Click here to add ")])])])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"flex flex-wrap mt-6 -mx-3"},[e("div",{staticClass:"w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12"},[e("div",{staticClass:"relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl"},[e("div",{staticClass:"p-4 bg-blue-800 pb-5"},[e("div",{staticClass:"flex flex-wrap -mx-3"},[t._m(3),t._v(" "),e("div",{staticClass:"flex items-center justify-end text-white w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12"},[e("nuxt-link",{attrs:{to:"/service/create"}},[t._v("Add new")])],1)])]),t._v(" "),e("div",{staticClass:"flex-auto px-4"},[e("ul",{staticClass:"flex flex-col pl-0 mb-0 rounded-lg"},t._l(t.jobPreferences.data,(function(r){return e("li",{key:r.id,staticClass:"relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center"},[e("img",{staticClass:"h-10 w-10 mb-0 mr-4 border border-solid border-gray-600 transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none",attrs:{src:r.jobCategory.icon_image}}),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("h6",{staticClass:"mb-1 text-sm leading-normal text-slate-700 dark:text-white"},[t._v("\n                      "+t._s(r.jobCategory.name)+"\n                    ")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v(t._s(r.employment_type))])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center ml-auto"},[e("p",{staticClass:"relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text"},[t._v("\n                    + $ "+t._s(r.amount)+" "),e("small",[t._v("Birr")])])])]),t._v(" "),e("hr",{staticClass:"h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"})])})),0)])])]),t._v(" "),t._m(4),t._v(" "),e("div",{})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5 sm:mt-0"},[e("div",{staticClass:"border-black/12.5 bg-blue-800 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-clip-border"},[e("div",{staticClass:"flex-auto p-6"},[e("div",{staticClass:"flex mb-4"},[e("p",{staticClass:"mb-0 text-white uppercase"},[t._v("Vendors")]),t._v(" "),e("div",{staticClass:"min-h-6 mb-0.5 ml-auto block pl-12"})]),t._v(" "),e("img",{staticClass:"w-24",attrs:{src:"vendor.gif",alt:""}}),t._v(" "),e("p",{staticClass:"mt-6 mb-0 font-semibold text-white"},[t._v("89")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight text-white"},[t._v("34 with has products")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5"},[e("div",{staticClass:"border-black/12.5 shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl bg-white border-0 border-solid bg-clip-border"},[e("div",{staticClass:"flex-auto p-6"},[e("div",{staticClass:"flex mb-6"},[e("p",{staticClass:"mb-0 uppercase"},[t._v("Orders")]),t._v(" "),e("div",{staticClass:"min-h-6 mb-0.5 ml-auto block pl-12"},[e("input",{staticClass:"rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right",attrs:{checked:"",type:"checkbox"}})])]),t._v(" "),e("img",{staticClass:"w-24 h-24",attrs:{src:"purchas.gif",alt:""}}),t._v(" "),e("p",{staticClass:"mt-6 mb-0 font-semibold"},[t._v("395")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("36 Pending for response")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-full px-3 mt-6 sm:flex-0 lg:mt-0 shrink-0 sm:w-6/12 lg:w-1/4 2xl:w-1/5"},[e("div",{staticClass:"border-black/12.5 shadow-xl bg-blue-800 relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid text-white bg-clip-border"},[e("div",{staticClass:"flex-auto p-6"},[e("div",{staticClass:"flex mb-6"},[e("p",{staticClass:"mb-0 uppercase"},[t._v("Revenue")]),t._v(" "),e("div",{staticClass:"min-h-6 mb-0.5 ml-auto block pl-12"},[e("input",{staticClass:"rounded-10 duration-250 mt-0.5 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right",attrs:{type:"checkbox"}})])]),t._v(" "),e("img",{staticClass:"w-24 h-24",attrs:{src:"transaction.gif",alt:""}}),t._v(" "),e("p",{staticClass:"mt-6 mb-0 font-semibold"},[t._v("$54,355 Birr")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("$15,987: This week")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12"},[t("h6",{staticClass:"mb-0 text-white uppercase font-bold"},[this._v("My Services")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-6/12"},[e("div",{staticClass:"relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700"},[e("div",{staticClass:"p-4 pb-0 rounded-t-2xl"},[e("div",{staticClass:"flex flex-wrap -mx-3"},[e("div",{staticClass:"w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12"},[e("h6",{staticClass:"mb-0 dark:text-white font-bold uppercase"},[t._v("My Work History")])]),t._v(" "),e("div",{staticClass:"flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12"},[e("i",{staticClass:"mr-2 far fa-calendar-alt"}),t._v(" "),e("small",[t._v("01 - 07 June 2021")])])])]),t._v(" "),e("hr",{staticClass:"h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"}),t._v(" "),e("div",{staticClass:"flex-auto px-4"},[e("ul",{staticClass:"flex flex-col pl-0 mb-0 rounded-lg"},[e("li",{staticClass:"relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center"},[e("button",{staticClass:"active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none"},[e("i",{staticClass:"fas fa-arrow-up text-3xs"})]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("h6",{staticClass:"mb-1 text-sm leading-normal text-slate-700 dark:text-white"},[t._v("\n                      via PayPal\n                    ")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("07 June 2021, at 09:00 AM")])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center ml-auto"},[e("p",{staticClass:"relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text"},[t._v("\n                    + $ 4,999\n                  ")])])]),t._v(" "),e("hr",{staticClass:"h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"})]),t._v(" "),e("li",{staticClass:"relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center"},[e("button",{staticClass:"active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none"},[e("i",{staticClass:"fas fa-arrow-up text-3xs"})]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("h6",{staticClass:"mb-1 text-sm leading-normal text-slate-700 dark:text-white"},[t._v("\n                      Partner #90211\n                    ")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("07 June 2021, at 09:00 AM")])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center ml-auto"},[e("p",{staticClass:"relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-emerald-500 to-teal-400 bg-clip-text"},[t._v("\n                    + $ 700\n                  ")])])]),t._v(" "),e("hr",{staticClass:"h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"})]),t._v(" "),e("li",{staticClass:"relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center"},[e("button",{staticClass:"active:shadow-xs active:opacity-85 ease-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none"},[e("i",{staticClass:"fas fa-arrow-down text-3xs"})]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("h6",{staticClass:"mb-1 text-sm leading-normal text-slate-700 dark:text-white"},[t._v("\n                      Services\n                    ")]),t._v(" "),e("span",{staticClass:"text-xs leading-tight"},[t._v("07 June 2021, at 07:10 PM")])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center ml-auto"},[e("p",{staticClass:"relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text"},[t._v("\n                    - $ 1,800\n                  ")])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);