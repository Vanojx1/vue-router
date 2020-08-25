import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: `<div class="foo"><h1>foo</h1></div>` }
const Bar = {
  template: `
    <div class="bar">
      <h1>bar</h1>
      <router-link standalone router-name="testRouter" to="/buz">TOBUZ</router-link>
    </div>`
}
const Buz = {
  template: `
    <div class="buz">
      <h1>buz</h1>
      <router-link standalone router-name="testRouter" to="/">TOBAR</router-link>
    </div>`
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Foo }
  ]
})

const testRouter = new VueRouter({
  mode: 'abstract',
  base: __dirname,
  routes: [
    { path: '/', component: Bar },
    { path: '/buz', component: Buz }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <router-view />
      <router-view :standalone="$options.testRouter" router-name="testRouter" />
    </div>
  `,
  testRouter
}).$mount('#app')
