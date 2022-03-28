<template>
        <v-container fluid style="padding:0;">
        <ChatHeader/>
        <ChatBox/>
      </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatBox from './ChatBox.vue';
import ChatHeader from '../atom/ChatHeader.vue';

export default Vue.extend({
  name: 'ChatPage',
  components: {
    ChatBox,
    ChatHeader,
  },
});
</script>
