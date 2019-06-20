exports.routeOBJ = [
  {
    path: '/login',
    component: '../layouts/main/main',
  },
  {
    path: '/',
    component: '../layouts/main/main',
    routes:[
      {
        path:'/',
        redirect:'/discover/recommend'
      },
      {
        path:'/discover/recommend',
        component:'./discover/recommend'
      }
    ]
  },

];
