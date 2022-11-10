<!-- Please remove this file from your project -->
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg z-50 absolute right-72 top-16 bg-blue-300">
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 bg-white dark:text-gray-400">
          <li class="w-1/2">
              <a href="#" @click="onLoginClick" :class="loginTabClasses" 
                class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent  group">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  Login
              </a>
          </li>
          <li class="w-1/2">
              <a href="#" @click="onRegisterClick" :class="registerTabClasses" 
                class="inline-flex p-4 rounded-t-lg  active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  Register
              </a>
          </li>
      </ul>
  </div>
  
  <ProviderRegistrationForm v-if="tab == 'register'" :selectedLocation="selectedLocation" @show-login-form="onLoginClick" />
  <ProviderLoginForm v-if="tab == 'login'" />
</div>
</template>

<script>
import ProviderRegistrationForm from './ProviderRegistrationForm.vue';
import ProviderLoginForm from './ProviderLoginForm.vue';
export default {
    name: "NuxtTutorial",
    props: ["selectedLocation"],
    components: { ProviderRegistrationForm, ProviderLoginForm },
    data() {
        return {
            tab: "register",
            // registerTabClasses: "text-blue-600 border-blue-600"
        }
    },
    computed: {
        registerTabClasses() {
            return {
                "text-blue-600 border-blue-600  border-b-2": this.tab == "register"
            }
        },
        loginTabClasses() {
            return {
                "text-blue-600 border-blue-600  border-b-2": this.tab == "login"
            }
        },
    },
    methods: {
        onLoginClick() {
            console.log(this.tab, 'tab');
            this.tab = "login"
        },
        onRegisterClick() {
            console.log(this.tab);
            this.tab = "register"
        }
    }
}
</script>
