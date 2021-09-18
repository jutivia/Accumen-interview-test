<template>
    <div class='container'>
            <div class="wrapper">
                <ElephantsCardDisplay/>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
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
    margin-top:4.1rem;
    background-color:white;
    width:85%;
    height:85%;
    padding:1.5rem;
    box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.25);
}
@media screen and (max-width:580px){
    .container{
        left:12rem;
    }
    .wrapper{
        width:58%;
    }
}
</style>