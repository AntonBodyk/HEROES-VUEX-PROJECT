<template>
     <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <input 
                    v-model="filter"
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Введите элемент(на английском)"/>
            </div>
        </div>
</template>
 
<script>
    export default {
        computed: {
            filter: {
                get() {
                    return this.$store.state.filter
                },
                set (value) {
                    this.$store.commit('updateFilter', value)
                }
            }
        }
    }
</script>
 
<style scoped>
 
</style>