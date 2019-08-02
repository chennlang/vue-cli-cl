<template>
    <div class="page-demo">
        <h2>DemoShow</h2>
        <div class="demo-item">
            <h3>组件自定义v-model</h3>
            <VModel v-model="txt" />
            <div>父txt: {{txt}}</div>
        </div>
    </div>
</template>

<script>
    import VModel from '@/components/demo/vModel.vue'
    export default {
        name: 'DemoShow',
        components: {
            VModel
        },
        data () {
            return {
                txt: '20'
            }
        }
    }
</script>

<style scoped>
  .page-demo {
    width: 100%;
  }
  .page-demo h3 {
      text-align: left;
  }
  .demo-item {
    padding: 20px;
    width: 100%;
    border-top: 1px solid #000;
  }
</style>
