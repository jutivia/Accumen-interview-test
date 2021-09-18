<template>
    <div>
        {{this.$store.state.elephantList}}
    </div>
</template>

<script>
    export default {
         computed:{
           elephant(){
               return this.$store.getters.getElephantById(this.$route.params.id)
           }
        }
    }
</script>

<style scoped>

</style>