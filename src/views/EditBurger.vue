<template>
  <div class="container">
    <h1>Editar hamburguesa</h1>
    <form>
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
    </form>
  </div>
</template>

<script>
export default {
  name: "EditBurguer",
  created() {
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
      id: "",
      name: "",
      calories: "",
      ingredients: [],
    };
  },
  methods: {
    crearIngrediente() {
      this.ingredients.push("");
    },
    eliminarIngrediente(index) {
      this.ingredients.splice(index, 1);
    },
    updateBurger() {
      const obj = {
        nombre: this.name,
        ingredientes: this.ingredients,
        calorias: this.calories,
      };

      this.$http.put(
        `https://prueba-hamburguesas.herokuapp.com/burguer/${this.id}`,
        obj
      );
    },
  },
};
</script>

<style>
</style>