<template>
	<div class="archive">
		<div class="count">{{this.$route.params.name || $t('header.archive')}}：{{activities.length}}{{$t('archive.article')}}</div>
		<el-timeline>
			<el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color" :timestamp="activity.createTime" placement="top" @mouseenter="hoverLine(activity)">
				<div class="line-item">
					<router-link :to="{path:'/article',query:{id:activity.articleId}}"  tag="span">{{activity.title}}</router-link>
				</div>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
	export default {
		name: 'archive',
		data() {
			return {
				activities: []
			};
		},
		methods: {
			hoverLine(activity) {
				activity.color = "#409eff"
			}
		},
		created() {

			if (this.$route.params.tagId==null){
				this.$axios.get(this.COMMON.httpUrl+"article/getAllArchive").then(
						value => this.activities=value.data
				)
			} else {
				this.$axios.get(this.COMMON.httpUrl+"article/getByTag?tagId="+this.$route.params.tagId).then(
						value => {
							this.activities=value.data
						}
				)
			}

		}
	}
</script>

<style scoped>
	.line-item {
		display: inline-block;
	}

	.line-item:hover {
		cursor: pointer;
		color: #409EFF;
	}

	.count {
		margin-bottom: 20px;
		font-size: 20px;
		color: #E6A23C;
	}
</style>
