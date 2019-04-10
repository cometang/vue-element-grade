import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import login from './views/login'

const teacherHome  = ()=>import('./views/teacher/home/teacherHome')
const teacherPlan  = ()=>import('./views/teacher/plan/teacherPlan')
const teacherWork  = ()=>import('./views/teacher/work/teacherWork')
const teacherNotice =()=>import('./views/teacher/notice/teacherNotice')

const adminHome  = ()=>import('./views/admin/home/adminHome')
const adminPlan  = ()=>import('./views/admin/plan/adminPlan')
const adminCollege  = ()=>import('./views/admin/college/adminCollege')
const adminTeacher  = ()=>import('./views/admin/teacher/adminTeacher')
const adminRoom  = ()=>import('./views/admin/room/adminRoom')
const adminExamine  = ()=>import('./views/admin/examine/adminExamine')
const adminNotice  = ()=>import('./views/admin/notice/adminNotice')
const adminWork  = ()=>import('./views/admin/work/adminWork')

const  collegeHome = ()=>import('./views/college/home/collegeHome')
const  collegeCourse = ()=>import('./views/college/course/collegeCourse')
const  collegeWork = ()=>import('./views/college/work/collegeWork')
const  collegePlan = ()=>import('./views/college/plan/collegePlan')
const  collegeNotice = ()=>import('./views/college/notice/collegeNotice')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'login',
          component: login,
      },
      {
          path:'/home',
          name:'home',
          component:home,
          children:[
              //教师
              {
                  path: '/teacherHome',
                  name: 'teacherHome',
                  component: teacherHome
              },
              {
                  path: '/teacherPlan',
                  name: 'teacherPlan',
                  component: teacherPlan
              },
              {
                  path:'/teacherWork',
                  name:'teacherWork',
                  component:teacherWork
              },
              {
                  path:'/teacherNotice',
                  name:'teacherNotice',
                  component:teacherNotice
              },


              //校级管理
              {
                  path: '/adminHome',
                  name: 'adminHome',
                  component: adminHome
              },
              {
                  path: '/adminPlan',
                  name: 'adminPlan',
                  component: adminPlan
              },
              {
                  path: '/adminCollege',
                  name: 'adminCollege',
                  component: adminCollege
              },
              {
                  path: '/adminTeacher',
                  name: 'adminTeacher',
                  component: adminTeacher
              },
              {
                  path: '/adminRoom',
                  name: 'adminRoom',
                  component: adminRoom
              },
              {
                  path: '/adminExamine',
                  name: 'adminExamine',
                  component: adminExamine
              },
              {
                  path: '/adminNotice',
                  name: 'adminNotice',
                  component: adminNotice
              },
              {
                  path: '/adminWork',
                  name: 'adminWork',
                  component: adminWork
              },


              //院级管理
              {
                  path: '/collegeHome',
                  name: 'collegeHome',
                  component: collegeHome
              },
              {
                  path:'/collegeCourse',
                  name:'collegeCourse',
                  component:collegeCourse
              },
              {
                  path:'/collegeWork',
                  name:'collegeWork',
                  component:collegeWork
              },
              {
                  path:'/collegePlan',
                  name:'collegePlan',
                  component:collegePlan
              },
              {
                  path:'/collegeNotice',
                  name:'collegeNotice',
                  component:collegeNotice
              },


          ]
      },
      {
          path:'/login',
          name:'login',
          component:login
      }


  ]
})
