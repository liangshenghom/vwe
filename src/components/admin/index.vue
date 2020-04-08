<template>
  <div>
    <div class="top container-fluid shadow-sm bg-dark text-white">
      <div class="row">
        <div class="col-sm-2 pt-3 pb-3">管理后台</div>
        <div class="col-sm-8 pt-3 pb-3"></div>
        <div class="col-sm-2 pt-3 pb-3 text-right">
          <a href="javascript:void(0);" class="btn text-white btn-link" @click="logout">退出</a>
        </div>
      </div>
    </div>
    <div class="main container-fluid">
      <div class="row">
        <div class="left col-sm-2 border-right">
          <h2>Accordion Style</h2>
          <Accordion class="a1" :animate="true">
            <AccordionPanel
              v-for="menu in menus"
              :key="menu.text"
              :title="menu.text"
              :iconCls="'fa fa-'+menu.iconCls"
            >
              <div style="padding: 5px">
                <a class="item" href="#" v-for="item in menu.submenus" :key="item">{{item}}</a>
              </div>
            </AccordionPanel>
          </Accordion>
        </div>

        <div class="right col-sm-10">
          <Tabs class="mt-3" style="height:250px">
            <TabPanel :title="'Tab1'">
              <p>Tab Panel1</p>
            </TabPanel>
            <TabPanel :title="'Tab2'">
              <p>Tab Panel2</p>
            </TabPanel>
            <TabPanel :title="'Tab3'">
              <p>Tab Panel3</p>
            </TabPanel>
            <TabPanel :title="'Help'" :closable="true" iconCls="icon-help">
              <p>This is the help content.</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menus: [
        {
          text: "Forms",
          iconCls: "wpforms",
          submenus: ["Form Element", "Wizard", "File Upload"]
        },
        {
          text: "Mail",
          iconCls: "at",
          submenus: ["Inbox", "Sent", "Trash"]
        },
        {
          text: "Layout",
          iconCls: "table",
          submenus: ["Panel", "Accordion", "Tabs"]
        }
      ]
    };
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
    }
  }
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 900px;
}
</style>

