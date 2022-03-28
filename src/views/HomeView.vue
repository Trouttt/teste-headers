<template>
  <v-app>
      <MenuBar />
    <v-container fluid class="d-flex" style="padding:0;">
      <SideBarLeft/>
      <Chat/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MenuBar from '../components/shared/atom/MenuBar.vue';
import SideBarLeft from '../components/shared/atom/SideBarLeft.vue';
import Chat from '../components/chat/organism/Chat.vue';

export default Vue.extend({
  name: 'HomeView',
  data: () => ({
  }),
  components: {
    MenuBar,
    SideBarLeft,
    Chat,
  },
});
</script>
