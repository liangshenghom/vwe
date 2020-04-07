<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h1 class="text-center p-5 bg-info text-white">你好，请登录！</h1>
          <div class="shadow p-5 mt-5">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">用户名：</label>
                <input
                  type="text"
                  class="form-control d-inline"
                  id="username"
                  data-vv-username="login"
                  aria-describedby="emailHelp"
                  placeholder="用户名"
                  v-validate="'required'"
                  v-model="name"
                  name="username"
                />

                <small
                  id="emailHelp"
                  class="form-text text-muted"
                  v-show="errors.has('username')"
                >{{ errors.first('username') }}</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密码：</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  v-validate="'required'"
                  data-vv-password="login"
                  v-model="password"
                  placeholder="密码"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                  v-show="errors.has('password')"
                >{{ errors.first('password') }}</small>
              </div>
              <div class="form-group form-check"></div>
              <div class="text-center">
                <button type="button" v-on:click="login()" class="btn btn-primary pl-5 pr-5">登 录</button>
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
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      this.$validator.validateAll("login").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
