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
                <b-table  id="my-table" striped hover :items="tableList.data" :fields="tableList.columns">
                    <template v-slot:cell(source)="data">
                         <template v-if="data.value==1">
                             <h4><b-badge variant="success">一般註冊</b-badge></h4>
                        </template>
                        <template v-else>
                            <h4><b-badge variant="info">非一般註冊</b-badge></h4>
                        </template>
                    </template>
                </b-table>
            </div>
          </card>
          <b-pagination
                @change="onPageChanged"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                align="center"
                size="lg"
                hide-goto-end-buttons
            ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import LTable from 'src/components/Table.vue'
    import Card from 'src/components/Cards/Card.vue'
    import {list} from '@/api/member'

    export default {
        components: {
            LTable,
            Card
        },
        data () {
            return {
                currentPage: 1,
                perPage: 0,
                rows: 0,
                tableList: {
                    columns: ['email', 'id', 'name', 'nickname', 'source'],
                    data: []
                },
            }
        },
        methods: {
            paginate(page) {
                list(page).then(res => {
                    this.currentPage = res.current_page //目前頁數
                    this.perPage = res.per_page //幾筆
                    this.rows = res.total //總共幾筆
                    this.tableList.data = res.data
                }).catch(err => {
                    alert(err)
                    throw err
                })
            },
            onPageChanged(page) {
                this.paginate(page);
            }
        },
        created: function(){
            this.paginate(this.currentPage)
        }
    }
</script>
