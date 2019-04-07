<template>
    <div >
        <b-container fluid >
            <b-row>

                <b-col cols="2" style="background-color:#15404E;">

                            <div style="height: 100vh;">
                                <img src="../assets/profile1.png" style="height:100px; width:100px; background-color:white; border-radius:100px; margin-top:60px; margin-bottom:25px;"><br>
                                <p style="color:white; font-size:25px; margin-bottom:28px;">ไก่จ๋า ไม่ทำเเล้ว</p>

                                <router-link class="btn btn-light" to="/dashboard" style="width:100%; height:40px; margin-bottom:20px;">ยอดค้างชำระ</router-link>
                                <router-link class="btn btn-light" to="/withdraw" style="width:100%; height:40px; margin-bottom:20px;">เบิกจ่าย</router-link>
                                <b-button style="width:92%; height:40px; margin-left:10px; margin-bottom:30px; position: absolute; left: 0; bottom: 0;">ออกจากระบบ</b-button>
                            </div>

                </b-col>

                <b-col cols="10" style=" width:100%; padding:0;">
                    <b-col cols="12" style="background-color:#15404E; height:250px; padding-top:50px;">
                            <p style="color:white; font-size:40px;">ยอดเงินในบัญชี</p>
                            <p style="color:white; font-size:60px;">100,000.00 <span style="font-size:30px;">บาท</span></p>
                    </b-col>

                    <b-col cols="12" style="background-color:#18a1ba; min-height:100vh;">
                        <h1 style="text-align:left; color:#faff00; padding-top:20px; padding-left:20px;">สร้างรายการเรียกเก็บเงิน</h1>

                        <b-form style="padding:20px; margin-bottom:40px;">
                            <b-row style="background-color:white; border-radius:5px;">
                                <b-col cols="1" style="padding:10px;">
                                    <span>เรียกเก็บค่า</span>
                                </b-col>
                                <b-col cols="11">
                                    <b-form-input
                                            id="what-input"
                                            type="text"
                                            style="margin-top:5px; margin-bottom:5px;"
                                            required
                                            v-model="name"
                                    >
                                    </b-form-input>
                                </b-col>
                            </b-row>

                            <b-row style="background-color:white; margin-top:10px; border-radius:5px;">
                                <b-col cols="1" style="padding:10px;">
                                    <span>จำนวนเงิน</span>
                                </b-col>
                                <b-col cols="11">
                                    <b-form-input
                                            id="howmuch-input"
                                            type="text"
                                            style="margin-top:5px; margin-bottom:5px;"
                                            required
                                            v-model="amount"
                                    >
                                    </b-form-input>
                                </b-col>
                            </b-row>

                            <b-button @click="transactions.push( { name, amount } )" style="float:right; background-color:#55f355; border:0; margin-top:10px; color:black;" >ยืนยัน</b-button>
                        </b-form>

                        <b-col cols="12" style="background-color:white; border-radius:5px; padding:40px; margin-bottom:20px;">
                            <h1 style="text-align:left;">รายการที่เรียกเก็บเงิน</h1>
                        </b-col>

                        <b-col v-for="(tran, index) in transactions" :key="index" cols="12" style="background-color:white; border-radius:5px; padding:10px; margin-bottom:20px;">
                            <h4 style="text-align:left;">{{tran.name}} 10/11/2019 คนละ {{tran.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h4>
                        </b-col>

                        <b-col cols="12" style="background-color:white; border-radius:5px; padding:40px; margin-bottom:20px;">
                            <h1 style="text-align:left;">รายการที่สมาชิกยังจ่ายไม่ครบ</h1>
                        </b-col>

                        <b-col cols="12" style="background-color:white; border-radius:5px; padding:40px; margin-bottom:20px;">
                            <h1 style="text-align:left;">รายการที่เสร็จสิ้นเเล้ว</h1>
                        </b-col>

                    </b-col>
                </b-col>

            </b-row>

        </b-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      amount: 0,
      transactions: [
        {
          name: 'ค่าห้อง',
          amount: 98
        }
      ]
    }
  }
}
</script>

