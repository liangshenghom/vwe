<template>
  <div class="indexbox">
    <div class="top bg-dark">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">首页</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">导航一</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">导航二</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">导航三</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="输入搜索内容"
                aria-label="Search"
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="container jumbotron mt-1">
        <h1 class="display-4">巨幕标题一</h1>
        <p class="lead">巨幕子标题</p>
        <hr class="my-4" />
        <p>巨幕内容描述</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">更多</a>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 text-center">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">标题一</h5>
              <p class="card-text">标题一描述内容</p>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">标题二</h5>
              <p class="card-text">标题二描述内容</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">标题三</h5>
              <p class="card-text">标题三描述内容</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">标题四</h5>
              <p class="card-text">标题四描述内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="row mt-5 mb-5 pb-5 pt-5 border-bottom"
        v-for="(article,key) in articles"
        :key="key"
      >
        <div :class="[{'col-md-7':key%2!=1},{'col-md-5':key%2!=0}]">
          <h1 v-if="key%2!=1">{{article.title}}</h1>
          <p v-if="key%2!=1">{{article.subtitle}}</p>

          <img v-if="key%2!=0" src="../../static/img/1.jpg" class="w-100 h-auto" />
        </div>
        <div :class="[{'col-md-7':key%2!=0},{'col-md-5':key%2!=1}]">
          <h1 v-if="key%2!=0">{{article.title}}</h1>
          <p v-if="key%2!=0">{{article.subtitle}}</p>
          <img v-if="key%2!=1" src="../../static/img/1.jpg" class="w-100 h-auto" />
        </div>
      </div>
    </div>

    <div class="footer w-100 bg-dark mt-5 pt-5 text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li>
                <a href="#" class="nav-link ml-3 text-white">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li>
                <a href="#" class="nav-link ml-3 text-white">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li>
                <a href="#" class="nav-link ml-3 text-white">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
              <li>
                <a href="#" class="nav-link ml-3 text-info">链接1</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <figure class="figure">
              <img src="../../static/img/2.jpg" class="figure-img img-fluid rounded" alt="..." />
              <figcaption
                class="figure-caption text-right text-white"
              >A caption for the above image.</figcaption>
            </figure>
          </div>
        </div>

        <blockquote class="blockquote text-center mt-5 pt-5">
          <p class="mb-0"></p>
          <footer class="blockquote-footer text-white">
            Copyright © 2020 Sgky . All rights reserved.
            <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </div>
    </div>

    <div class="fixed-bottom-right">
      <ul class="list-group">
        <li class="list-group-item active">免费咨询</li>
        <li class="list-group-item">
          <a
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@getbootstrap"
          >提交问题</a>
        </li>
        <li class="list-group-item">
          <a href="#">在线咨询</a>
        </li>

        <li class="list-group-item">
          <a href="#">回到顶部</a>
        </li>
      </ul>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">提交问题</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">联系方式:</label>
                <input
                  type="text"
                  placeholder="邮箱/手机号码/其他"
                  class="form-control"
                  id="recipient-name"
                  v-model="formMsg.contact"
                />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">问题描述:</label>
                <textarea
                  class="form-control"
                  v-model="formMsg.content"
                  id="message-text"
                  placeholder="请输入"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button @click="submitForm($event)" class="btn btn-primary" data-dismiss="modal">提交</button>
          </div>
        </div>
      </div>

      <div v-show="isshow" class="text-center fixed-top mt-5 myLoading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      articles: [],
      formMsg: {
        contact: "",
        content: ""
      },
      isshow: false
    };
  },
  created() {
    var that = this;
    axios
      .get("http://localhost:3000/user/")
      .then(function(res) {
        //console.log(res.data);
        that.articles = res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    submitForm: function(event) {
      var that = this;

      that.isshow = true;

      let formData = new FormData();
      formData.append("contact", this.formMsg.contact);
      formData.append("content", this.formMsg.content);

      //根据后台接收参数格式进行修改
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      axios
        .post("http://localhost:3000/fankui/", formData, config)
        .then(res => {
          // success callback
          console.log(res.data);
          if (res.data) {
            alert("提交成功！");
          } else {
            alert("提交失败！");
          }
          that.isshow = false;
        })
        .catch(err => {
          // error callback
        });
    }
  }
};
</script>


<style  lang="scss" scoped>
$bg-color: rgb(255, 255, 255);

$border-none: 0px solid #cccccc !important;
$min_height: 450px;
.indexbox {
  background: $bg-color;
}
.card {
  border: $border-none;
}
.footer {
  min-height: $min_height;
}
.fixed-bottom-right {
  position: fixed;
  bottom: 100px;
  right: 40px;
  z-index: 1030;
}
</style>
