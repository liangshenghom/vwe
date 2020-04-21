<template>
  <div class="login loginbg1">
    <div class="loginform shadow p-5 text-white animated bounceInRight heartBeat delay-0.5s">
      <form @submit.prevent="validateBeforeSubmit">
        <div class="d-flex mb-3">
          <div style="flex:1;text-align:right;font-size:16px;">
            <label for="InputUsername">用户名：</label>
          </div>
          <div style="flex:4;">
            <input
              class="pl-2 pr-2"
              type="text"
              id="username"
              aria-describedby="usernameHelp"
              v-validate="'required'"
              v-model="username"
              name="username"
              style="border-style:none none solid none;
                  border-color:#FFFFFF;
                  border-width:1px;
                  background-color:transparent;
                  width:70%;
                  color:white;
                  outline:none;
              background:transparent;
               -webkit-text-fill-color: #fff !important;
               transition: background-color 5000s ease-in-out 0s;
                  "
            />
          </div>
          <div style="flex:1;">
            <small
              id="usernameHelp"
              class="form-text text-warning"
              v-show="errors.has('username')"
            >{{ errors.first('username') }}</small>
          </div>
        </div>
        <div class="d-flex">
          <div style="flex:1;text-align:right;font-size:16px;">
            <label>密码：</label>
          </div>
          <div style="flex:4;">
            <input
              class="pl-2 pr-2"
              type="password"
              id="password"
              name="password"
              v-validate="'required'"
              v-model="password"
              style="border-style:none none solid none;
                    -webkit-text-fill-color: #fff !important;
                    transition: background-color 5000s ease-in-out 0s;
                  border-color:#FFFFFF;
                  border-width:1px;
                  background-color:transparent;
                 
                  width:70%;
                  color:white;  outline:none;"
            />
          </div>
          <div style="flex:1;">
            <small
              id="passwordHelp"
              class="form-text text-warning"
              v-show="errors.has('password')"
            >{{ errors.first('password') }}</small>
          </div>
        </div>
        <div class="loginresult form-group form-check"></div>

        <button type="submit" class="btn text-white pl-4 pr-4 mt-2 border">登 录</button>
      </form>
    </div>
  </div>
</template>

<script>
import animate from "animate.css";
import axios from "axios";
import "../../assert/sass/common.scss";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          //console.log(result);
          let formData = new FormData();
          formData.append("username", this.username);
          formData.append("password", this.password);
          //根据后台接收参数格式进行修改
          let config = {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            withCredentials: true //必须设置这个，否则关于跨域问题后台session会找不到session名
          };

          axios
            .post("http://localhost:3000/login/", formData, config)
            .then(res => {
              console.log(res.data[0].code);
              if (res.data[0].code) {
                console.log("登录成功！");
                localStorage.setItem("name", res.data[0].name);

                location.href = "/admin/index";
              } else {
                console.log("登录失败！");
                alert("登录失败！");
              }
            })
            .catch(err => {
              // error callback
            });
          return;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.loginform {
  position: fixed;
  right: 110px;
  background: linear-gradient(
    to right,
    #bb313e25,
    #bb313e25,
    #d7222925,
    #dd4a1625,
    #e4761525,
    #f5c50025,
    #f0e92725,
    #b1ce2425,
    #48a93525,
    #03944525,
    #157c4f25,
    #176a5825,
    #1b556325,
    #1d386f25,
    #1d386f25,
    #20277825,
    #52266325,
    #8a244b25
  );

  top: 40%;
  width: 500px;
}
.login {
  min-width: 1700px;
}
#username:focus {
  outline: none none solid none;
  background-color: transparent;
}
</style>
