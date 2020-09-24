<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Member List</h4>
            </template>
            <div>
                <b-table striped hover :items="tableList.data" :fields="tableList.columns">
                    <template v-slot:cell(source)="data">
                        <h4><b-badge pill variant="success">一般註冊</b-badge></h4>
                    </template>
                </b-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import LTable from 'src/components/Table.vue'
    import Card from 'src/components/Cards/Card.vue'
    import {list} from '@/api/member'

    //定義table欄位
    export default {
        components: {
            LTable,
            Card
        },
        data () {
        return {
            tableList: {
                columns: ['email', 'id', 'name', 'nickname', 'source'],
                data: []
            },
        }
        },
        methods: {
            init: function () {
                list().then(res => {
                    this.tableList.data = res
                }).catch(err => {
                    alert(err)
                    throw err
                })
            },
        },
        mounted: function () {
            this.init()
        }
    }
</script>
