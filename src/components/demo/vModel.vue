<template>
    <div class="v-model">
        <span class="">子txt： {{ value }}</span>
        <button @click="change">点击</button>
    </div>
</template>

<script>
/**
 * 自定义组件 v-model 的用法
 * v-model 相当于做了两件事。
 * 1. 绑定了value
 * 2. 值改变后调用change事件
 */
    export default {
        name: 'vModel',
        model: {
            prop: 'txt',
            event: 'change'
        },
        props: {
            txt: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                value: this.txt
            }
        },
        methods: {
            change () {
                this.value += 1
                this.$emit('change', this.value)
            }
        }
    }
</script>

<style scoped>

</style>
