<template>
    <div>
            <table>
                <tr> All Elephants </tr>
                    <tr class='darkerRow row'>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Sex</th>
                        <th>Affiliation</th>
                        <th>Dob</th>
                    </tr>
        <tr v-for="(elephant, index) in elephantList.slice(0,8)" 
         :key="elephant._id"
         class='row'
         :class='[index%2!==0? "darkRow": ""]'
         @click="clickedRow"
         ><NuxtLink :to="`/elephants/${elephant._id}`"> 
         <td>{{index +1}}</td>
                <td>{{elephant.name}}</td>
                <td>{{elephant.species}}</td>
                <td>{{elephant.sex}}</td>
                <td>{{elephant.affiliation}}</td>
                <td>{{elephant.dob}}</td>
            </NuxtLink>        
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
      computed:{
            setElephants(){
             this.$store.commit("setElephantList", "this.elephantList")
            
         },
      },
     methods:{
         clickedRow(){
             this.$store.commit("setClickedState", true) 
             console.log(this.elephantList)
         }
        
     }
              
    
      
    }
</script>

<style scoped>
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
padding:1rem;
margin:0 0;
text-align:left;


}
.darkRow{
background-color:#F5F5F5;

}

.darkerRow{
background-color:#E5E5E5;
color:black;
}
</style>