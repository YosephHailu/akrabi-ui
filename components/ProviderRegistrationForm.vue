<template>
  <div>
    <form class="" @submit.prevent="register">
      <div class="bg-white shadow-md rounded pt-6 pb-8 mb-4 px-8 ">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          v-model="account.name" id="name" type="text" placeholder="Select name">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="account.email" id="email" type="text" autocomplete="off" step="any" placeholder="email">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Address">
            Address
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :value="displayProviderLocation" id="Address" type="text" autocomplete="off" placeholder="Select on map">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="account.password" id="Password" type="password">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Password Confirmation">
            Password Confirmation
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="account.password_confirmation" id="Password Confirmation" type="password">
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Join our talent</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
        </p>
      </div>
      <div class="text-center">
        <button class="px-6 pt-4 pb-2 mx-auto">
          <span class="inline-block bg-blue-500 mx-auto rounded-full px-3 py-2 text-sm font-semibold text-gray-200 mr-2 mb-2">Register</span>
        </button>
      </div>
  </form>

  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"
import { ACCOUNT_REGISTRATION_MUTATION } from '~/schema/Provider';
  export default {
    name: "accountForm",
    props: ["selectedLocation"],
    data() {
      return {
        account: {},
      }
    },
    computed: {
      displayProviderLocation() {
        if(this.selectedLocation) 
          return `${ this.selectedLocation.lat()} -  ${this.selectedLocation.lng()}`
        return null
      }
    },
    methods: {
      ...mapActions({
          successNotification: "successNotification",
          errorNotification: "errorNotification",
          infoNotification: "infoNotification",
      }),

      register(event) {
        this.$apollo
        .mutate({
          mutation: ACCOUNT_REGISTRATION_MUTATION,
          variables: this.account,
        })
        .then(({ data }) => {
          console.log('data', data)
          this.successNotification("Account registered successfully!");
          event.target.reset();
          this.$emit('show-login-form');
        })
        .catch(error => {
          console.log('error', error.response);
        });
      }
    },
    
    watch: {
      selectedLocation(newValue) {
        this.account.lat = newValue.lat();
        this.account.lng = newValue.lng();
      }
    },
    
  }
</script>