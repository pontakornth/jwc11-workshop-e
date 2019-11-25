<template>
    <div style="height: 100vh;">
        <img src="../assets/profile1.png" style="height:100px; width:100px; background-color:white; border-radius:100px; margin-top:60px; margin-bottom:25px;"><br>
        <p style="color:white; font-size:25px; margin-bottom:28px;">ไก่จ๋า ไม่ทำเเล้ว</p>

        <div class="Navigation">
            <router-link class="btn btn-light btn-block" to="/dashboard" style="width:100%; height:40px; margin-bottom:20px;">ยอดค้างชำระ</router-link>
            <router-link class="btn btn-light btn-block" to="/withdraw" style="width:100%; height:40px; margin-bottom:20px;">เบิกจ่าย</router-link>
            <b-button class="btn-block btn-outline-danger btn-light" style="width:92%; height:40px; margin-left:10px; margin-bottom:30px; position: absolute; left: 0; bottom: 0;">ออกจากระบบ</b-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>