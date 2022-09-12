export default {
    data(){
        return{
            city:'深圳',
            age:'18'
        }
    },
    methods:{
        showName(){
            console.log(this.name);
        }
    },
    mounted(){
        console.log('mixin mounted', this.name);
    }
}