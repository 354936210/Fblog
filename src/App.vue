<template>
  <div class="app">
  	<f-header :class="{'navBarWrap':navBarFixed}"></f-header>
  	<el-row type="flex" justify="center" id="content">
  		<el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
  			<router-view></router-view>
  		</el-col>
  	</el-row>
		<f-footer></f-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return{
  		minHeight: 0,
  		navBarFixed: false
  	};
  },
  components: {
  },
  methods: {
  	watchScroll () {
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 50) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
  	}
  },
  mounted () {
	  window.addEventListener('hashchange',()=>{
		  var currentPath = window.location.hash.slice(1); // 获取输入的路由
		  if(this.$router.path !== currentPath){
			  this.$router.push(currentPath); // 动态跳转
		  }
	  },false);
  		let that = this
  		that.minHeight = document.documentElement.clientHeight
  		window.addEventListener('scroll', that.watchScroll)
  		window.onresize = function () {
  			that.minHeight = document.documentElement.clientHeight
  		}
  	}
}
</script>

<style scoped>
	.app{
		font-family: "microsoft yahei";
	}
	#content{
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586885018925&di=0b29e66dfd475412b8671a60837a5883&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Ffcfaaf51f3deb48fd56ba723f61f3a292cf578c8.jpg");
		background-attachment: fixed;
		background-color: #f9f9f9;
		padding: 10px 0;
	}
	.navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
    width: 100%;
  }
</style>
