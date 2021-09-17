<template>
    <div class='side-bar'>
       <div class='elephant-logo'>
           <img src="@/assets/images/elephantLogo.svg" class="image"/>
          </div> 
       <div class="modal"> 
           <h5  class='clicked item' >Home</h5>
           <h5  class='item'>Modal</h5>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[
                {name:"Home",
                id: 1},
                {name:"Modal",
                id:2}]
            }
        }
    }
</script>

<style scoped>
.side-bar{
    position:absolute;
    margin:0;
    height:100%;
    width:17rem;
    background: #DDDDFF;
    margin:0;
    z-index:2;

}
.image{
position: absolute;
width: 127.33px;
height: 116.46px;
left: 35px;
top: 50.76px;
}
.elephant-logo{
margin:2rem auto;
padding:20px;
position: relative;
width: 191px;
height: 191px;
border-radius:50%;
background: #FFFFFF;
}
.item{
    text-align:left;
    padding:10px 50px;
    display:block;
    font-weight:bold;
    margin:0;
    transition:ease-in 0.3s;
    color:#30425A;
    font-size: 18px;
    line-height: 28px;
}
@media screen and (max-width:480px){
.side-bar{
    width:12rem;
}
.elephant-logo{
width: 131px;
height: 131px;
}
.image{
width: 97.33px;
height: 86.46px;
left: 18px;
top: 30.76px;
}
}
.clicked{
    color:white;
    background-color:#B9B9FF;
}

</style>