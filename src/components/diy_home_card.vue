<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="width:868px;border-radius: 10px;background: rgba(255,255,255,0.6)" >
            <el-row style="border-radius: 10px;">
                <el-col v-if="isShow(articleIndex)" style="width:55%;height: 300px;overflow: hidden;">
                    <img @click="article_more(article.id)" class="art-banner" :src="article.imgLazy" >
                </el-col>
                <el-col  style="width:45%;height: 300px;overflow: hidden;padding: 20px">
                    <el-row>
                        <div class="el-icon-time" style="color: #888;font-size: 12px;">{{article.createTime}}</div>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" >
                            <H3>
                                {{article.title}}
                            </H3>
                        </el-link>
                    </el-row>
                    <el-row style="margin-top: 0px">
                            <div class="el-icon-view" style="color: #888;font-size: 12px;margin-right: 10px;">&nbsp;{{article.browseVolume}}热度</div>
                            <div class="el-icon-chat-dot-square" style="color: #888;font-size: 12px;margin-right: 10px">&nbsp;2条评论</div>
                            <div class="el-icon-folder-opened" style="color: #888;font-size: 12px;margin-right: 10px">&nbsp;消息队列</div>
                    </el-row>
                    <el-row style="margin-top: 10px">
                        <div class="float-content">
                            {{article.synopsis}}
<!--                            消息队列(MQ)概述 消息队列（Message Queue），是分布式系统中重要的组件，其通用的使用场景可以简单地描述为： 当不需 …-->
                        </div>
                    </el-row>
                </el-col>
                <el-col v-if="!isShow(articleIndex)" style="width:55%;height: 300px;overflow: hidden;">
                    <img @click="article_more(article.id)" class="art-banner" :src="article.imgLazy" >
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "diy_home_card",
        props:{
            articleTitle: '',
            article:{},
            articleIndex:0,
        },
        data() {
            return {
            }
        },
        methods:{
            isShow:function (val) {
                if(val%2==0){
                    return true;
                }else {
                    return false;
                }
            },
            article_more:function (id) {

                this.$router.push({
                    name: 'article',
                    query: {
                        'id': id,
                    }
                });
            }
        }

    }
</script>

<style scoped>
    .el-card__body {
         padding: 1px;
    }

    img.art-banner {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
        position: relative;
    }

    img.art-banner:hover {
        transform: scale(1.4);
    }

    .float-content {
        position: relative;
        width: 100%;
        right: 0;
        margin: 0;
        padding: 0;
        z-index: 50;
        color: rgba(0, 0, 0, .66);
    }

    .serif {
        font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc, 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;
    }

    .el-card {
        border: 0px solid #EBEEF5;
        background-color: #FFF;
        color: #303133;
        -webkit-transition: .3s;
        transition: .3s;
    }

    H3:hover{

    }

    .el-link.el-link--default:hover {
        color: #FE9600;
    }
</style>
