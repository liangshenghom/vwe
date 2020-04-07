<template>
  <div class="top bg-dark">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
         <router-link to="/" class="navbar-brand" >首页</router-link>
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
            <li class="nav-item ">
              <router-link to="mb" class="text-white">网站模板</router-link>
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
</template>

<script>
export default {};
</script>

<style>
</style>