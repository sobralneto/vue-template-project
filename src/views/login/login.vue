<template>
  <div v-cloak>
    <div id="LoginForm" :style="height">
      <br><br><br>
      <div class="container">
        <div class="login-form">
          <div class="main-div shadow">
            <div class="panel">
              <center><img src="../../assets/logo-empresa.png" width="250"></center>
              <p></p>
            </div>
            <form id="Login" @submit.prevent="login">
              <div class="form-group">
                <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu login/email" v-model="username">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua senha" v-model="password">
              </div>
              <button type="submit" class="btn btn-teal btn-block" :disabled="disabled">Login</button>
              <div v-show="msgAuth" v-bind:class="['mt-4 mb-0 alert', {'alert-success': authStatus, 'alert alert-danger': !authStatus}]">
                {{ msgAuth }}
              </div>
            </form>
          </div>
          <p class="text-white">Developer by Sobral Neto</p>
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

.form-heading { color:#fff; font-size:23px;}
.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom:10px;
}
.login-form{ text-align:center;}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}

.forgot {
  text-align: left; margin-bottom:30px;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}

.back { text-align: left; margin-top:10px;}
.back a {color: #444444; font-size: 13px;text-decoration: none;}
</style>
