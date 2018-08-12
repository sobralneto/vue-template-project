<template>
  <div id="app">
    <div id="nav">
      <span v-if="isLoggedIn">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
       <button class="btn btn-sm btn-danger" @click="logout">Logout</button>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
  },
  created () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>

</style>
