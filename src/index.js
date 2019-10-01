import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

new Vue({
    el: '#zad',
    data: {
      students: [],
      search:'',
      usd:0,
      money:'',
      curr: []
    },
    mounted: function(){
      Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>{
        console.log(response.data)
        this.students = response.data;
      })

      Vue.axios.get("http://apilayer.net/api/live?access_key=e5f9f31b0eb758ba092f2089065089e4&currencies=UAH,EUR&source=USD&format=1").then((response) =>{
        console.log(response.data)
        this.curr = response.data;
      })
    },
    methods: {
      clickme: function(id){
        alert("Ok");
        this.students = this.students.filter((element) => { 
          return element.id !== id;
        });
      }
    },
});
