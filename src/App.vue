<template>
  <div id="app">
    <app-header />

    <div class="container">
      <h1 class="pt-3 pb-3">List of employees</h1>
      <hr />
      <p>Click for loading...</p>
      <div class="row">
        <div class="col-md-12">
          <form enctype="multipart/form-data">
            <input type="file" ref="doc" @change="readFile" />
            {{content}}
          </form>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <td>EmpID</td>
              <td>ProjectID</td>
              <td>DateFrom</td>
              <td>DateTo</td>
            </thead>
            <tbody
              class="emps"
              v-for="(item, index) in this.empList"
              :key="index"
            >
              <td>{{ item.EmpID }}</td>
              <td>{{ item.ProjectID }}</td>
              <td>{{ item.DateFrom }}</td>
              <td>{{ item.DateTo }}</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",  
  components: {
    AppHeader,
    fileinput: "",
  },
  data: function () {
    return {
      file: null,
      content: null,
      empList: [
        {
          EmpID: 1,
          ProjectID: 10,
          DateFrom: 25.03,
          DateTo: 29.03,
        },
        {
          EmpID: 2,
          ProjectID: 11,
          DateFrom: 26.03,
          DateTo: 30.03,
        },
      ],
    };
  },
  methods: {
    readFile: function (e) {
      var file = e.target.files[0];
      this.$papa.parse(file, {
        header: true,
        complete: function (results) {          
          this.empList = results.data;
          console.log(this.empList);
        },
      });
    },
  },

  computed: {},
  mounted() {},
};
</script>

<style>
</style>
