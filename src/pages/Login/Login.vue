<template>
  <div id="register_form">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="form.email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="form.password"  id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
    </form>
    <div class="login_btn">
        <button class="btn btn-info btn-fill" v-on:click="Singin">Sign in</button>
        <button class="btn btn-info btn-fill" v-on:click="onReset">Reset</button>
        <router-link to="/register" tag="button" class="btn btn-info btn-fill">Rigister</router-link>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/member'

  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      }
    },
    methods: {
      Singin() {
        var self = this;
        const member = {
            email: self.form.email,
            password: self.form.password
        }
        login(member).then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                this.notifyVue('Login Success.', 'success')
                this.$router.push('/')
            } else {
                this.notifyVue('Login Failed.', 'warning');
            }
        }).catch(err => {
            this.notifyVue('Login Failed.', 'danger');
            throw err
        })
    },
    notifyVue (message, type) {
        this.$notifications.notify(
        {
            message: '<span>' + message + '</span>',
            icon: 'nc-icon nc-app',
            horizontalAlign: 'right',
            verticalAlign: 'top',
            type: type
        })
    },
    onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
      }
    },
  }
</script>
<style scoped>
html,
body {
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.login_btn {
  text-align:center;
}
.login_btn button {
    margin: 10px;
}
</style>
