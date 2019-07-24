<template>
  <div class="navigation-bar">
    <ul class="nav-wrap">
        <li class="nav-item">
            <router-link  to="/">首页</router-link >
        </li>
        <li class="nav-item">
            <router-link  to="/demo">demo</router-link >
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
