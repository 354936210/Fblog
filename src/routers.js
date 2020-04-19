import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import apply from './pages/apply'
import mytest from './pages/test'

const routes = [
{
	path:'/',
    component:home
},
{
	path:'/home',
	name:'home',
    component:home
},
{
    path:'/about',
    name:'about',
    component:about
},
{
    path:'/archive',
    name:'archive',
    component:archive
},
{
    path:'/tag/:name/:tagId',
    name:'tag',
    component:archive
},
{
    path:'/article',
    name:'article',
    component:article
},
{
    path:'/apply',
    name:'apply',
    component:apply
},
{
    path:'/mytest',
    name:'mytest',
    component:mytest
},
{
    path:'*',
    redirect:'/'
}
]
export default routes;
