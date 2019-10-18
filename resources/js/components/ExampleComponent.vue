<template>
    <div style="padding:8px" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div>
                        <input v-model="title" placeholder="title"/>
                    </div>
                    <div>
                        <input v-model="link" placeholder="link"/>
                    </div>
                    <div>
                        <input v-model="description" placeholder="description"/>
                    </div>
                    <button @click="wishCreate">Create</button>
                    <div class="card-header">Example Wish Component</div>
                    <div v-if="allWish && allWish.data">
                        <div v-for="wish in allWish.data" :key="wish.id" >
                            {{wish.title}}--
                            {{wish.link}}--
                            {{wish.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations,mapGetters, mapActions} from 'vuex'
    export default {
        data(){
            return{
                title: '',
                link: '',
                description: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.getAllWish();
            this.setCurrentUser({'name':'Sample User','email':'sample@gmail.com'})
        },
        computed:{
            ...mapGetters('currentUser',["getCurrentUser"]),
            ...mapGetters('wishlist',["allWish"])
        },
        methods:{
            ...mapMutations('currentUser',['setCurrentUser']),
            ...mapActions('wishlist',['getAllWish','createWish']),
            wishCreate(){
                this.createWish(
                    {'title': this.title,
                    'link':this.link,
                    'description':this.description}
                ).then(
                res=>{
                    alert('created')
                    this.getAllWish();
                    this.resetData();
                },
                err=>{
                    alert('error')
                });
            },
            resetData(){
                this.title = '',
                this.link = '',
                this.description = ''
            }
        }
    }
</script>
