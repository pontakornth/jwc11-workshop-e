<template>
    <div>
        <nav-bar/>
        <b-container fluid>
            <b-row>
                <b-col cols="12" style="background-color:#15404E; width:100%; padding:0;">
                          <b-col cols="12" style=" padding-bottom: 10px; padding-top:50px;">
                                  <p style="color:white; font-size:40px;">ยอดเงินในบัญชี</p>
                                  <p style="color:white; font-size:60px;">{{ balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}.00 <span style="font-size:30px;">บาท</span></p>
                          </b-col>

                          <b-col class="mx-auto" cols="12" lg="10"  style="background-color:#18a1ba; min-height:100vh; padding-top:10px;">

                               <div class="card" style="padding:0px; margin-bottom:20px;">

                                   <b-row style="padding:20px;">
                                    <b-col cols="12" lg="1"><label>สาเหตุการเบิก</label></b-col>
                                    <b-col cols="12" lg="11"><b-input v-model="currentTitle" type="text" /></b-col>

                                   </b-row>

                                </div>

                                <div class="card" style="padding:0px;">
                                  <b-row style="padding:20px;">
                                    <b-col cols="12" lg="1" ><label>จำนวนเงิน</label></b-col>
                                    <b-col cols="12" lg="11"><b-input v-model="amount" type="text" /></b-col>
                                   </b-row>
                      
                                </div>

                                <b-button  @click="addTransaction" type="submit" style="float:right; background-color:#55f355; border:0; margin-top:10px; color:black;" >ยืนยัน</b-button>

                                <b-col cols="12" style="margin-top:60px;">
                                <b-col cols="12">
                                  <b-row>
                                    <b-col v-for="tran in transactions" :key="tran.id" class="card" cols="12" lg="4" style="margin-bottom:10px;">
                                        <h1>{{ tran.title }}</h1>
                                        <h2>จำนวน : {{ tran.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} บาท </h2>
    
                                        <h3>สถานะ : {{ tran.status}}</h3>
                                        <h3>เบิกโดย : {{ tran.issuedUserId }}</h3>
                                        <b-row style="margin-bottom: 10px;">
                                          <b-col cols="5"></b-col>
                                          <b-col cols="2">
                                          <a v-if="tran.status !== 'อนุมัติแล้ว'" href="#" @click="confirm(tran)" class="btn btn-primary ">อนุมัติ</a>
                                          </b-col>
                                          <b-col cols="5"></b-col>
                                        </b-row>
                                    </b-col>
                                  </b-row>
                                </b-col>
                                </b-col>
                            
                          
                          </b-col>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components:{
    NavBar
  },
  data () {
    return {
      balance: 1999,
      currentTitle: '',
      amount: 0,
      transactions: [
        {
          id: 1289,
          amount: 300,
          title: 'ไม้กวาด',
          issuedUserId: 'นายอนุชิต',
          status: 'อนุมัติแล้ว',
          type: 'WITHDRAW'
        },
        {
          id: 1287,
          amount: 150,
          title: 'ไม้ถู',
          status: 'ยังไม่อนุมัติ',
          issuedUserId: 'นางสาวจันทรา'
        }
      ]
    }
  },
  methods: {
    addTransaction () {
      this.transactions.push({
        id: Math.floor(Math.random() * 9999),
        amount: this.amount,
        title: this.currentTitle,
        status: 'ยังไม่อนุมัติ',
        issuedUserId: 'นายประยง'
      })
    },
    confirm (tran) {
      this.transactions.forEach(x => {
        if (x.id === tran.id) {
          tran.status = 'อนุมัติแล้ว'
        }
      })
      this.balance -= tran.amount
    }
  }
}
</script>
