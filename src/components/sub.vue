<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    {{showNum}}
    <button @click="btnHandler2">-1</button>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Sub',
  props: {
    msg1: String
  },
  computed:{
    ...mapGetters(['showNum'])
  },
  methods:{
    ...mapActions(['subAsync']),
    btnHandler2(){
      this.subAsync(3)
    }
  }
}
</script>

<style scoped>

</style>
