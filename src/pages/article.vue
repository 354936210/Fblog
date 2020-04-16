<template>
	<div>
		<el-row class="main" type="flex" justify="center">
			<el-col :span="16" class="content">
				<div id="artcle-info" :style="head_background_img">
					<h2 class="text-center"><strong>{{mArticle.title}}</strong></h2>
					<!-- 描述：文章信息 -->
					<div class="text-center timeAndView">
						<span class="article-time">
							<i class="el-icon-time"></i>
							发表于：<span>{{mArticle.createTime}}</span>
						</span>
						&nbsp;|&nbsp;
						<span class="article-views">
							<i class="el-icon-view"></i>
							阅读量：<span>{{mArticle.browseVolume}}</span>
						</span>
					</div>
					<p class="abstract">
						前言：swagger2功能非常强大，用自己的一句话概括：它是一个构建强大的RESTful API文档以及调试的框架。
					</p>
				</div>
				<hr />
				<div id="artcle-content">
					<vue-markdown :source="mArticle.articleDtl.articleContent"></vue-markdown>
<!--					<div v-html="mArticle.articleDtl.articleContent"></div>-->
					<span style="color:#3399ea;"><em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 既然上了生活的贼船，那就做个快乐的海盗吧--Hello Bird</em></span></p>
				</div>
				<div id="statement">
					<div class="item">{{$t('article.author')}}：hello bird</div>
					<div class="item">{{$t('article.originalLink')}}：
						<a href="http://www.heimabird.com/">http://www.heimabird.com/</a>
					</div>
					<div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import VueMarkdown from 'vue-markdown'
	export default {
		name: 'article',
		data() {
			return {
				mArticle:{
					articleDtl:{
						articleContent:''
					}
				},
				head_background_img:'background-image: url("https://w354936210.oss-cn-zhangjiakou.aliyuncs.com/myblog/vue.jpg")'
			}
		},
		methods:{

		},
		created() {
			var articleId=this.$route.query.id;
			this.$axios.get("/article/getOne?id="+articleId).then(
					value => {
						this.mArticle = value.data;
						this.head_background_img='background-image: url("'+this.mArticle.articleDtl.headImg+'")'
					}
			)
		},
		components: {
			VueMarkdown
		}
	}
</script>

<style scoped>
	#artcle-info {
		padding: 20px;
		background-image: url(../assets/vue.jpg);
		margin-bottom: 40px;
	}

	#artcle-info .abstract {
		color: #ffffff;
		border-left: 3px solid #F56C6C;
		padding: 10px;
		background-color: rgba(126, 129, 135, 0.3);
	}

	#artcle-info .timeAndView {
		padding: 20px;
		line-height: 30px;
		font-size: 16px;
		color: #ffffff;
	}

	pre.has {
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.8);
	}
	img{

	}
	img{
		width: 100%;
		position: absolute;
	}

	#statement {
		border-left: 3px solid #F56C6C;
		padding: 20px;
		background-color: #EBEEF5;
	}
	.content{
        background-color: #f9f9f9;
	}
    #artcle-content{
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
