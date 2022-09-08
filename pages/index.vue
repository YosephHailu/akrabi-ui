<template>
  <div class="relative">
    <HomePageTab @onFilter="onFilter" />

    <GMap
      ref="gMap"
      language="en"
      :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="13"
      @click="logIt"
      @loaded="mapLoaded">
    </GMap>
  </div>
</template>

<script>
import { mapStyle } from "../common/mapStyle"
import HomePageTab from "~/components/HomePageTab.vue";
import { watch } from 'vue';
import { JOB_PREFERENCE_QUERY } from "~/schema/JobPreference";

export default {
  name: "IndexPage",
  data() {
    return {
      currentLocation: {
          lat: 8.9806,
          lng: 38.7578
      },
      filter: {
      },
      markers: [],
      mapStyle: mapStyle,
      clusterStyle: [
          {
              url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
              width: 56,
              height: 56,
              textColor: "#fff"
          }
      ]
    };
  },
  components: { HomePageTab },

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

  watch: {
    jobPreferences(newValue) {
      newValue.data.forEach(preference => {
        if(this.$refs.gMap.map) {
          this.$refs.gMap.map.markers.forEach((marker) => {
            marker.setMap(null);
          })
          this.addMarker(this.$refs.gMap.map, preference);
        }

      })
    }
  },
  methods: {
    logIt() {
      console.log(this.jobPreferences)
    }, 
    mapLoaded() {
      if(this.jobPreferences) {
        this.jobPreferences.data.forEach(preference => {
          this.addMarker(this.$refs.gMap.map, preference);
        })
      }
    },
    addMarker(map, preference) {
      const contentString = `
        <div class="container max-w-sm bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
            <div class="h-1/4 sm:h-40 overflow-hidden"> 
              <img class="w-full rounded-t" src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" alt="Photo by aldi sigun on Unsplash">
            </div>
            <div class="flex justify-start px-5 -mt-12 mb-5">
              <span clspanss="block relative h-32 w-32">
                <img alt="Photo by aldi sigun on Unsplash" src="${preference.provider.provider_image}" class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1">
              </span>
            </div>
            <div class="">
              <div class="px-7">
                <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">${ preference.jobCategory.name }</h2>
                <p class="text-gray-400 text-xl uppercase dark:text-gray-400">${ preference.provider.name }</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">${ preference.provider.description }</p>

                <div class="flex items-center justify-center mt-8">
                  <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <button
                      class="rounded-l px-2 py-2.5 bg-green-700 text-white
                        font-medium text-xs leading-tight uppercase
                        hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0
                        active:bg-green-800 transition
                        duration-150 ease-in-out"> $150 Birr
                    </button>
                    <button
                      class="px-6 py-2.5
                        bg-green-900 text-white
                        font-medium text-xs
                        leading-tight uppercase
                        hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0
                        active:bg-green-800 transition
                        duration-150 ease-in-out">
                        Hire now
                    </a>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                  <button class="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                    <svg class="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                        </path>
                      </g>
                    </svg>
                  </button>
                  <button class="text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
                    <img height="22px" width="22px" src="https://www.svgrepo.com/show/5236/phone-call.svg" alt="">
                  </button>
                  <button class="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                    <svg class="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                      </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>`;

      const infowindow = new this.$refs.gMap.google.maps.InfoWindow({
        content: contentString,
      });

      let marker = new this.$refs.gMap.google.maps.Marker({
        position: preference.provider.location,
        options: {icon: preference.jobCategory.icon_image},
        title: preference.jobCategory.name,
      });

      marker.setMap(this.$refs.gMap.map);

      this.markers.push(marker)
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map: this.$refs.gMap.map,
        });
      });
    },
    onFilter(filter) {
      this.markers.forEach(marker => {
        marker.setMap(null);
      })

      this.filter = filter;
      // this.filter.job_category_id = filter.job_category_id;
      if(this.filter.amount) {
        this.filter.amount = parseFloat(filter.amount);
      } else {
        delete this.filter.amount;
      }
      this.$apollo.queries.jobPreferences.refresh()
    }
  },
}
</script>

<style>
  .GMap__Wrapper {
    height: 100vh;
  }
  .gm-style-iw-d {
    overflow: hidden !important;
  }
  .container {
    margin: 0px;
  }
  .gm-style-iw-d {
    overflow: scroll !important;
  }
</style>