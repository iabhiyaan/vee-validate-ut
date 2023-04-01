<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld style="display: none" msg="Welcome to Your Vue.js App" />
  <TextFieldVue v-model="age" rules="required" name="age" />
  Age is: {{ age }}
  <SelectFieldVue
    v-model="role"
    rules="required"
    name="role"
    :options="[null, 'admin', 'editor']"
  />
  Role is {{ role }}
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TextFieldVue from "./components/TextField.vue";
import SelectFieldVue from "./components/SelectField.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TextFieldVue,
    SelectFieldVue,
  },
  data() {
    return {
      role: "",
      age: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
