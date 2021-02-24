<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue Test Project</a>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="nc-icon nc-palette"></i>
            </a>
          </li>
          <base-dropdown tag="li">
            <template slot="title">
              <i class="nc-icon nc-planet"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </base-dropdown>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">Hello, {{user.name}}</li>
          <li class="nav-item">
            <router-link to="/admin/user">Account</router-link>
          </li>
          <base-dropdown title="Dropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </base-dropdown>
          <li class="nav-item">
            <a @click.prevent="signout" class="nav-link" v-if="isLoggedIn">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {googleLogout,memberProfile} from '@/api/member'

  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      },
      isLoggedIn : function(){
        return true
        // return this.$store.getters.isLoggedIn
      },
    },
    data () {
      return {
        activeNotifications: false,
        user: {
          name: '',
          source: ''
        }
      }
    },
    methods: {
      signout(){
        if (this.user.source === 2) {
            var logout = googleLogout() // 回傳是否有登入者
            if(!logout) {
                this.notifyVue("Logout Failed.", "warning")
                return false;
            }
        }
        localStorage.removeItem('token')
        this.notifyVue("Logout Success.", "success")
        this.$router.push('/login')
      },
      profile() {
          memberProfile().then(res => {
                this.user.name = res.name;
                this.user.source = res.source;
            }).catch(err => {
                alert(err)
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
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    },
    mounted: function () {
        this.profile()
    }
  }

</script>
<style>
    .nav-item {
        margin-right:15px;
    }
</style>
