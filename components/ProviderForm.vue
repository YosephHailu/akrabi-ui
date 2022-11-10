<template>
  <div>
    <form class="" @submit.prevent="register">
      <div class="bg-white shadow-md rounded pt-6 pb-8 mb-4 px-8 ">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          v-model="provider.name" id="name" type="text" placeholder="Select name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="job category">
            Job category
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              v-model="provider.job_category_id" id="job_category" type="text" placeholder="job category">
              <option value="" selected>Select job category</option>
              <template v-if="job_categories">
                  <option v-for="JobCategory in job_categories.data" :key="JobCategory.id" :value="JobCategory.id">{{ JobCategory.name }}</option>
              </template>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="employment type">
            Employment type
          </label>
          <select v-model="provider.employment_type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="employment_type" type="text" placeholder="employment type">
            <option value="" selected>Select employment type</option>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="part time">On time</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
            Minimum amount
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="provider.amount" id="amount" type="number" autocomplete="off" step="any" placeholder="amount">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Address">
            Address
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :value="displayProviderLocation" id="Address" type="text" autocomplete="off" placeholder="Select on map">
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
import { JOB_CATEGORY_QUERY } from '~/schema/JobCategory';
  export default {
    name: "ProviderForm",
    props: ["selectedLocation"],
    data() {
      return {
        provider: {
          job_category_id: '',
          employment_type: ''
        },
        job_categories: [],
      }
    },
    apollo: {
        job_categories: {
            query: JOB_CATEGORY_QUERY,
            prefetch: true,
        },
    },
    computed: {
      displayProviderLocation() {
        if(this.selectedLocation) 
          return `${ this.selectedLocation.lat()} -  ${this.selectedLocation.lng()}`
        return null
      }
    },
    methods: {
      register() {
        console.log(this.provider)
        this.$apollo
        .mutate({
          mutation: REGISTER_PROVIDER_MUTATION,
          variables: this.category,
        })
        .then(({ data }) => {
          this.successNotification("Board registered successfully!");
          this.startFresh(event);
        })
        .catch(({ error }) => {
          console.log(error);
        });
      }
    },
    
    watch: {
      selectedLocation(newValue) {
        this.provider.location = newValue
        console.log(newValue.lat())
      }
    },
  }
</script>