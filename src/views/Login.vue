<template>
    <div>
        <b-container fluid >
            <b-row>
                <b-col col-6 style="background-color:#18a1ba; height:970px;">
                    <img src="../assets/logo.png" width="100%" height="100%">
                </b-col>
                <b-col col-6>
                    <b-row>
                        <b-col>
                        </b-col>
                        <b-col>
                            <b-form style="padding-top:250px;">

                                <img src="../assets/profile.png" style="height:130px; width:130px; background-color:white; border-radius:100px; margin-bottom:20px;">

                                <b-form-input
                                    id="email-input"
                                    type="email"
                                    style="margin-bottom:20px;"
                                    required
                                    placeholder="Username"
                                ></b-form-input>

                                <b-form-input
                                    id="password-input"
                                    type="password"
                                    style="margin-bottom:50px;"
                                    required
                                    placeholder="Password"
                                ></b-form-input>

                                <b-button type="submit" style="width:200px; background-color:#55f355">Login</b-button>

                            </b-form>
                        </b-col>
                        <b-col>
                        </b-col>
                    </b-row>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>
