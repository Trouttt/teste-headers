<template>
  <v-container fluid style="background-color:rgb(200,200,200);padding:0;">
          <v-container class="d-flex" style="height:100%;">
                <v-container style="height:33.1rem;background-color:white;width:75%">
                  <v-text-field label="Another input"></v-text-field>
                  <ListContact/>
                </v-container>
                <ChatMessageBox/>
                <ChatUserInfo/>
          </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ListContact from '../atom/ListContact.vue';
import ChatMessageBox from '../molecule/ChatMessageBox.vue';
import ChatUserInfo from '../atom/ChatUserInfo.vue';

export default Vue.extend({
  name: 'ChatBox',
  data: () => ({
    selectItem: 0,
    drawer: null,
    DataAnalytics: [
      { value: 'fulano@hotmail.com', title: 'Email', icon: 'fa-solid fa-pen' },
      { value: '(46) 61112-3456', title: 'Telefone', icon: 'fa-solid fa-pen' },
      { value: 'São Paulo', title: 'City', icon: 'fa-solid fa-pen' },
      { value: 'SP', title: 'State', icon: 'fa-solid fa-pen' },
      { value: 'Brasil', title: 'Country', icon: 'fa-solid fa-pen' },
      { value: 'BG Company', title: 'Company', icon: 'fa-solid fa-pen' },
    ],
    tabs: [
      {
        icon: 'fa-regular fa-user',
        title: 'Ongoing',
      }, {
        icon: 'fa-regular fa-user',
        title: 'Incoming',
      },
    ],
  }),
  components: {
    ListContact,
    ChatMessageBox,
    ChatUserInfo,
  },
});
</script>
<style scoped>
  .text-central{
    text-align:center;
    color:black;
  }
  .text-user {
    background-color:rgb(250,250,250);
    padding:0.3rem 1rem 0.3rem 1rem;
    word-break: break-word;
    max-width:60%;
    margin:0.5rem 0.5rem 0.5rem 2rem;
  }
  .text-user--hour{
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0rem;
  }
  .text-attendent {
    background-color:rgb(160,255,255);
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0.5rem 0.5rem 0.5rem;
    max-width:60%;
    word-break: break-word;
  }
  .text-attendent--hour{
    font-size: 0.9rem;
    padding:0.3rem 1rem 0.3rem 1rem;
    margin:0.5rem 0rem;
  }
</style>
