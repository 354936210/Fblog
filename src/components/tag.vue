<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>{{$t('tag.tag')}}</span>
			</div>
			<div class="text item">
				<el-tag v-for="mtag of tagList" v-bind:key="mtag.id" size="small" class="tag-item" :type="getTypeMethod()"
						@click="tag(mtag.tagName)">{{mtag.tagName}}[{{mtag.total}}]</el-tag>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'tag',
		methods: {
			tag(name) {
				this.$router.push({
					name: 'tag',
					params: {
						'name': name,
						'pass': 123
					}
				});
			},
			getTypeMethod(){
				//样式
				var typeList=['','success','info','warning','danger']
				var i=this.random(0,5);
				//随机返回样式
				return typeList[i];
			},
			//获取上下限均包含的随机数
			random (min, max){
				return Math.floor(Math.random() * (max- min + 1)) + min;
			}
		},
		data() {
			return{
				varSuccess:'danger',
				tagList:[]
			}
		},
		created() {
			this.$axios.get("/tag/getWithNum").then(
					value => {
						this.tagList=value.data;
					}
			)
		}
	}
</script>

<style scoped>
	.box-card .item:hover {
		color: #409EFF;
		cursor: pointer;
	}

	.box-card span {
		font-weight: bold;
	}

	.card-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}

	.tag-item {
		margin-right: 10px;
	}
</style>
