<template>
	<div class="tag">
		<el-card class="box-card">
			<div slot="header" class="d-flex align-items-center">
				<img class="card-icon" src="../assets/biaoqian.png" />
				<span>{{$t('tag.tag')}}</span>
			</div>
			<div class="text item">
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('Java')">Java[12]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('SpringBoot')">SpringBoot[8]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('HTML')">HTML[8]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('Mysql')">Mysql[5]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('Vue')">Vue[3]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('jQuery')">jQuery[6]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('SpringCloud')">SpringCloud[9]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('SpringCloud')">SpringCloud[9]</el-tag>
				<el-tag size="mini" class="tag-item" :type="getTypeMethod()" @click="tag('SpringCloud')">SpringCloud[8]</el-tag>
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
				var typeList=['','success','info','warning','info','danger']
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
				varSuccess:'danger'
			}
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
