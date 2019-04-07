<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col style="margin:0;">

                    <b-row style="">

                        <b-col md="2" style="background-color:#15404E; ">

                            <div style="height:980px;">
                                <img src="../assets/profile.png" style="height:100px; width:100px; background-color:white; border-radius:100px; margin-top:60px; margin-bottom:25px;"><br>
                                <p style="color:white; font-size:25px; margin-bottom:28px;">Name</p>

                                <router-link class="btn btn-primary" to="/dashboard" style="width:100%; height:40px; margin-bottom:20px;">ยอดค้างชำระ</router-link>
                                <router-link class="btn btn-primary" to="/withdrawl" style="width:100%; height:40px; margin-bottom:20px;">เบิกจ่าย</router-link>
                                <b-button style="width:92%; height:40px; margin-left:10px; margin-bottom:30px; position: absolute; left: 0; bottom: 0;">ออกจากระบบ</b-button>
                            </div>

                        </b-col>

                        <div class="col-10" style="background-color:#15404E;  width:100%; padding-top:50px; border-bottom: 1px solid white">
                            <div style="height:150px;">
                                <p style="color:white; font-size:40px; border-bottom: 1px solid white; padding-bottom: 20px">เบิกจ่าย</p>
                            </div>
                            <div style="height: 830px">
                               <div class="card">
                                 <form>
                                   <div class="form-group"><label>สาเหตุการเบิก</label>
                                   <input v-model="currentTitle" type="text" />
                                   <label>ปริมาณเงิน</label>
                                   <input v-model="amount" type="number" />
                                   <a href="#" class="btn btn-primary"  @click="addTransaction" type="submit"  >ทำเรื่อง</a> </div>
                                 </form>
                               </div>
                                <div v-for="tran in transactions" :key="tran.id" class="card">
                                    <h1>{{ tran.title }}</h1>
                                    <h2>จำนวน : {{ tran.amount }} </h2>

                                    <h3>สถานะ : {{ tran.status}}</h3>
                                    <h3>เบิกโดย : {{ tran.issuedUserId }}</h3>
                                    <a href="#" @click="confirm(tran)" class="btn btn-primary">อนุมัติ</a>
                                </div>
                            </div>
                        </div>

                    </b-row>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentTitle: '',
      amount: 0,
      transactions: [
        {
          id: 1289,
          amount: 30,
          title: 'ค่าไม้กวาด',
          issuedUserId: 'นายอนุชิต',
          status: 'อนุมัติแล้ว',
          type: 'WITHDRAW'
        },
        {
          id: 1287,
          amount: 10,
          title: 'ค่าไม้ถู',
          status: 'ยังไม่อนุมัติ',
          issuedUserId: 'นางสาวจันทรา',
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
          tran.status = "อนุมัติแล้ว"
        }
      })
    }
  }
}
</script>
