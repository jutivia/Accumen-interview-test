<template>
    <div class='container'>
        
            <table>
                <tr class='white bold row'> <td colspan='6'>All Elephants</td> </tr>
                    <tr class='darkerRow row'>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Sex</th>
                        <th>Affiliation</th>
                        <th>Dob</th>
                    </tr>
        <tr v-for="(elephant, index) in elephantList.slice(8,16)" 
         :key="elephant._id"
         class='row'
         :class='[index%2!==0? "darkRow": "white"]'
         @click="clickedRow"
         >
         <td> <NuxtLink :to="`/elephants/${elephant._id}`">{{index +1}} </NuxtLink></td>
                <td><NuxtLink :to="`/elephants/${elephant._id}`">{{elephant.name}}</NuxtLink></td>
                <td> <NuxtLink :to="`/elephants/${elephant._id}`">{{elephant.species}} </NuxtLink></td>
                <td> <NuxtLink :to="`/elephants/${elephant._id}`">{{elephant.sex}} </NuxtLink></td>
                <td> <NuxtLink :to="`/elephants/${elephant._id}`">{{elephant.affiliation}} </NuxtLink></td>
                <td> <NuxtLink :to="`/elephants/${elephant._id}`">{{elephant.dob}} </NuxtLink></td>
         </tr>
          
         </table>
    </div>
</template>

<script>

let url="https://acumen-elephantom.herokuapp.com/elephants"

    export default {
        data(){
            return{
                elephantList: [],
            }
        },
     async created(){
             const response = await fetch(url).then(res=>res.json())
         return this.elephantList = response.data 
      },
    //   computed: {
    //           setData(){
    //         this.$store.commit({
    //              type:"setElephantList",
    //              data: this.elephantList})
    //      }
           
    //   },
     methods:{
         clickedRow(){
             this.$store.commit("setClickedState", true) 
              this.$store.commit({
               type:"setElephantList",
                 data: this.elephantList})
         },
        
        
     }
              
    
      
    }
</script>

<style scoped>
.container{
    width:85%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:95%;
    margin-top:2.5rem;
    margin-left:-2.5rem;
   
    

}
.bold{
font-weight:bold;
}
.spinner{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:48px;
    font-weight:bold;
}
.row{
width:100%;
font-weight:400;
font-size:15px;
line-height:24.51px;
color:#848383;
margin:0 0;
text-align:left;


}
.darkRow{
background-color:#F5F5F5;

}
.white{
    background-color:white;
    vertical-align:center;
   
}
.darkerRow{
background-color:#E5E5E5;
color:black;
}

table{
width:87%;
box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.25);
height:90%;
align-self:center;
margin-top:1rem;
margin-left:auto;
margin-right:auto;
}

th, td{
    padding:0.6rem;
    max-width:80px;
    width:auto;
}
td{
    height:8%;
    vertical-align:center;
}
tr{
     height:10%;
     padding:.5rem;
}
</style>