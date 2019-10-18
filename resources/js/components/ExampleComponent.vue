<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <div v-if="getCurrentUser">
                        {{getCurrentUser.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations,mapGetters, mapActions} from 'vuex'
    export default {
        mounted() {
            console.log('Component mounted.')
            this.getAllWish().then(
              res=>{
                console.log('res',res);
            },err=>{
                console.log('err',err);    
            })

            this.setCurrentUser({'name':'Sample User','email':'sample@gmail.com'})
        },
        computed:{
            ...mapGetters('currentUser',["getCurrentUser"]),
        },
        methods:{
            ...mapMutations('currentUser',['setCurrentUser']),
            ...mapActions('wishlist',['getAllWish'])
        }
    }
</script>
