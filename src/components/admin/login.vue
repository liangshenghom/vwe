<template>
  <div class="login">
    
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h1 class="text-center p-5 bg-info text-white mb-0">你好，请登录！</h1>
          <div class="shadow p-5">
            <form @submit.prevent="validateBeforeSubmit">
              <div class="form-group">
                <label for="InputUsername">用户名：</label>
                <input
                  type="text"
                  class="form-control d-inline"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="用户名"
                  v-validate="'required'"
                  v-model="username"
                  name="username"
                />

                <small
                  id="usernameHelp"
                  class="form-text text-muted"
                  v-show="errors.has('username')"
                >{{ errors.first('username') }}</small>
              </div>
              <div class="form-group">
                <label for="InputPassword1">密码：</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  v-validate="'required'"
                  v-model="password"
                  placeholder="密码"
                />
                <small
                  id="passwordHelp"
                  class="form-text text-muted text-danger"
                  v-show="errors.has('password')"
                >{{ errors.first('password') }}</small>
              </div>
              <div class="loginresult form-group form-check"></div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary pl-5 pr-5">登 录</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  
  </div>
</template>

<script>
import axios from "axios";



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

<style scoped>

</style>
