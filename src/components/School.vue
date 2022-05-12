<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
 
<script>
// import { hunhe, hunhe2 } from '../mixin'
export default {
  name: 'School',
  data() {
    return {
      name: '学校',
      address: '杭州'
    }
  }
  // mixins: [hunhe, hunhe2]
}
</script>

<style>
</style>