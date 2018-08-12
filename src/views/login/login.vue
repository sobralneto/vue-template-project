<template>
  <div v-cloak>
    <div id="LoginForm" :style="height">
      <div class="h-100 row m-0 align-items-center">
        <div class="col-md-4 col-sm-11 mx-auto bg-white shadow-sm rounded p-5">
          <div class="col-12">
            <center><img src="../../assets/logo-empresa.png" width="250"></center>
          </div>
          <div class="col-12 mt-4 pt-4">
            <form id="Login" @submit.prevent="login">
              <div class="form-group mb-2">
                <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu login/email" v-model="username">
              </div>
              <div class="form-group mb-2">
                <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha" v-model="password">
              </div>
              <button type="submit" class="btn btn-teal btn-block p-2" :disabled="disabled">Login</button>
              <div v-show="msgAuth" v-bind:class="['mt-4 mb-0 alert', {'alert-success': authStatus, 'alert alert-danger': !authStatus}]">
                {{ msgAuth }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      username: 'vue_template@gmail.com',
      password: 'templatevue',
      authStatus: true,
      msgAuth: '',
      disabled: false,
      height: `height: ${window.innerHeight}px;`
    }
  },
  created () {
    this.$store.dispatch('logout')
  },
  methods: {
    login: function () {
      this.msgAuth = 'Realizando login'
      this.disabled = true
      this.authStatus = true
      let usuario = {
        username: this.username,
        password: this.password
      }
      // calling vuex action
      this.$store.dispatch('login', usuario)
        .then((response) => {
          this.msgAuth = response
          this.$router.push('/usuario')
        })
        .catch((error) => {
          this.disabled = false
          this.authStatus = false
          this.msgAuth = error
        })
    }
  }
}
</script>

<style scoped>
#LoginForm {
  background:url("https://hdwallsource.com/img/2014/10/motion-blur-wallpaper-37068-37911-hd-wallpapers.jpg")  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}

</style>
