import LoadingComponent from './Loading.vue'

let Index = {}

Index.install = (Vue) => {
  Vue.component('loading', LoadingComponent)
}

export default Index
