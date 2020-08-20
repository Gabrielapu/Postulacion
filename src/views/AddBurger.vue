// eslint-disable-next-line
/* eslint-disable */

<template>
  <div class="container">
    <h1>Agregar hamburguesa</h1>
    <div class="row mb-2">
      <div class="col">
        <input type="text" v-model="name" class="form-control" placeholder="Nombre" />
      </div>
      <div class="col">
        <input type="text" v-model="calories" class="form-control" placeholder="Calorias" />
      </div>
    </div>
    <div class="row">
      <button class="btn btn-success ml-3 mb-2" @click="crearIngrediente()">Agregar ingrediente</button>
    </div>
    <div class="form-inline" v-for="(ingredient, $index) of ingredients" :key="$index">
      <input
        type="text"
        v-model="ingredients[$index]"
        class="form-control mb-2"
        placeholder="Ingrediente"
      />
      <button class="btn btn-danger ml-2 mb-2" @click="eliminarIngrediente($index)">Quitar</button>
    </div>
    <router-link class="btn btn-light mt-3 mr-2" to="/hamburguesas">Volver</router-link>
    <button class="btn btn-info mt-3" @click="addBurger()">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'AddBurger',
  data() {
    return {
      // Propiedades necesarias para agregar
      name: '',
      calories: '',
      ingredients: [],
    };
  },
  methods: {
    crearIngrediente() {
      // Permite agregar un ingrediente al arreglo
      this.ingredients.push('');
    },
    eliminarIngrediente(index) {
      // Permite eliminar 1 elemento del arreglo
      this.ingredients.splice(index, 1);
    },
    addBurger() {
      // Objeto que contiene la informacion que se enviara mediante el endpoint
      const obj = {
        nombre: this.name,
        ingredientes: this.ingredients,
        calorias: this.calories,
      };
      // Se agrega una hamburguesa
      this.$http.post('https://prueba-hamburguesas.herokuapp.com/burguer', obj).then((e) => {
        this.$router.push(`/hamburguesas`);
      });
    },
  },
};
</script>

<style>
</style>
