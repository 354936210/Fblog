<template xmlns:el-col="http://www.w3.org/1999/html">
    <div class="home">
        <el-row type="flex" justify="space-around" >
            <el-col :span="16" style="background: rgba(255,255,255,0.81)" >
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                    <div class="notice" style="margin-top:20px;">
                        <div class="el-icon-bell">微信搜一搜“yhwl5213549” 关注博主</div>
                    </div>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                        <div style="font-family: 'Ubuntu', sans-serif;margin-bottom: 20px"><img height="16px" width="16px" src="../assets/chuanmao.png">START:DASH</div>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-around" >
                    <div>
                        <header_card :top="topList[0]" style="float: left;margin-right: 15px"/>
                        <header_card :top="topList[1]" style="float: left;margin-right: 15px"/>
                        <header_card :top="topList[2]" style="float: left;"/>
                    </div>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                        <div style="font-family: 'Ubuntu', sans-serif;margin-bottom: 20px;margin-top: 20px"><img height="16px" width="16px" src="../assets/yezi.png">START:DASH</div>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-around" class="art-item" v-for="(article,index) in articleList" v-bind:key="article.id">
                    <diy_home_card :article="article" :articleIndex="index"></diy_home_card>
                </el-row>
                <el-row id="artList" type="flex" justify="space-around" style="margin-bottom: 20px" >
                    <div class="block pagination">
                        <el-pagination background layout="prev, pager, next"
                                       :current-page="page.current"
                                       :page-size="page.size"
                                       :total="page.total"
                                       @current-change="current_change"
                        >
                        </el-pagination>
                    </div>
                </el-row>
            </el-col>
        </el-row>
<!--        <el-row id="artList" type="flex" justify="space-around" >-->
<!--            <div class="block pagination">-->
<!--                <el-pagination background layout="prev, pager, next"-->
<!--                               :current-page="page.current"-->
<!--                               :page-size="page.size"-->
<!--                               :total="page.total"-->
<!--                               @current-change="current_change"-->
<!--                >-->
<!--                </el-pagination>-->
<!--            </div>-->
<!--            <el-col :span="16">-->
<!--                <el-row class="art-item" v-for="article of articleList" v-bind:key="article.id">-->
<!--                    <el-card shadow="hover">-->
<!--                        <h5 >-->
<!--                            <div @click="article_more(article.id)"  class="art-title">{{article.title}}</div>-->
<!--                        </h5>-->
<!--                        <el-row class="art-info d-flex align-items-center justify-content-start">-->
<!--                            <div class="art-time"><i class="el-icon-time"></i>{{article.createTime}}</div>-->
<!--                            <div class="d-flex align-items-center tagItem"><img class="tag" src="../assets/tag.png"/>：-->
<!--                                <el-tag v-for="tag of article.articleTags" size="mini" @click="tagRoute(tag)" >{{tag.tagName}}</el-tag>-->
<!--                            </div>-->
<!--                        </el-row>-->
<!--                        <el-row class="art-body">-->
<!--                            <div class="side-img hidden-sm-and-down">-->
<!--                                <img class="art-banner" :src="article.imgLazy" v-if="article.imgLazy !='' && article.imgLazy !=null ">-->
<!--                                <img class="art-banner" src="../assets/vue.jpg" v-else>-->
<!--                            </div>-->
<!--                            <div class="side-abstract">-->
<!--                                <div class="art-abstract">-->
<!--                                    {{article.synopsis}}-->
<!--                                </div>-->
<!--                                <div class="art-more">-->
<!--                                        <el-button plain @click="article_more(article.id)">{{$t('home.readMore')}}</el-button>-->
<!--                                    <div class="view"><i class="el-icon-view"></i>{{article.browseVolume}}</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </el-row>-->
<!--                    </el-card>-->

<!--                    <img class="star" src="../assets/star.png"/>-->
<!--                </el-row>-->
<!--               -->
<!--            </el-col >-->
<!--            <el-col :span="6" class="hidden-sm-and-down" id="side">-->
<!--                <div class="item">-->
<!--                    <tag></tag>-->
<!--                </div>-->
<!--                <div class="item">-->
<!--                    <friend></friend>-->
<!--                </div>-->
<!--            </el-col>-->
<!--        </el-row>-->

    </div>
</template>

<script>
    import friend from '../components/friend'
    import tag from '../components/tag'
    import Header_card from "../components/header-card";
    import Diy_home_card from "../components/diy_home_card";

    export default {
        name: 'home',
        data() {
            return {
                articleList: [],
                page:{
                    size: 4,
                    current: 1,
                    total: 200
                },

                topList:[
                    {   topImgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587849715974&di=56538fd10b1150b0bd4f1ef459be77c4&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-03-10%2F5e67229390479.png',
                        topTitle:'建站教程',
                        topDescribe:'VUE+ElementUI+springBoot 建站'},
                    {   topImgSrc:'https://zouwang.vip/wp-content/uploads/2019/09/317534-1024x576.jpg',
                        topTitle:'我的生涯',
                        topDescribe:'我的职业生涯'},
                    {   topImgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597145785209&di=7a3ae32edea5e3827e92b97a0b60cb28&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd1160924ab18972b48067763e4cd7b899e510a5e.jpg',
                        topTitle:'那年那天',
                        topDescribe:'是那个夏天...'}
                ]
            }
        },
        methods:{
            tagRoute(mtag) {
                this.$router.push({
                    name: 'tag',
                    params: {
                        'name': mtag.tagName,
                        'tagId': mtag.tagId
                    }
                });
            },
            current_change:function (val){
                this.page.current=val
                this.$axios.post(this.COMMON.httpUrl+"article/getAllArticleWithTag",this.page)
                    .then(
                        value => {this.articleList = value.data.records;
                        this.page.total=value.data.total}
                    )
            },
            article_more:function (id) {

                this.$router.push({
                    name: 'article',
                    query: {
                        'id': id,
                    }
                });
            }
        },
        components: {
            Diy_home_card,
            friend,
            tag,
            Header_card

        },
        created() {
            this.$axios.post(this.COMMON.httpUrl+"article/getAllArticleWithTag",this.page)
                .then(
                    value => {this.articleList = value.data.records;
                        this.page.total=value.data.total}
                )
        }
    }
</script>

<style scoped>

    .tagItem:hover {
        color: #409EFF;
        cursor: pointer;
    }
    .el-tag{
        margin-right: 5px;
    }
    .search{
        width: 100%;
    }

    #side .item {
        margin-bottom: 30px;
    }

    .art-item {
        margin-bottom: 20px;
        position: relative;
    }

    .art-item .star {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        right: 0;
    }

    img.tag {
        width: 16px;
        height: 16px;
    }

    .art-title {
        border-left: 3px solid #F56C6C;
        padding-left: 5px;
        cursor: pointer;
    }

    .art-title:hover {
        padding-left: 10px;
        color: #409EFF;
    }

    .art-time {
        margin-right: 20px;
    }

    .art-body {
        display: flex;
        padding: 10px 0;
    }

    .side-img {
        height: 150px;
        width: 270px;
        overflow: hidden;
        margin-right: 10px;
    }

    img.art-banner {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
    }

    img.art-banner:hover {
        transform: scale(1.4);
    }

    .side-abstract {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .art-abstract {
        flex: 1;
        color: #aaa;
    }

    .art-more {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .art-more .view {
        color: #aaa;
    }

    h5 {
        font-size: 18px;
    }

    .pagination {
        background-color: #F9F9F9;
    }

    .notice {
        padding: 20px;
        margin-bottom: 20px;
        border: 1px dashed #7a776c;
        color: #969696;
        background: #fbfbfb50;
        border-radius: 10px;
    }
</style>
