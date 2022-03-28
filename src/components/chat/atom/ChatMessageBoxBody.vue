<template>
  <section style="height:28.1rem;" class="d-flex flex-column justify-space-around">
                  <section style="overflow:scroll;overflow-x: hidden;">

                   <section style="width:90%" class="d-flex justify-end mt-1">
                    <v-btn
                      icon
                      color="black"
                    >
                      <v-icon>fa-light fa-arrow-rotate-right</v-icon>
                    </v-btn>
                    </section>
                    <section>
                      <p class="text-central mb-0">Created by bot</p>
                      <p class="text-central">28/11/2022 12:50 pm</p>
                    </section>
                    <section v-for="(message, index) in messages" :key="index"
                      style="width:90%" class="d-flex flex-wrap">
                      <section style="width:100%"
                      :class="['d-flex', message.isAdmin === false ?
                       'justify-start' : 'flex-row-reverse', 'align-center']">
                        <p
                          style="border-radius:1rem;"
                          :class="[message.isAdmin === false ?
                         'text-user' : 'text-attendent',]">
                          {{message.message}}
                        </p>
                        <p :class="[message.isAdmin === false ?
                         'text-user--hour' : 'text-attendent--hour']">
                          {{message.date}}
                        </p>
                      </section>

                    </section>
                  </section>
                  <v-divider></v-divider>
                  <section class="d-flex align-center" >
                  <v-avatar size="50" class="mx-2">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/4.jpg"></v-img>
                  </v-avatar>
                  <v-text-field v-model="newMessage"
                  v-on:keyup.enter="onEnter" label="Another input"></v-text-field>
                  <v-btn icon>
                    <v-icon>fa-solid fa-microphone</v-icon>
                  </v-btn>
                  </section>
                 </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChatMessageBoxHeader',
  data: () => ({
    newMessage: '',
    messages: [
      {
        id: 1,
        message: 'Bom dia, gostaria de falar com fulano',
        user_id: 'user1',

        date: '14:05',
        isAdmin: false,
      },
      {
        id: 2,
        user_id: 'attendent1',
        message: 'Olá, eu sou Regiane, atendente na HEADERS.',
        date: '14:05',
        isAdmin: true,
      },
      {
        id: 3,
        user_id: 'attendent1',
        message: 'Em que posso ajudá-lo?',
        date: '14:05',
        isAdmin: true,
      },
      {
        id: 4,
        user_id: 'user1',
        message: 'Eu tenho uma dúvida a respeito dos produtos da empresa, gostaria de saber mais sobre todos os serviços que a empresa disponibiliza.',
        date: '14:05',
        isAdmin: false,
      },
      {
        id: 5,
        user_id: 'attendent1',
        message: 'Temo bastante serviços, desde coisas simples até coisas complexas. Oferecemos o melhor preço do mercado e estamos no mercado internacional, atuando diretamente com pessoas de outros países.',
        date: '14:05',
        isAdmin: true,
      },
    ],
  }),
  methods: {
    formatDate() {
      const newDate = new Date();
      let hours = newDate.getHours().toString();
      let minutes = newDate.getMinutes().toString();
      if (hours === '1'
      || hours === '2'
      || hours === '3'
      || hours === '4'
      || hours === '5'
      || hours === '6'
      || hours === '7'
      || hours === '8'
      || hours === '9') {
        hours = `0${hours}`;
      }
      if (minutes === '1'
        || minutes === '2'
        || minutes === '3'
        || minutes === '4'
        || minutes === '5' || minutes === '6'
        || minutes === '7'
        || minutes === '8'
        || minutes === '9') {
        minutes = `0${minutes}`;
      }

      return `${hours}:${minutes}`;
    },
    onEnter() {
      const newTime = this.formatDate();

      const { id } = this.messages[this.messages.length - 1];

      this.messages.push(
        {
          id: id + 1,
          user_id: 'user1',
          message: this.newMessage,
          date: newTime,
          isAdmin: true,
        },
      );
      this.newMessage = '';
    },
  },
  components: {
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
    background-color:rgb(32,92,227);
    color: white;
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
