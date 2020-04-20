<template xmlns:el-col="http://www.w3.org/1999/html">
    <div class="home">
        <el-row type="flex" justify="space-around" >
            <div>
                <header_card style="float: left;"/>
                <header_card style="float: left;"/>
                <header_card style="float: left;"/>
            </div>

        </el-row>
        <el-row type="flex" justify="space-around" class="art-item" v-for="(article,index) in articleList" v-bind:key="article.id">
                <diy_home_card :article="article" :articleIndex="index"></diy_home_card>
        </el-row>
        <el-row id="artList" type="flex" justify="space-around" >
            <div class="block pagination">
                <el-pagination background layout="prev, pager, next"
                               :current-page="page.current"
                               :page-size="page.size"
                               :total="page.total"
                               @current-change="current_change"
                >
                </el-pagination>
            </div>
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
        </el-row>

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
                this.$axios.post("/article/getAllArticleWithTag",this.page)
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
            this.$axios.post("/article/getAllArticleWithTag",this.page)
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
        margin-bottom: 30px;
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
</style>
