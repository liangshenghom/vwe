<template>
  <div class="indexbox">
    <div class="top bg-dark">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navbar</a>
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
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="container jumbotron mt-1">
        <h1 class="display-4">Hello, world!</h1>
        <p
          class="lead"
        >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 text-center">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="../../static/img/yuan.jpg" class="card-img-top w-50 m-auto" alt="..." />
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

    <div class="container">
      <hr />

      <div class="row mt-5 mb-5">
        <div class="col-md-7">
          <h1>标题1</h1>
          <p>段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容</p>
        </div>
        <div class="col-md-5">
          <img src="../../static/img/1.jpg" class="w-100 h-auto" />
        </div>
      </div>
      <hr />
      <div class="row mt-5 mb-5">
        <div class="col-md-5">
          <img src="../../static/img/1.jpg" class="w-100 h-auto" />
        </div>

        <div class="col-md-7">
          <h1>标题1</h1>
          <p>段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容</p>
        </div>
      </div>

      <hr />

      <div class="row mt-5 mb-5">
        <div class="col-md-7">
          <h1>标题1</h1>
          <p>段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容</p>
        </div>
        <div class="col-md-5">
          <img src="../../static/img/1.jpg" class="w-100 h-auto" />
        </div>
      </div>

      <hr />
    </div>

    <div class="footer w-100 bg-dark mt-5 pt-5 text-white">
      <div class="container">
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>
        <a href="#" class="stretched-link ml-3 text-white">链接1</a>

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
  <li class="list-group-item"><a href="#" >咨询方式一</a></li>
  <li class="list-group-item"><a href="#" >咨询方式一</a></li>
  <li class="list-group-item"><a href="#" >咨询方式一</a></li>
  <li class="list-group-item"><a href="#" >回到顶部</a></li>
</ul>


      
  
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to index"
    };
  }
};
</script>


<style  lang="scss" scoped>
$bg-color: rgb(255, 255, 255);

$border-none: 0px solid #cccccc !important;
$min_height: 250px;
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
