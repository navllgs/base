<template>
    <div style="padding:8px" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div style="width:50%">
                        <Input style="margin-bottom:8px" v-model="title" placeholder="title"/>
                        <Input style="margin-bottom:8px" v-model="link" placeholder="link"/>
                        <Input style="margin-bottom:8px" v-model="description" placeholder="description"/>
                    </div>
                    <Button @click="wishCreate">Create</Button>
                    <h3 style="text-align:center" class="card-header">Example Wish list Component</h3>
                    <div style="width:80%;margin:0px auto" v-if="allWish && allWish.data">
                        <Card v-for="wish in allWish.data" :key="wish.id" :shadow='false' :bordered="true">
                            {{wish.title}}--
                            {{wish.link}}--
                            {{wish.description}}
                        </Card>
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
