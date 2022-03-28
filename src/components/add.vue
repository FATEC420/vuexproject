<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <h4>{{$store.getters.showNum}}</h4>
    <button @click="btnHandler1">+2</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'Add',
  props: {
    msg: String
  },
  computed:{
    ...mapState(['count','sum'])
  },
  data(){
    return{

    }
  },
  methods:{
    ...mapMutations(['addCount']),
    btnHandler1(){
      this.addCount(3)
    }
  }
}
</script>

<style scoped>

</style>
