<template>
  <div class="container">
    <h1>Editar hamburguesa</h1>
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
      <button class="btn btn-info mt-3" @click="updateBurger()">Actualizar</button>
  </div>
</template>

<script>
export default {
  name: 'EditBurguer',
  created() {
    // Obtengo los datos actuales y pre lleno los campos para editar
    this.id = this.$route.params.id;
    this.$http
      .get(`https://prueba-hamburguesas.herokuapp.com/burguer/${this.id}`)
      .then((resp) => resp.body)
      .then((resp) => {
        this.name = resp.hamburguesa.nombre;
        this.calories = resp.hamburguesa.calorias;
        this.ingredients = resp.hamburguesa.ingredientes;
      });
  },
  data() {
    return {
      // Propiedades necesarias para editar
      id: '',
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
    updateBurger() {
      // Objeto que contiene la informacion que se enviara mediante el endpoint
      const obj = {
        nombre: this.name,
        ingredientes: this.ingredients,
        calorias: this.calories,
      };
      // Se ejecuta la actualización
      this.$http.put(
        `https://prueba-hamburguesas.herokuapp.com/burguer/${this.id}`,
        obj
      )
      .then(e => {
        this.$router.push('/hamburguesas');
      })
      .catch(console.warn)
    },
  },
};
</script>

<style>
</style>