<template>
    <div class='container'>
        <div class="wrapper">
            <div class="img-wrapper">
        <img :src="`${elephant.image}`" alt="elephant image" class='img'/>
        </div>
        <div class='text'>
        <h1>{{elephant.name}}</h1><p>{{elephant.sex}}</p>
        </div>
        <div class='line'></div>
        <h4 class='note'>{{elephant.note}}</h4>
        
        </div>
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
.container{
  height:100%;
  width:100%;
  z-index:-1;
  position: fixed;
  top:0;
  left:17rem;
  background-color:#F5F8FF;
  display:float;
  justify-content:center;
  align-items:center;
  padding:2rem;
  

}
.wrapper{
    margin-top:1rem;
    width:85%;
    height:85%;
    padding:1.5rem;
}
@media screen and (max-width:580px){
    .container{
        left:12rem;
    }
    
}
 .img{
        width:85%;
        margin:10px 0;
        height:400px;
        object-fit:fill;
        filter: drop-shadow(linear-gradient(180deg, rgba(196, 196, 196, 0) -1.55%, rgba(29, 29, 242, 0.37) 77.84%));
        
    }
    
    .text{
        display:flex;
        align-items:flex-end;
    }
    .text h1{
        margin-right:1rem;
        font-size:48px;
        font-weight:bold;
        color:#30425A;
        
    }
    .text p{
        color:#30425A;
        font-size:18px;
        margin-bottom:9px;
    }
    .line{
        height:0.5px;
        background-color:rgba(196, 205, 213, 0.62);
        width:85%;
        margin:10px 0;
    }
    .note{
        width:80%;
        color: #30425A;
        font-size:20px;

    }
</style>