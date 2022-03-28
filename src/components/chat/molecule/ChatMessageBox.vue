<template>
  <v-container fluid class="ml-2"
                style="padding:0;background-color:white;height:100%;width:100%;">
                <ChatMessageBoxHeader/>
                <ChatMessageBoxBody/>
               </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatMessageBoxBody from '../atom/ChatMessageBoxBody.vue';
import ChatMessageBoxHeader from '../atom/ChatMessageBoxHeader.vue';

export default Vue.extend({
  name: 'ChatMessageBox',
  data: () => ({
  }),
  components: {
    ChatMessageBoxHeader,
    ChatMessageBoxBody,
  },
});
</script>
