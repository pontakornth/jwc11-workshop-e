<template>
<b-navbar sticky toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">HeyHelper!!!</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item class="text-white" to="/dashboard">ยอดค้างชำระ</b-nav-item>
            <b-nav-item class="text-white" to="/withdraw">เบิกจ่าย</b-nav-item>
            <b-nav-item class="btn-outline-danger" to="/login">ออกจากระบบ</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>