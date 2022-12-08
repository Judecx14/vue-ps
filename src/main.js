import Vue from 'vue'
import App from './App.vue'
import OneSignalVue from 'onesignal-vue'

Vue.use(OneSignalVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({ appId: '810465bf-8ebd-43c6-9b0a-7726265dde4d' });
  }
}).$mount('#app')
