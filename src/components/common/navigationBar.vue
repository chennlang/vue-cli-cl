<template>
    <div class="navigation-bar">
        <ul class="nav-wrap">
            <li
                v-for="(nav, index) in navList"
                :key="index"
                class="nav-item">
                <router-link :to="nav.path">{{ nav.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'navigationBar',
        data () {
            return {
                navList: [
                    {
                        name: '首页',
                        key: 'home',
                        path: '/'
                    },
                    {
                        name: 'Vue Demo',
                        key: 'demo',
                        path: '/demo'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';
    .navigation-bar {
        width: 100%;
        height: 45px;
        line-height: 45px;
        background-color: #000;
        .nav-wrap {
            .nav-item {
                display: inline-block;
                margin-left: 20px;
                padding: 0 20px;
                height: 100%;
                background-color: #b6b6b6;
                a {
                    color: #ffffff;
                }
            }
        }
    }
</style>
