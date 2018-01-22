Vue.component('greeting',{

template:'<p>Hey, I am {{name}}. <button v-on:click="changename"> change name</button></p>',
data:function(){
return{
    name: 'Yoshi'
}
},
methods:{
    changename:function(){
        this.name='Mario';
    }
}

});

new Vue({
   el:'#vue-app-one'

});

new Vue({
    el:'#vue-app-two'
 
 });