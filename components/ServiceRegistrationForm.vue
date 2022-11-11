<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg z-50 absolute right-72 top-16 bg-blue-300">
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 bg-white dark:text-gray-400">
          <li class="w-full">
              <a href="#" class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  Add your services
              </a>
          </li>
      </ul>
    </div>

    <form class="" @submit.prevent="register">
      <div class="bg-white shadow-md rounded pt-6 pb-8 mb-4 px-8">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="job category">
            Job category
          </label>
          <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="jobPreference.job_category_id"
            id="job_category"
            type="text"
            placeholder="job category">
            <option value="" selected>Select job category</option>
            <template v-if="job_categories">
              <option
                v-for="JobCategory in job_categories.data"
                :key="JobCategory.id"
                :value="JobCategory.id">
                {{ JobCategory.name }}
              </option>
            </template>
          </select>
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="employment type">
            Employment type
          </label>
          <select
            v-model="jobPreference.employment_type"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="employment_type"
            type="text"
            placeholder="employment type">
            <option value="" selected>Select employment type</option>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="part time">On time</option>
          </select>
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="amount">
            Minimum amount
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="jobPreference.amount"
            id="amount"
            type="number"
            autocomplete="off"
            step="any"
            placeholder="amount"
          />
        </div>

      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Join our talent</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia.
        </p>
      </div>
      <div class="text-center">
        <button class="px-6 pt-4 pb-2 mx-auto">
          <span
            class="inline-block bg-blue-500 mx-auto rounded-full px-3 py-2 text-sm font-semibold text-gray-200 mr-2 mb-2">Register</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { JOB_CATEGORY_QUERY } from '~/schema/JobCategory'
import { REGISTER_JOB_PREFERENCE_MUTATION } from '~/schema/JobPreference'
export default {
  name: 'ProviderForm',
  props: ['selectedLocation'],
  data() {
    return {
      jobPreference: {
        job_category_id: '',
        employment_type: '',
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
      if (this.selectedLocation)
        return `${this.selectedLocation.lat()} -  ${this.selectedLocation.lng()}`
      return null
    },
  },
  methods: {
    ...mapActions({
        successNotification: "successNotification",
        errorNotification: "errorNotification",
        infoNotification: "infoNotification",
    }),

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.jobPreference.image = files[0];
    },

    register() {
      console.log(this.jobPreference)
      this.jobPreference.amount = parseFloat(this.jobPreference.amount);
      this.$apollo
        .mutate({
          mutation: REGISTER_JOB_PREFERENCE_MUTATION,
          variables: this.jobPreference,
        })
        .then(({ data }) => {
          console.log(data)
          this.successNotification('Service registered successfully!')
          this.startFresh(event)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },

  watch: {
    selectedLocation(newValue) {
      this.jobPreference.lat = newValue.lat();
      this.jobPreference.lng = newValue.lng();
      console.log(newValue.lat())
    },
  },
}
</script>
