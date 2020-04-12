<template>
  <div class="adminindex">
    <div class="f-column">
      <div class="main-header f-row">
        <div class="f-row f-full">
          <div class="main-title f-animate f-row" :style="{width:width+'px'}">
            <img class="app-logo" src="../../../static/img/adminicon.png" />
            <span v-if="!collapsed">{{title}}</span>
          </div>
          <div class="main-bar f-full">
            <span class="main-toggle icon iconfont icon-icon-test39" @click="toggle()"></span>
            <span class="ml-5 menu-index" @click="showindex()">首页</span>
          </div>

          <div class="dropdown">
            <a
              class="btn dropdown-toggle mr-3"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="icon iconfont icon-icon-test35"></span>
              {{username}}
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" @click="logout" href="#" >退出</a>
            </div>
          </div>
        </div>
      </div>
      <div class="f-row f-full">
        <div class="sidebar-body f-animate" :style="{width:width+'px'}">
          <div v-if="!collapsed" class="sidebar-user">菜单管理</div>
          <SideMenu
            :data="menus"
            :border="false"
            :collapsed="collapsed"
            @itemClick="onItemClick($event)"
          ></SideMenu>
        </div>
        <div class="main-body f-full">
          <!-- 后台首页 -->
          <div v-if="isShowIndex">11</div>

          <adminUser v-if="isShowUserUpdate"></adminUser>

          <!-- 大数据UI -->

          <bdataui v-if="isShowDataUI"></bdataui>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import adminUser from "./userUpdate";
import bdataui from "./BDataUi";

export default {
  data() {
    return {
      isShowIndex: true,
      isShowUserUpdate: false,
      isShowDataUI: false,
      username: "用户名",
      title: "后台管理",
      width: 230,
      collapsed: false,
      selectedMenu: null,
      menus: [
        {
          text: "用户管理",
          iconCls: "iconfont icon-icon-test35",
          selected: true,
          children: [
            {
              text: "用户列表"
            }

            /* {
              text: "权限管理",
              children: [
                {
                  text: "最高权限"
                },
                {
                  text: "普通权限"
                }
              ]
            } */
          ]
        },

        {
          text: "监控管理",
          iconCls: "iconfont icon-icon-test16",
          children: [
            {
              text: "大数据UI"
            }
          ]
        },
        {
          text: "模板管理",
          iconCls: "icon iconfont icon-icon-test38",
          //state: "open",
          children: [
            {
              text: "编辑详情"
            },
            {
              text: "模板列表"
            },
            {
              text: "模板分类"
            }
          ]
        },
        {
          text: "信息采集",
          iconCls: "icon iconfont icon-icon-test21",
          //state: "open",
          children: [
            {
              text: "网络爬虫"
            }
          ]
        },
        {
          text: "系统管理",
          iconCls: "iconfont icon-icon-test16",
          children: [
            {
              text: "系统信息"
            },
            {
              text: "开发人员"
            }
          ]
        }
      ]
    };
  },

  created() {
    //统一转大写
    this.username = localStorage.getItem("name");
  },
  methods: {
    logout: function() {
      var name = localStorage.getItem("name");
      //console.log(result);
      let formData = new FormData();
      formData.append("username", name);

      //根据后台接收参数格式进行修改
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true //必须设置这个，否则关于跨域问题后台session会找不到session名
      };

      axios
        .post("http://localhost:3000/logout/", formData, config)
        .then(res => {
          console.log(res);
          localStorage.removeItem("name");
          location.href = "/admin/login";
        })
        .catch(err => {});
    },

    toggle() {
      this.collapsed = !this.collapsed;
      this.width = this.collapsed ? 50 : 200;
    },
    onItemClick(item) {
      this.selectedMenu = item;
      console.log(item);
      if (item.text == "用户列表") {
        this.isShowUserUpdate = true;
        this.isShowIndex = false;
        this.isShowDataUI = false;
      } else if (item.text == "大数据UI") {
        this.isShowDataUI = true;
        this.isShowUserUpdate = false;
        this.isShowIndex = false;
      }
    },
    afterSet: function(echarts) {
      var bmap = echarts
        .getModel()
        .getComponent("bmap")
        .getBMap();
      bmap.addControl(new window.BMap.MapTypeControl());
    },
    showindex() {
      this.isShowUserUpdate = false;
      this.isShowIndex = true;
    }
  },
  components: {
    adminUser,
    bdataui
  }
};
</script>


<style  scoped>
.sidemenu .accordion .panel-title {
  color: #b8c7ce;
}
.sidemenu .accordion .accordion-header {
  background: #222d32;
  color: #b8c7ce;
}
.sidemenu .accordion .accordion-body {
  background: #2c3b41;
  color: #8aa4af;
}
.sidemenu .accordion .accordion-header-selected {
  background: #1e282c;
}
.sidemenu .tree-node-hover {
  background: #2c3b41;
  color: #fff;
}
.sidemenu .tree-node-selected {
  background: #2c3b41;
  color: #fff;
}
.sidemenu .accordion-header .panel-tool {
  display: none;
}
.sidemenu .accordion-header::after,
.sidemenu .tree-node-nonleaf::after {
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  transform: rotate(45deg);
  width: 4px;
  height: 4px;
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -3px;
  border-width: 0 1px 1px 0;
}
.sidemenu .accordion-header-selected::after {
  transform: rotate(-135deg);
}
.sidemenu .tree-node-nonleaf::after {
  transform: rotate(-135deg);
}
.sidemenu .tree-node-nonleaf-collapsed::after {
  transform: rotate(45deg);
}
.sidemenu-collapsed .accordion-header::after {
  display: none;
}
.sidemenu-tooltip .accordion {
  border-color: #1e282c;
}

html,
body {
  margin: 0;
  padding: 0;
}
.app-logo {
  width: 24px;
  height: 24px;
  color: #fff;
  margin: 13px 10px;
}
.main-header {
  background: #3c8dbc;
  color: #fff;
  line-height: 50px;
  height: 50px;
}
.main-title {
  background: #367fa9;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
}
.main-bar {
  background: #3c8dbc;
}
.main-toggle {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #fff;
  margin: 0 10px;
}
.main-body {
  background: #ecf0f5;
  min-height: 888px;
}
.sidebar-body {
  background: #222d32;
}
.sidebar-user {
  color: #fff;
  padding: 20px;
  line-height: 20px;
}
.username {
  text-decoration: none;
}
.menu-index:hover {
  cursor: pointer;
  color: #b8c7ce;
}
.dropdown-menu{
  padding: 0rem;
  font-size: 14px;
  line-height: 30px;
}
</style>

