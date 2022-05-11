<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>
 
<script>
export default {
  name: 'School',
  // 简单声明接收
  // props: ['name', 'sex', 'age'],
  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // },
  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      required: true // name是必需的
    },
    sex: {
      type: String,
      required: true // sex是必需的
    },
    age: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      msg: '我是一个学生',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>

<style>
</style>