<template>
    <div class='nav-bar'>
        <div v-if="this.$store.state.clickedState">
            <h6><NuxtLink to='/' >Accumen Digital Interview Task / Elephantom</NuxtLink> > Elephant</h6>
        </div>
        <div v-else>
        <h6>Accumen Digital Interview Task / Elephantom</h6>
        </div>
    </div>
</template>

<script>
      export default {
        
    }
</script>

<style  scoped>
.nav-bar{
    position:fixed;
    top:0;
    left:0;
    margin:0 0;
    padding:1.25rem 2rem;
    width:100vw;
    box-shadow: 0px -7px 24px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 28px;
    color: #30425A;
    z-index:1;
    background-color:white;
    max-height:3.8rem;
}
h6{
    margin-left:18rem; 
    font-size:18px;
}
@media screen and (max-width:580px){
    h6{
        margin-left:13rem;
        font-size:14px;
        line-height: 16px;
        font-weight:bold;
    }
}
</style>