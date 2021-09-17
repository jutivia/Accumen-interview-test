<template>
    <div class='nav-bar'>
        <h6>Accumen Digital Interview Task / Elephantom</h6>
    </div>
</template>

<script>
    export default {
        // props=[
        //     "name"
        // ]
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
}
h6{
    margin-left:18rem; 
}
@media screen and (max-width:480px){
    h6{
        margin-left:13rem;
    }
}
</style>