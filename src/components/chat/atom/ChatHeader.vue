<template>
  <v-container fluid style="background-color:rgb(250,250,250)" class="pb-0" >
          <p class="mb-0" style="color:grey;">Customer Service</p>
          <v-container class="d-flex px-0 py-0" fluid>
            <p style="font-size:2rem;"><strong>Live Chat</strong></p>
            <v-spacer></v-spacer>
            <v-btn color="rgb(250,70,0)" style="color:white;">New Chat</v-btn>
          </v-container>
          <v-container fluid class="py-0">
                <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
      style="width:40%;"
    >

      <v-tab
        @click="validateIncoming(true)"
      >
        Incoming
      </v-tab>
      <v-tab
        @click="validateIncoming(false)"
      >
        Ongoing
      </v-tab>
    </v-tabs>
    </v-container>
      </v-container>
</template>

<script lang="ts">
import { ChatMutations } from '@/store/chat/mutations';
import Vue from 'vue';

export default Vue.extend({
  name: 'ChatHeader',

  methods: {
    validateIncoming(currentValue: boolean) {
      this.changeIncoming = currentValue;
    },
  },
  data: () => ({
    tab: 'incoming',
  }),
  computed: {
    changeIncoming: {
      set(value: boolean): void {
        this.$store.commit(ChatMutations.CHANGE_INCOMING, value);
      },
    },

  },
});
</script>
