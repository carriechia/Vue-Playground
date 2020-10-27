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
                         <template v-if="data.value==1">
                             <h4><b-badge variant="success">一般註冊</b-badge></h4>
                        </template>
                        <template v-else>
                            <h4><b-badge variant="info">非一般註冊</b-badge></h4>
                        </template>
                    </template>
                </b-table>
                 <div class="mt-3">
                    <b-pagination-nav pills size="lg" number-of-pages="10" base-url="#" align="center"></b-pagination-nav>
                </div>
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
                    this.tableList.data = res.data
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
