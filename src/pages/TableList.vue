<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Member Lists</h4>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover"
                       :columns="tableList.columns"
                       :data="tableList.data"
                       >
              </l-table>
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
    const tableColumns = ['Email', 'Id', 'Name', 'Nickname', 'Source']

    export default {
        components: {
            LTable,
            Card
        },
        data () {
        return {
            tableList: {
                columns: [...tableColumns],
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
                // this.$api.member.list().then(res => {
                //     this.items = res.data
                // });
            // let self = this
            // this.$axios.get('/api/posts')
            //     .then(function (response) {
            //         if (response.status === "Y") {
            //             self.items = self.testData
            //         }
            //     })
            //     .catch(function (response) {
            //         console.log(response)
            //     })

            // list().then(res => {
            //     this.items = res
            // }).catch(err => {
            //     alert(err)
            //     throw err
            // })
            },
        },
        mounted: function () {
            this.init()
        }
    }
</script>
