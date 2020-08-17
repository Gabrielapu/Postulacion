<template>
  <div class="container">
    <h1>Listado de Hamburguesas</h1>
    <table class="table table-bordered grocery-crud-table table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Calorias</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(burger, $index) in burgers" :key="burger.id">
          <td>{{burger.nombre}}</td>
          <td>{{burger.calorias}}</td>
          <td>
            <button type="button" class="btn btn-info mr-2" @click="showDetails">Detalles</button>
            <button type="button" class="btn btn-danger" @click="deleteBurger($index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Burguers",
  created() {
    this.$http
      .get("https://prueba-hamburguesas.herokuapp.com/burguer")
      .then((resp) => resp.json())
      .then((data) => (this.burgers = data))
      .catch(console.log);
  },
  data() {
    return {
      burgers: [],
    };
  },
  methods: {
    showDetails() {},
    addBurger() {},
    editBurger() {},
    deleteBurger(index) {
      this.burgers.splice(index, 1);
    },
  },
};
</script>

<style>

</style>
