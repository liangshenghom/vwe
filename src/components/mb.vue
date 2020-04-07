<template>
  <div v-title data-title="网站模板">
    <app_header></app_header>

    <div class="main container mt-3">
      <!-- 面包屑导航 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">网站模板</li>
        </ol>
      </nav>

      <!-- 模板分类 -->
      <div class="class_mb mt-3 border rounded p-3">
        <strong>按行业分：</strong>
        <button type="button" v-for="(itme,i) in class_list" :key="i" class="btn btn-link">{{class_list[i].name}}</button>
      </div>
    
  
    </div>
        
      <div class="container class_mb_list mt-3 p-3">
        <div class="row row-cols-1 row-cols-md-4">
          <div class="col mb-4">
            <div class="card">
              <img src="../../static/img/3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src="../../static/img/3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src="../../static/img/3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src="../../static/img/3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
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
  name: "mb",
  data() {
    return {
      class_list: [
        {
          "code": "0",
          "name": "酒店"
        },
         {
          "code": "1",
          "name": "餐饮"
        },
         {
          "code": "2",
          "name": "医疗"
        },
         {
          "code": "3",
          "name": "旅游"
        },
     
      ]
    };
  },
  components: {
    app_header,
    app_footer
  }
};
</script>

<style lang="scss" scoped>

</style>>
