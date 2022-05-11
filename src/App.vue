<template>
  <div>
    <Student name="李四" sex="女" :age="18" />
    <hr />
    <Student name="王老五" sex="男" :age="19" />
    <hr />
    <Student name="张三" sex="男" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    Student
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
