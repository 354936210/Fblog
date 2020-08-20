<template>
    <div>
        <mclock></mclock>
    </div>
</template>

<script>
    import Header_card from "../components/header-card";
    import Diy_home_card from "../components/diy_home_card";
    import CardImg from "../components/cardImg";
    import Mclock from "../components/mclock";
    export default {
        name: "mytest",
        components: {Mclock, CardImg, Diy_home_card, Header_card},
        comments:{
            Header_card,Diy_home_card,
            CardImg
        }
    }
</script>

<style scoped>

</style>
