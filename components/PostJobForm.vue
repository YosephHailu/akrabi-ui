<template>
</template>

<script>
  export default {
    name: "ProviderForm",
    data() {
      return {
        provider: {},
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
    }
  }
</script>