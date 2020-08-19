<template>
  <div>
    <h1>Listado de Hamburguesas</h1>
    <b-modal
      id="my-modal"
      title="Eliminar"
      ok-title="Eliminar"
      cancel-title="Cerrar"
      ok-variant="danger"
      @ok="deleteOnModal()"
    >Seguro que desea eliminar {{this.nombreProducto}}?</b-modal>
    <table class="table table-bordered table-hover">
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
              class="btn btn-info mr-2"
              @click="showDetails(burger._id)"
            >Detalles</button>
            <!--  <button type="button" class="btn btn-danger" @click="deleteBurger($index)">Eliminar</button> -->
            <b-button v-b-modal.my-modal @click="deleteBurger(burger)">Eliminar</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BurgerList",
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
      nombreProducto: "",
      burger: {},
    };
  },
  methods: {
    showDetails(id) {
      this.$router.push(`/hamburguesas/${id}`);
    },
    addBurger() {},
    editBurger(id) {
      this.$router.push(`/hamburguesasEliminar/${id}`);
    },
    deleteBurger(burger) {
      this.burger = burger;
      this.nombreProducto = burger.nombre;
    },
    deleteOnModal() {
      this.$http
        .delete(
          `https://prueba-hamburguesas.herokuapp.com/burguer/${this.burger._id}`
        )
        .then((rsp) => {
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
