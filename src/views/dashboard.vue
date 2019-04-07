<template>
    <div >
        <b-container fluid >
            <b-row>
                <b-col style="margin:0;">

                    <b-row style="">
                    
                        <b-col md="2" style="background-color:#15404E;">

                            <div style="height: 100vh;">
                                <img src="../assets/profile.png" style="height:100px; width:100px; background-color:white; border-radius:100px; margin-top:60px; margin-bottom:25px;"><br>
                                <p style="color:white; font-size:25px; margin-bottom:28px;">Name</p>

                                <b-button style="width:100%; height:40px; margin-bottom:20px;">ยอดค้างชำระ</b-button>
                                <b-button style="width:100%; height:40px; margin-bottom:20px;">เบิกจ่าย</b-button>
                                <b-button style="width:100%; height:40px; ">ออกจากระบบ</b-button>
                            </div>

                        </b-col>

                        <div class="col-10" style="background-color:#15404E; height:250px; width:100%; padding-top:50px;">
                            <p style="color:white; font-size:40px;">ยอดเงินในบัญชี</p>
                            <p style="color:white; font-size:60px;">100,000.00 <span style="font-size:30px;">บาท</span></p>
                        </div>

                    </b-row>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>