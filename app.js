new Vue({
el:'#vue-app',
data: {
    age:20,
 a:0,
 b:0
},
/*methods:{
AddToA:function(){
return this.a + this.age;
},
AddToB:function(){
    return this.b + this.age; 
}*/
computed:{
    AddToA:function(){
    return this.a + this.age;
    },
    AddToB:function(){
        return this.b + this.age; 
    }    
}
});