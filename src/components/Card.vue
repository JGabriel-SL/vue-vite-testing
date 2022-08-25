<script>
    export default {
        props: [
            'title','text'
        ]
    }
</script>

<template>
    <div class="container-card">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
    .container-card {
        border: 1px solid var(--color-border);
        width: 30%;
        padding: 20px 5px;
        margin: 15px 10px;
    }
</style>