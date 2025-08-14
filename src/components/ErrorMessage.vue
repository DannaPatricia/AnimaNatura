<script>
export default{
    props:{
        text:{
            type:Text,
            required: true,
        }
    }
}
</script>
<template>
    <div class="message">{{ text }}</div>
</template>
<style scoped>
.message {
    display: flex;
    justify-content: center;
    margin: 0 0 10% 25%;
    width: 60%;
    padding: 2em;
    color: #b00020;
    background-color: #f8e8e8;
    border: 2px solid #f5c2c7;
    border-radius: 0.3em;
    font-size: 1.4em;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>