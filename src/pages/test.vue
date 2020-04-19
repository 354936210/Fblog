<template>
    <div>
        <header_card></header_card>
        <diy_home_card></diy_home_card>
    </div>
</template>

<script>
    import Header_card from "../components/header-card";
    import Diy_home_card from "../components/diy_home_card";
    export default {
        name: "mytest",
        components: {Diy_home_card, Header_card},
        comments:{
            Header_card,Diy_home_card

        }
    }
</script>

<style scoped>

</style>
