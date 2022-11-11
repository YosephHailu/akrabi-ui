<template>
  <div class="relative">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg z-50 absolute lg:right-20 xl:right-72 h-full bg-blue-300">
      <div class="bg-gray-400 py-4">
        <div class="h-1/4 sm:h-40 overflow-hidden">
          <img
            class="w-full rounded-t"
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
            alt="Photo by aldi sigun on Unsplash"/>
        </div>
        <div class="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <img
              :src="jobPreference.user.user_image"
              class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"/>
          </span>

          <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            <button
              class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
              <svg
                class="w-7 h-7 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </button>
            <a
              href="tel:+251923760796"
              class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
              <img
                height="22px"
                width="22px"
                src="https://www.svgrepo.com/show/5236/phone-call.svg"
                alt=""/>
            </a>
            <button
              class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
              <svg
                class="w-7 h-7 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="">
          <div class="px-7">
            <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">
              {{ jobPreference.jobCategory.name }}
            </h2>
            <p class="text-gray-800 text-xl uppercase dark:text-gray-400">
              {{ jobPreference.user.name }}
            </p>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ jobPreference.user.description }}
            </p>

            <div class="mt-4 text-right">
              <div
                class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                role="group">
                <button
                  class="rounded-l px-2 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">
                  {{ jobPreference.amount }} Birr
                </button>
                <button
                  class="px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase hover:bg-green-900 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">
                  Hire now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:flex-0 shrink-0">
        <div
          class="relative flex flex-col h-full min-w-0 break-words bg-transparent bg-gray-300 shadow">
          <div class="p-4 pb-0 rounded-t-2xl">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3 md:flex-0 shrink-0">
                <h6 class="mb-0 dark:text-white font-bold uppercase">
                  Other services provided by me
                </h6>
              </div>
            </div>
          </div>

          <hr
            class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>

          <div class="">
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <nuxt-link
                v-for="jobPreference in jobPreference.user.jobPreferences"
                :key="jobPreference.id" :to="`/provider/${jobPreference.id}`"
                class="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0text-inherit hover:bg-gray-400">
                <div class="flex pl-5 pr-3">
                  <div class="flex items-center">
                    <img
                      :src="jobPreference.jobCategory.icon_image"
                      class="h-10 w-10 mb-0 mr-4 mt-1 border border-solid border-gray-600 transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none"/>
                    <div class="flex flex-col">
                      <h6
                        class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                        {{ jobPreference.jobCategory.name }}
                      </h6>
                      <span class="text-xs leading-tight">{{
                        jobPreference.employment_type
                      }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-center ml-auto">
                    <p
                      class="relative z-10 inline-block mb-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                      + $ {{ jobPreference.amount }} <small>Birr</small>
                    </p>
                  </div>
                </div>
                <hr
                  class="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <GMap
      ref="gMap"
      language="en"
      :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="14"
      @loaded="findCurrentLocation"
      @click="onMapClick">
    </GMap>
  </div>
</template>

<script>
import ServiceRegistrationForm from '~/components/ServiceRegistrationForm.vue'
import { SINGLE_JOB_PREFERENCE_QUERY } from '~/schema/JobPreference'
import { mapStyle } from '../../common/mapStyle'
export default {
  components: { ServiceRegistrationForm },
  name: 'IndexPage',
  data() {
    return {
      marker: null,
      location: {
        lat: 8.9806,
        lng: 38.7578,
      },
      currentLocation: {
        lat: 8.9806,
        lng: 38.7578,
      },
      jobPreference: {
        jobCategory: {},
        user: {},
      },
      selectedLocation: null,
      mapStyle: mapStyle,
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
  apollo: {
    jobPreference: {
      query: SINGLE_JOB_PREFERENCE_QUERY,
      prefetch: true,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  methods: {
    onMapClick(event) {
      this.location = event.event.latLng
      let marker = new this.$refs.gMap.google.maps.Marker({
        position: this.location,
        map: event.map,
        options: { icon: '/current_location.gif' },
      })
      event.map.markers.forEach((map) => {
        map.setMap(null)
      })
      event.map.markers.push(marker)
      this.selectedLocation = this.location
    },
    findCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            this.location = pos
            let marker = new this.$refs.gMap.google.maps.Marker({
              position: this.location,
              map: this.$refs.gMap.map,
              options: { icon: 'current_location.gif' },
            })
            this.$refs.gMap.map.markers.push(marker)
          },
          () => {}
        )
      } else {
        // Browser doesn't support Geolocation
      }
    },
  },
}
</script>

<style>
.GMap__Wrapper {
  height: 100vh;
}
</style>
