<template>
  <div class="indexbox" v-title data-title="首页">
    <!-- 公共头部 -->
    <app_header></app_header>
    <!-- 巨幕 -->
    <div class="container">
      <div class="container jumbotron mt-1">
        <h1 class="display-4">巨幕标题一</h1>
        <p class="lead">巨幕子标题</p>
        <hr class="my-4" />
        <p>巨幕内容描述</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">更多</a>
      </div>
    </div>

    <!-- 卡片 -->
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 text-center">
        
        <div class="col mb-4" v-for="(item,i) in card_list" :key="item.id">
         <transition appear mode="out-in" tag="div">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">标题{{item.title}}</h5>
              <p class="card-text">{{item.content}}描述内容</p>
            </div>
          </div>
            </transition>
          
        </div>
       
      </div>
    </div>

    <!-- 内容 -->
    <div class="container">
    <transition-group appear mode="out-in">
      <div
        class="row mt-5 mb-5 pb-5 pt-5 border-bottom"
        v-for="(article,key) in articles"
        :key="article.id"
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
    </transition-group>
    </div>

    <!-- 公共页脚 -->
    <app_footer></app_footer>

    <!-- 悬浮框-->
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
          <router-link to="chat">在线咨询</router-link>
        </li>

        <li class="list-group-item">
          <a href="#">回到顶部</a>
        </li>
      </ul>
    </div>

    <!-- 弹出框 -->
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

      <!-- loading 载入显示 -->
      <div v-show="isshow" class="text-center fixed-top mt-5 myLoading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <!-- 结束 -->
  </div>
</template>

<script>
import axios from "axios";
import app_header from "./header";
import app_footer from "./footer";

export default {
  name: "index",
  data() {
    return {
      articles: [],
      formMsg: {
        contact: "",
        content: ""
      },
      isshow: false,
      id: "",
      card_list: [{
        id:1,
        title:"标题1",
        content:"标题内容"
      },
      {
        id:2,
        title:"标题1",
        content:"标题内容"
      },
      {
        id:3,
        title:"标题1",
        content:"标题内容"
      },
      {
        id:4,
        title:"标题1",
        content:"标题内容"
      },
      ]
    };
  },
  components: {
    app_header,
    app_footer
  },

  created() {
    var that = this;
    axios
      .get("http://localhost:3000/article/")
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

.indexbox {
  background: $bg-color;
}
.card {
  border: $border-none;
}

.fixed-bottom-right {
  position: fixed;
  bottom: 100px;
  right: 40px;
  z-index: 1030;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: 1.5s ease all;
}
</style>
