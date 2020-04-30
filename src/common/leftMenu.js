const leftMenu=[
    {
        title:'home',
        key:'home',
        path:'/',
    },
    {
        title:'test',
        key:'test',
        children:[
            {
                title:'about',
                key:'about',
                path:'/about',
            },
            {
                title:'user',
                key:'user',
                path:'/user',
            },
        ],
    },

]

export default leftMenu;