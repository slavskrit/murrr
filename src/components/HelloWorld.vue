<template>
  <div>
    <div v-if="isSignedIn">
      <button @click="logout()" type="button">Logout</button>
      {{ userName }}
    </div>
    <button
      :disabled="isSignedIn === null"
      @click="login()"
      type="button"
      v-if="!isSignedIn"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isSignedIn: null, // (1) Track authenticated state
    };
  },
  created() {
    // (2) Subscribe to authentication status changes
    this.$gapi.listenUserSignIn((isSignedIn) => {
      this.isSignedIn = isSignedIn;
    });
  },
  methods: {
    // (3) Expose $gapi methods
    login() {
      console.log(this.$gapi.login());
      this.$gapi.login();
    },
    logout() {
      this.$gapi.logout();
    },
  },
  computed: {
    userName() {
      const user = this.$gapi.getUserData();

      if (user) {
        return user.firstName;
      }
    },
  },
};
</script>

<style>
</style>
