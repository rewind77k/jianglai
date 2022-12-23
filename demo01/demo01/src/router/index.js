import { createRouter, createWebHashHistory } from 'vue-router'


import Login from '@/views/Login.vue'




const routes = [
  
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  
  {
    path: '/index_student',
    name: 'index_student',
    redirect:'index_student-2',
    component: () => import('../views/index_student.vue'),
    children:[
      {
        path: '/index_student-1-1-1',
        name: 'index_student-1-1-1',
        component: () => import('../views/index_student-1-1-1.vue'),
      },
      {
        path: '/index_student-1-1-2',
        name: 'index_student-1-1-2',
        component: () => import('../views/index_student-1-1-2.vue'),
      },
      {
        path: '/index_student-1-1-3',
        name: 'index_student-1-1-3',
        component: () => import('../views/index_student-1-1-3.vue'),
      },
      {
        path: '/index_student-1-1-4',
        name: 'index_student-1-1-4',
        component: () => import('../views/index_student-1-1-4.vue'),
      },
      {
        path: '/index_student-1-2-1',
        name: 'index_student-1-2-1',
        component: () => import('../views/index_student-1-2-1.vue'),
      },
      {
        path: '/index_student-1-2-2',
        name: 'index_student-1-2-2',
        component: () => import('../views/index_student-1-2-2.vue'),
      },
      {
        path: '/index_student-1-3-1',
        name: 'index_student-1-3-1',
        component: () => import('../views/index_student-1-3-1.vue'),
      },
      {
        path: '/index_student-1-4-1',
        name: 'index_student-1-4-1',
        component: () => import('../views/index_student-1-4-1.vue'),
      },
      {
        path: '/index_student-2',
        name: 'index_student-2',
        component: () => import('../views/index_student-2.vue'),
      },{
        path: '/index_student-check',
        name: 'index_student-check',
        component: () => import('../views/index_student-check.vue'),
      },

      
    ]
  },
  {
    path: '/index_teacher',
    name: 'index_teacher',
    redirect:'index_teacher_g',
    component: () => import('../views/index_teacher.vue'),
    children:[
      {
        path: '/index_teacher-1-1-1',
        name: 'index_teacher-1-1-1',
        component: () => import('../views/index_teacher-1-1-1.vue'),
      },
      {
        path: '/index_teacher_g',
        name: 'index_teacher_g',
        component: () => import('../views/index_teacher_g.vue'),
      }
    ]
  },

{
  path:'/index_counselor',
  name:'index_counselor',
  redirect:'index_counselor_g',
  component: () => import('../views/index_counselor.vue'), 
  children:[
      {
        path: '/index_counselor-1-1-1',
        name: 'index_counselor-1-1-1',
        component: () => import('../views/index_counselor-1.vue'),
      },
      {
        path: '/index_counselor-MaterialReview',
        name: 'index_counselor-MaterialReview',
        component: () => import('../views/index_counselor-MaterialReview.vue'),
        
      },
      {
        path: '/index_counselor_R',
        name: 'index_counselor_R',
        component: () => import('../views/index_counselor_R.vue'),
      },
      {
        path: '/index_counselor_S',
        name: 'index_counselor_S',
        component: () => import('../views/index_counselor_S.vue'),
      },
      {
        path: '/index_counselor-GradeOverLook',
        name: 'index_counselor-GradeOverLook',
        component: () => import('../views/index_counselor-GradeOverLook.vue'),
      },
      {
        path: '/index_counselor_g',
        name: 'index_counselor_g',
        component: () => import('../views/index_counselor_g.vue'),
      },
      
      
  ]
},
{
  path:'/index_auditor', 
  name:'index_auditor',
  redirect:'index_auditor_g',
  component: () => import('../views/index_auditor.vue'), 
  children:[
      {
        path: '/index_auditor-MaterialReview',
        name: 'index_auditor-MaterialReview',
        component: () => import('../views/index_auditor-MaterialReview.vue'),
        
      },
      {
        path: '/index_auditor_R',
        name: 'index_auditor_R',
        component: () => import('../views/index_auditor_R.vue'),
      },
      {
        path: '/index_auditor_g',
        name: 'index_auditor_g',
        component: () => import('../views/index_auditor_g.vue'),
      },
  ]
},




  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  }
  ,
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../views/test2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 挂载路由导航守卫****
 
router.beforeEach((to, from, next) => {
  // 如果访问的是login页面 则直接放行
  if (to.path === '/Login') return next()
  // 获取token
  var tokenStr = window.sessionStorage.getItem("token")
  // 判断有没有拿到token，如果没有则强制跳转到login页面Item('token')
  if (!tokenStr) return next('/Login')
  // 否则，拿到token则直接放行
  next()
}) 



export default router
