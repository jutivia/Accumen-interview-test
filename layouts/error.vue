<template>
    <div class='error'>
        <img src='@/assets/images/sadElephant.jpg' alt='sad elephant'>
        <h1><span class='page'> Page </span> <br/><span class='found'>Not Found</span> </h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.error{
    display:flex;
    justify-content:center;
    align-items:space-around;
    margin:0rem 22%;
    padding:10% 5%;
    width:70%;
    padding-top:8rem;

}
h1{
    font-size:62px;
    font-weight:bold;
    margin:auto 0;
    color:rgb(133, 132, 132);
    
    
}
.found{
    font-size:62px;
    color:rgb(133, 132, 132)
   
    
}
.page{
    text-align:center;
}
img{
    width:50%;
    
}
</style>