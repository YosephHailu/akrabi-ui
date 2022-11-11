<template>
  <div class="relative">
    <ServiceRegistrationForm :selectedLocation="selectedLocation" />

    <GMap
      ref="gMap"
      language="en"
      :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="14"
      @loaded="findCurrentLocation"
      @click="onMapClick"
    >
    </GMap>
  </div>
</template>

<script>
import ServiceRegistrationForm from '~/components/ServiceRegistrationForm.vue';
import { mapStyle } from '../../common/mapStyle'
export default {
    components: { ServiceRegistrationForm },
    name: "IndexPage",
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
            selectedLocation: null,
            mapStyle: mapStyle,
            clusterStyle: [
                {
                    url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                    width: 56,
                    height: 56,
                    textColor: "#fff",
                },
            ],
        };
    },
    methods: {
        onMapClick(event) {
            this.location = event.event.latLng;
            let marker = new this.$refs.gMap.google.maps.Marker({
                position: this.location,
                map: event.map,
                options: { icon: "/current_location.gif" }
            });
            event.map.markers.forEach((map) => {
                map.setMap(null);
            });
            event.map.markers.push(marker);
            this.selectedLocation = this.location;
        },
        findCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    this.location = pos;
                    let marker = new this.$refs.gMap.google.maps.Marker({
                        position: this.location,
                        map: this.$refs.gMap.map,
                        options: { icon: "current_location.gif" }
                    });
                    this.$refs.gMap.map.markers.push(marker);
                }, () => {
                });
            }
            else {
                // Browser doesn't support Geolocation
            }
        }
    },
}
</script>

<style>
.GMap__Wrapper {
  height: 100vh;
}
</style>
