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
  margin:0 0;

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