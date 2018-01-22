new Vue({
    el:'#vue-app',
    data:{
        output:'your favourite food'
    },
        methods:{
            readRefs:function(){
                this.$refs
                this.output= this.$refs.input.value;
            }
           
         }    
    
});





