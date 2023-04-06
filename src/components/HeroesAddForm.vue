<template>
     <form className="border p-4 shadow-lg rounded" @submit.prevent="addNewHeroe">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    v-model="newHeroe.name"
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    v-model="newHeroe.description"
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    :style="{height: 130}"/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    v-model="newHeroe.element"
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option disabled value="" >Я владею элементом...</option>
                    <option  value="fire">Огонь</option>
                    <option  value="water">Вода</option>
                    <option  value="wind">Ветер</option>
                    <option  value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
</template>
 
<script>
import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                newHeroe: {
                    name: '',
                    description: '',
                    element: ''
                }
                
            }
        },
        methods: {
            ...mapMutations(['createHeroe']),
            addNewHeroe() {
                // this.newHeroe.id = Date.now(),
                // this.$emit('create', this.newHeroe),
                // this.newHeroe = {
                //     name: '',
                //     description: '',
                //     element: ''
                // }
                this.createHeroe({
                    name: this.newHeroe.name,
                    description: this.newHeroe.description,
                    element: this.newHeroe.element,
                    id: Date.now()
                });
                this.newHeroe = {
                    name: '',
                    description: '',
                    element: ''
                }
            }
        }
    }
</script>
 
<style scoped>
 
</style>