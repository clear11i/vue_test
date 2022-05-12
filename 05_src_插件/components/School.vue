<template>
  <div>
    <h2>学校姓名：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
 
<script>
export default {
  name: 'School',
  data() {
    return {
      name: '学校阿萨德了',
      address: '杭州'
    }
  }
}
</script>

<style>
</style>