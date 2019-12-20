<template>
  <div class="hello">
      <el-button @click="showModal">hello world</el-button>
      <el-button @click="showModal2">hello world 2</el-button>
  </div>
</template>

<script>
  import {modalCtor} from '@/utils'
  import Modal from '@/components/Modal'
  const ModalService = modalCtor(Modal)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    showModal () {
      ModalService.create.call(this, {
        propsData: {
          msg: 'hello'
        }
      }, (instance) => {
        // eslint-disable-next-line no-console
        console.log(instance)
      })
    },
    showModal2() {
      ModalService.create.call(this, {
        propsData: {
          msg: '123123'
        }
      }, (instance) => {
        // eslint-disable-next-line no-console
        console.log(instance)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
