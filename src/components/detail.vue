<template>
  <div class="detail" v-title data-title="网站标题">
    <app_header></app_header>

    <div class="main container mt-3">
      <!-- 面包屑导航 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">模板标题</li>
        </ol>
      </nav>

      <!--详细内容页 -->
      <div class="row">
        <div class="left col-md-9">
          <div class="detailcontent border rounded p-3">
            <h5 class="text-center">模板标题</h5>
            <hr />
            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容
              介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </div>
        <div class="right col-md-3">
          <ul class="list-group mb-3">
            <li class="list-group-item bg-lightpink">模板一</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
          </ul>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-lightpink">模板二</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
            <li class="list-group-item">模板标题</li>
          </ul>
        </div>
      </div>
    </div>
    <app_footer></app_footer>
  </div>
</template>

<script>
import app_header from "./header";
import app_footer from "./footer";
export default {
  name: "detail",
  data() {
    return {};
  },
  components: {
    app_header,
    app_footer
  }
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 600px;
}

.list-group-item {
  border: 0px solid rgba(0, 0, 0, 0.125);
}
.bg-lightpink {
  background-color: #e9ecef;
}
.detailcontent {
  min-height: 500px;
}
</style>>
