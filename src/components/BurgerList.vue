<template>
  <div>
    <h2>Listado de Hamburguesas</h2>
    <b-modal
      id="my-modal"
      title="Eliminar"
      ok-title="Si"
      cancel-title="No"
      ok-variant="danger"
      cancel-variant="success"
      @ok="deleteBurguer()"
    >Seguro que desea eliminar {{this.nombreProducto}}?</b-modal>
    <router-link class="btn btn-success" to="/hamburguesa/add">Agregar hamburguesa</router-link>
    <table class="table table-bordered table-hover mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Calorias</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="burger in burgers" :key="burger._id">
          <td>{{burger.nombre}}</td>
          <td>{{burger.calorias}}</td>
          <td>
            <button
              type="button"
              class="btn btn-info mr-2 mb-1"
              @click="showDetails(burger._id)"
            >Detalles</button>
            <button
              type="button"
              class="btn btn-warning mr-2 mb-1"
              @click="editBurger(burger._id)"
            >Editar</button>
            <b-button class="mb-1" variant="danger" v-b-modal.my-modal @click="openModal(burger)">Eliminar</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BurgerList',
  created() {
    // Llammar al endpoint y guardar la lista de hamburguesas
    this.$http
      .get('https://prueba-hamburguesas.herokuapp.com/burguer')
      .then((resp) => resp.json())
      .then((data) => (this.burgers = data))
      .catch(console.log);
  },
  data() {
    return {
      // Propiedades necesarias
      burgers: [],
      nombreProducto: '',
      burger: {},
    };
  },
  methods: {
    showDetails(id) {
      // Redireccion para ver detalles
      this.$router.push(`/hamburguesas/${id}`);
    },
    editBurger(id) {
      // Redireccion para editar hamburguesa
      this.$router.push(`/hamburguesas/delete/${id}`);
    },
    openModal(burger) {
      // Guarda valores necesarios para usar en modal
      this.burger = burger;
      this.nombreProducto = burger.nombre;
    },
    deleteBurguer() {
      // Llama al endpoint y elimina la hamburguesa por ID.form-inline
      this.$http
        .delete(
          `https://prueba-hamburguesas.herokuapp.com/burguer/${this.burger._id}`
        )
        .then((rsp) => {
          // Se elimina del arreglo
          const index = this.burgers.findIndex(
            (b) => b._id === this.burger._id
          );
          this.burgers.splice(index, 1);
        });
    },
  },
};
</script>

<style>
</style>
