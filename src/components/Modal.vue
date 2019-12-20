<template>
    <el-dialog title="提示" :visible.sync="visible">
        <span>{{msg}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      visible: Boolean,
      msg: String,
    }
  }
</script>

<style scoped>

</style>
