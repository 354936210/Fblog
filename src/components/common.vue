<template>

</template>

<script type="text/javascript">
    const httpUrl = 'https://localhost:8080/'
    function commonFun() {
        console.log("公共方法")
    }
    // 暴露出这些属性和方法
    export default {
        httpUrl,
        commonFun
    }
</script>

<style scoped>

</style>
