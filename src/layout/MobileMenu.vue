<template>
  <ul class="nav nav-mobile-menu">
    <base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
      </template>
      <a class="dropdown-item" href="#">Notification 1</a>
      <a class="dropdown-item" href="#">Notification 2</a>
      <a class="dropdown-item" href="#">Notification 3</a>
      <a class="dropdown-item" href="#">Notification 4</a>
      <a class="dropdown-item" href="#">Another notification</a>
    </base-dropdown>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="nc-icon nc-zoom-split hidden-lg-up"></i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <base-dropdown title="Dropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>

    <li class="nav-item">
      <a class="nav-link" @click.prevent="signout">
        <span class="no-icon">Logout</span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu',
    methods: {
        signout(){
            localStorage.removeItem('token')
            this.notifyVue("Logout Success.", "success")
            this.$router.push('/login')
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
    },
  }
</script>
<style>
</style>
