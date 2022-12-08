import Vue from 'vue'
import App from './App.vue'
import OneSignalVue from 'onesignal-vue'

Vue.use(OneSignalVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({ appId: '568287a6-c329-442c-b252-6e4cf52380ab' });
  }
}).$mount('#app')
