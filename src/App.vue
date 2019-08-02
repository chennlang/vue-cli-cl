<template>
    <div id="app">
        <NavigationBar />
        <router-view />
    </div>
</template>

<script>
    import NavigationBar from '@/components/common/navigationBar.vue'
    export default {
        name: 'App',
        components: {
            NavigationBar
        },
        created () {
            // this.$on()
        }
    }
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
#app {
}
</style>
