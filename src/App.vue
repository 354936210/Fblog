<template>
  <div class="app">
  	<f-header :class="{'navBarWrap':navBarFixed}"></f-header>
  	<el-row type="flex" justify="center" id="content">
  		<el-col :xs="24" :md="24" :style="{'minHeight':minHeight+'px'}">
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
		background-image: url("https://w354936210.oss-cn-zhangjiakou.aliyuncs.com/myblog/%E5%B9%B3%E9%93%BA%E5%9B%BE%E7%89%87/%E7%A7%8B%E7%94%B0%E7%8A%AC.jpeg");
		/*background-attachment: fixed;*/
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
