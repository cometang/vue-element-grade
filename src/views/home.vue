<template>
    <div>
        <el-container>
            <el-aside width="200px" class="slide-box">
                <div class="logo-box">
                    <i class="iconfont icon-logo"></i>
                </div>
                <el-menu
                        :default-active="this.$store.state.navDefaultActive"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        style="overflow: hidden;width: 200px;background: #545c64;"
                >
                    <span v-for="(item,key) in menuList" >
                        <el-menu-item v-if="item.child.length ==0"    :index="''+key" @click="navActive(item,key)" >
                            <i class="iconfont icon-box" :class="item.icon"></i>
                            <span slot="title">{{item.title}}</span>
                        </el-menu-item>
                        <el-submenu :index="''+key"  v-if="item.child.length >0" >
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.title}}</span>
                            </template>
                                <el-menu-item :index="key+'-'+key1" v-for="(item1,key1) in item.child" @click="navActive1(key,item1,key1)">{{item1.title}}</el-menu-item>
                        </el-submenu>
                    </span>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="header-box" >
                    <div class="system-box">贵州理工学院排课系统</div>

                    <div class="system-mech">
                        <div style="float: right">
                            <el-button type="danger" plain size="mini" @click="outLogin">注销登录</el-button>
                        </div>
                    </div>
                </el-header>
                <el-main style="background: #f0f2f5;height: 100%;overflow: hidden"  >
                    <div class="main" style="min-height: 100%" >
                        <router-view v-if="isRouterActive"></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>



    </div>
</template>

<script>
    import menu from '@/data/menu'
    export default {
        name: "home",
        components: {},
        data() {
            return {
                showActive: false,
                showActive1: true,
                tableData: [],
                orgName: '',
                isRouterActive: true,
                menuList:[]


            }
        },
        methods: {

            //事件层
            //一级菜单选中事件
            navActive(item,key) {
                this.$store.state.navDefaultActive = ''+key
                this.$router.push(item.path)
            },
            //二级菜单选中事件
            navActive1(key,item1,key1) {
                this.$store.state.navDefaultActive = key+'-'+key1
                this.$router.push(item1.path)
            },



            outLogin(){
                localStorage.setItem('grade', '')
                localStorage.setItem('user_name', '')
                localStorage.setItem('user_id', '')
                this.$router.push('/login')
            }
        },
        mounted() {
            const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
            if(localStorage.getItem('user_id') == '' || localStorage.getItem('user_id') == null){
               this.$message.error('登录信息失效，重新登录')
                this.outLogin()
            }
            if(localStorage.getItem('grade') == this.$constData.grade.teacher){
                this.menuList = menu.teacherMenu
                this.$router.push('/teacherHome')
            }else if(localStorage.getItem('grade') == this.$constData.grade.admin){
                this.menuList = menu.adminMenu
                this.$router.push('/adminHome')
            }else if(localStorage.getItem('grade') == this.$constData.grade.college){
                this.menuList = menu.collegeMenu
                this.$router.push('/collegeHome')
            }
            console.log(localStorage.getItem('grade'))


            this.$store.state.navDefaultActive = '0'
            this.showActive = true

            loading.close()
        }

    }
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .slide-box {
        width: 200px;
        background: #545c64;
        min-height: 100vh;
        overflow: hidden;
    }

    .logo-box {
        width: 200px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 40px;
        color: #fff;
    }

    .logo-box i {
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        font-size: 40px;

    }

    .header-box {
        background: #545c64;
        font-size: 1.8rem;
        line-height: 60px;
        color: #fff;
    }

    .icon-box {
        display: block;
        float: left;
        width: 2rem;
        height: 56px;
        margin-right: 10px;
        font-size: 2rem;
    }

    .system-box {
        float: left;
        width: 250px;
        height: 60px;
        letter-spacing: 5px;
        font-weight: 600;
        text-align: center;
    }

    .system-mech {
        position: relative;
        width: auto;
        height: 60px;
        margin-left: 250px;
        letter-spacing: 5px;
        font-weight: 600;
        text-align: center;

    }

    .system-center {
        position: absolute;
        width: 300px;
        height: 60px;
        left: 50%;
        margin-left: -250px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .system-right {
        position: absolute;
        right: 100px;
        cursor: pointer;
    }

    .system-right span {
        color: #fff;
        border: 1px solid #ddd;
        background: rgba(255, 255, 255, .3);
    }

</style>
