/*左侧导航栏菜单生成的内容*/


//管理员权限菜单
const  adminMenu =[
    {
        path:'/adminHome',
        title:'学校首页',
        icon:'course_shouye',
        child:[]
    },
    {
        path:'/adminPlan',
        title:'排课管理',
        icon:'course_908caidan_anpai',
        child:[]
    },
    {
        path:'/adminCollege',
        title:'学院管理',
        icon:'course_guanli',
        child:[]
    },
    {
        path:'/adminTeacher',
        title:'教师管理',
        icon:'course_xueyuanpeizhi',
        child:[]
    },
    {
        path:'/adminRoom',
        title:'教室管理',
        icon:'course_guanli1',
        child:[]
    },
    {
        path:'/adminExamine',
        title:'审核管理',
        icon:'course_xiugai1',
        child:[]
    },
    {
        path:'/adminNotice',
        title:'通知管理',
        icon:'course_tongzhi',
        child:[]
    },
    {
        path:'/adminWork',
        title:'工作总量',
        icon:'course_tongji',
        child:[]
    },

]
//二级学院权限菜单
const collegeMenu = [
    {
        path:'/collegeHome',
        title:'学院首页',
        icon:'course_shouye',
        child:[]
    },
    {
        path:'/collegeCourse',
        title:'课程大纲',
        icon:'course__zhuanzhengongzuoliang',
        child:[]
    },
    {
        path:'/collegeWork',
        title:'工作量管理',
        icon:'course_guanli1',
        child:[]
    },
    {
        path:'/collegePlan',
        title:'排课管理',
        icon:'course_908caidan_anpai',
        child:[]
    },
    {
        path:'/collegeNotice',
        title:'通知管理',
        icon:'course_tongzhi',
        child:[]
    },

]

//教师权限菜单
const  teacherMenu=[
    {
        path:'/teacherHome',
        title:'教师首页',
        icon:'course_shouye',
        child:[]
    },
    {
        path:'/teacherPlan',
        title:'我的排课',
        icon:'course_908caidan_anpai',
        child:[]
    },
    {
        path:'/teacherWork',
        title:'工作总量',
        icon:'course__zhuanzhengongzuoliang',
        child:[]
    },
    {
        path:'/teacherNotice',
        title:'我的通知',
        icon:'course_tongzhi',
        child:[]
    }
]



export default {
    adminMenu,
    collegeMenu,
    teacherMenu
}
