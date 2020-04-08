<template>
  <div>
    <div class="top container-fluid shadow-sm bg-dark text-white">
      <div class="row">
        <div class="col-sm-2 pt-3 pb-3">管理后台</div>
        <div class="col-sm-8 pt-3 pb-3"></div>
        <div class="col-sm-2 pt-3 pb-3 text-right">退出</div>
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
  }
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 900px;
}
</style>

