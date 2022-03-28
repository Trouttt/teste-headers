import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { chat } from './chat/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hellou',
  },
  modules: {
    chat,
  },
};

export default new Vuex.Store<RootState>(store);
