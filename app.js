new Vue({
el:'#vue-app',
data: {
available:false,
nearby:false
},
/*methods:{
AddToA:function(){
return this.a + this.age;
},
AddToB:function(){
    return this.b + this.age; 
}*/
computed:{
 compClasses:function(){
return{
    available:this.available,
    nearby: this.nearby
}

 }   
}
});