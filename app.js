new Vue({
el:'#vue-app',
data: {
    name:'Shaun',
    job:'Ninja',
    website:'http://www.thenetninja.com.uk',
    websiteTag:'<a href="http://www.thenetninja.com.uk">The Net Ninja Website'
},
methods:{
    greet:function(time){
        return 'Good' + time + ' ' + this.name ;
    }
}
});