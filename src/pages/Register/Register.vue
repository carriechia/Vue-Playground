<template>
<div>
    <form class="form-register">
        <h3>Register Your Account</h3>
        <div class="row">
            <div class="col-md-4">
            <base-input type="email"
                label="Email*"
                placeholder="Email"
                v-model="user.email">
            </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <base-input type="text"
                        label="Name*"
                        placeholder="Name"
                        v-model="user.name">
                </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <base-input type="password"
                        label="Password*"
                        placeholder="Password"
                        v-model="user.password">
                </base-input>
            </div>
        </div>
        <button type="submit" class="btn btn-info btn-fill" @click.prevent="Save">
            Save
        </button>
        <button type="submit" class="btn btn-info btn-fill" @click.prevent="Back">
            Cancel
        </button>
    </form>
</div>
</template>
<script>
import {register} from '@/api/member'

export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        Save() {
            var self = this;
            const member = {
                email: self.user.email,
                user: self.user.name,
                password: self.user.password
            }
            register(member).then(res => {
                if (res.status === 0) {
                    alert("Register Success.")
                    this.$router.push('/login')
                } else {
                    alert("Register Faild.")
                }
            }).catch(err => {
                throw err
            })
        },
        Back() {
            this.$router.back()
        }
    }
}
</script>
<style>
    .form-register {
        width: 100%;
        padding: 15px;
        margin: auto;
    }
    .form-register .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-register .form-control:focus {
        z-index: 2;
    }
    .form-register input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-register input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    button {
    margin: 10px;
}
</style>
