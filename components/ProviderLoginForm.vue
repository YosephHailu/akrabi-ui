<template>
  <div>
    <form @submit.prevent="login" class="bg-white shadow-md rounded pt-6">
      <div class="p-8">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email address
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            v-model="credential.username" id="email" type="text" placeholder="Enter email address">
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="credential.password" id="password" type="password" placeholder="password">
        </div>
      </div>
      <div class="bg-blue-200">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Join our talent</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 text-center">
          <button type="submit" class="inline-block bg-blue-500 mx-auto rounded-full px-3 py-2 text-sm font-semibold text-gray-200 mr-2 mb-2">login</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapActions } from "vuex"
import { LOGIN_MUTATION } from '~/schema/Provider';
  export default {
    name: "loginForm",
    data() {
      return {
        credential: {
          username: "admin@mail.com",
          password: "password",
        },
      }
    },
    methods: {
      ...mapActions({
          successNotification: "successNotification",
          errorNotification: "errorNotification",
          infoNotification: "infoNotification",
      }),

      login(event) {
          this.loginBtnLoading = true;
          this.$auth.loginWith("graphql", this.credential)
              .then(result => {
                console.log('lll', result);
              this.loginBtnLoading = false;
              this.successNotification("Authenticated Successfully!");
              this.$router.push('/')
          }).catch(error => {
            console.log(error)
              this.loginBtnLoading = false;
              this.errorNotification("Authentication Failed!");
          });
      }
    },
    
  }
</script>
