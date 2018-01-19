new Vue({
el:'#vue-app',
data: {
     characters:['Mario','Luigi','Yoshi','Bowser'],
     ninjas:[

        {name:'Ryu', age:25},
        {name:'Yoshi', age:35},
        {name:'Ken', age:55}
     ]
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