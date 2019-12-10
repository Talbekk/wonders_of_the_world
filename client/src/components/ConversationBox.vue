<template>
    <div :class="position">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name: "conversation-box",
    props: {
        message: String,
        position: String
    }
}
</script>

<style lang="css" scoped>
    .box {
        position:relative;
    }
    .right {
        position:absolute;
        bottom:0;
        right:0;
    }
    .left {
        position:absolute;
        bottom:0;
        left:0;
    }
</style>