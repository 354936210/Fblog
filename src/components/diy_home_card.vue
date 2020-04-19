<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="width:800px;border-radius: 10px;" >
            <el-row style="border-radius: 10px">
                <el-col  style="width:45%;height: 300px;overflow: hidden;padding: 20px">
                    <el-row>
                        <div class="el-icon-time" style="color: #888;font-size: 12px;">发布于 2020-02-14</div>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" type="titleType">
                            <H3>
                                消息队列及常见消息队列介绍
                            </H3>
                        </el-link>
                    </el-row>
                    <el-row style="margin-top: 0px">
                            <div class="el-icon-view" style="color: #888;font-size: 12px;margin-right: 10px;">&nbsp;460热度</div>
                            <div class="el-icon-chat-dot-square" style="color: #888;font-size: 12px;margin-right: 10px">&nbsp;2条评论</div>
                            <div class="el-icon-folder-opened" style="color: #888;font-size: 12px;margin-right: 10px">&nbsp;消息队列</div>
                    </el-row>
                    <el-row style="margin-top: 10px">
                        <div class="float-content">
                            消息队列(MQ)概述 消息队列（Message Queue），是分布式系统中重要的组件，其通用的使用场景可以简单地描述为： 当不需 …
                        </div>
                    </el-row>
                </el-col>
                <el-col style="width:55%;height: 300px;overflow: hidden;">
                    <img class="art-banner" src="https://zouwang.vip/wp-content/uploads/2020/02/32025bbc0b7bf619f9953a2d6d3e9068-1024x576.jpg" >
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "diy_home_card",
        data() {
            return {
                titleType: 'info'
            }
        },
        methods:{
            titleTypeChange:function (val) {
                this.titleType=val
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
</style>
