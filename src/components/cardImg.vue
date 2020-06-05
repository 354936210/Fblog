<template>
    <div>
        <el-row  type="flex" justify="space-around"style="height: 150px;width: 20%">
            <el-col :xs="24" :md="24" style="background: #3399ea;height: 100%">
                <el-card :body-style="{ padding: '0px' }" class="side-img hidden-sm-and-down">

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "cardImg"
    }
</script>

<style scoped>

</style>
