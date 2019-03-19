y
<template>
  <div>
    <ShowTop :fruits="fruits" :banners="banners"></ShowTop>
    <ShowCard></ShowCard>
    <ShowLevel></ShowLevel>
    <ShowVertical></ShowVertical>
  </div>
</template>


<script>

import request from '@/utils/request'
import ShowTop from '@/components/showlist/ShowTop'
import ShowCard from '@/components/showlist/ShowCard'
import ShowLevel from '@/components/showlist/ShowLevel'
import ShowVertical from '@/components/showlist/ShowVertical'



export default {

  data () {
    return {
       fruits: [],
       banners: []
    }
  },

  components: {
    ShowTop,
    ShowCard,
    ShowLevel,
    ShowVertical
  },

  // mounted () { 
  //   this.get()
  // },

  async created() {
    const result1 = await request({
      url: 'proxy/ajax/home/index?cityCode=021'
    })
    const result2 = await request({
      url: 'https://api.myjson.com/bins/6ufni'
    })
    this.fruits = result1.result.frontCateInfo
    this.banners = result2

  },




  // methods: {
  //   get(){
  //     fetch('proxy/ajax/home/index?cityCode=021')
  //       .then(response => response.json())
  //       .then(result => {
  //         this.fruits = result.result.frontCateInfo
  //     })
  //     fetch('https://api.myjson.com/bins/6ufni')
  //       .then(response => response.json())
  //       .then(result => {
  //         this.banners = result
  //     })
      
  //     // console.log(fruits.frontCateInfo)
  //   }
  // }
  

}
</script>

<style lang="stylus" scoped>


</style>

