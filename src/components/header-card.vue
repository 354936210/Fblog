<template>
    <div>
        <el-row type="flex" justify="space-around">
            <div style="height:150px;">
                <el-card :body-style="{ padding: '0px' }" class="side-img hidden-sm-and-down">
                    <img @mouseover="show=true" @mouseout="show=false" class="art-banner"
                         src="https://zouwang.vip/wp-content/uploads/2019/09/317534-1024x576.jpg">
                    <div>
                        <transition name="el-fade-in-linear">
                            <div v-show="show" class="transition-box">
                                <transition name="el-zoom-in-center">
                                    <H3  v-show="show" class="cardTitle">
                                        HELLO、BIRD
                                    </H3>
                                </transition>
                                <transition name="el-zoom-in-bottom">
                                    <p  v-show="show" class="cardDescribe" >
                                        hello bird建站教程
                                    </p>
                                </transition>
                            </div>
                        </transition>
                    </div>
                </el-card>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "header_card",
        data: () => ({
            show: false
        }),
    }
</script>

<style scoped>
    img.art-banner {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
        position: relative;
    }

    img.art-banner:hover {
        transform: scale(1.4);
    }
    .side-img {
        border-radius: 10px;
        height: 150px;
        width: 270px;
        overflow: hidden;
        /*margin-right: 10px;*/
    }
    .transition-box {
        /*事件穿透属性*/
        pointer-events: none;
        width: 270px;
        height: 150px;
        border-radius: 10px;
        background-color: rgba(33, 33, 33, 0.6);
        text-align: center;
        color: #fff;
        /* padding: 40px 20px; */
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /* margin-right: 20px; */
        margin-top: -156px;
        position: absolute;
    }

    .serif {
        font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc, 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;
    }
    .cardTitle{
        text-align: center;
        height: 25px;
        background-color: rgba(17, 17, 17, 0.71);
        text-transform: uppercase;
        color: #fff;
        font-size: 17px;
        padding: 10px;
        -webkit-transition: all .35s ease-in-out;
        -moz-transition: all .35s ease-in-out;
        transition: all .35s ease-in-out;
    }
    .cardDescribe{
        font-style: italic;
        font-size: 12px;
        position: relative;
        color: #bbb;
        padding: 20px 20px 20px;
        text-align: center;
        -webkit-transition: all .35s .1s linear;
        -moz-transition: all .35s .1s linear;
        transition: all .35s .1s linear;

        -moz-transform: translateX(100%);
    }

    .el-card {
        border: 0px solid #EBEEF5;
        background-color: #FFF;
        color: #303133;
        -webkit-transition: .3s;
        transition: .3s;
    }
</style>
