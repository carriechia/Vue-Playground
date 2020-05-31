<template>
  <card>
    <h4 slot="header" class="card-title">Register Member</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="user.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="UserName"
                    placeholder="Enter UserName"
                    v-model="user.firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="NickName"
                    placeholder="Enter NickName"
                    v-model="user.nickname">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="password"
                    label="Password"
                    placeholder="Enter Password"
                    v-model="user.password">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="password"
                    label="Check Password"
                    placeholder="Enter Check Password"
                    v-model="user.checkPassword">
          </base-input>
        </div>
      </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="registerMember">
          Save
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import {register} from '@/api/member'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          email: '',
          username: '',
          nickname: '',
          password: '',
          checkPassword: '',
        },
      }
    },
    methods: {
        registerMember () {
        let self = this
        // let data = {
        //     name: self.name,
        //     email: self.email,
        //     password: self.password,
        //     is_admin: self.is_admin
        // }
        // register(data).then(res => {

        // }).catch(err => {
        //     throw err
        // })
        // this.$store.dispatch('register', data)
        //     .then(() => this.$router.push('/'))
        //     .catch(err => console.log(err))
            alert('Your data: ' + JSON.stringify(this.user))
            this.notifyVue('Register Success!', 'info')
            this.$router.push('/')
        },
        notifyVue (info, typeName) {
            this.$notifications.notify(
            {
                message: '<span>' + info + '</span>',
                type: typeName
            })
        }
    }
  }

</script>
<style>

</style>
