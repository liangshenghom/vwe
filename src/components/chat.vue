<template>
  <div class="page" id="page" v-Droppable v-title data-title="在线咨询">
    <div class="container border rounded bg-light mt-3" v-Draggable>
      <div class="right">
        <div class="top"></div>
        <div class="title text-center">
          <h5 class="pt-3 pb-3 border-bottom">咨询机器人</h5>
        </div>
        <div class="chat-content"></div>
        <div class="input-content">
          <div class="input-tools"></div>
          <textarea
            class="w-100 p-2 border rounded"
            name="info"
            v-model="info"
            placeholder="输入发送内容"
          ></textarea>
          <button type="button" class="btn btn-primary float-right" @click="send">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "chat",
  data() {
    return {
      info: ""
    };
  },
  methods: {
    send: function() {
      this.$socket.emit("hello", this.info);

      $(".chat-content").append(
        "<h6 class='text-right'>" + this.info + "</h6>"
      );
      this.info = "";
    }
  },
  created:function(){
      
  },
  sockets: {
    connect(data) {
      //向服务器发送消息
      this.$socket.emit("hello", "哈喽！");
      //订阅服务器发送的消息
       this.sockets.subscribe("welcome", function(data) {
        console.log(data);
        $(".chat-content").append("<h6>服务器说：" + data + "</h6>");
      });
     
    }
  }
};
</script>

<style  lang="scss"  scoped>
$bgcolor: #999999;
$bgcolor1: #dddddd;
body {
  background-color: $bgcolor;
}

.right {
  min-height: 700px;
}
.chat-content {
  min-height: 450px;
  max-height: 600px;
  overflow: auto;
  overflow-x: hidden;
}

.input-content {
  width: 100%;
}
</style>>
