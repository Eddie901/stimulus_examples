// src/controllers/chosen_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "cars", "heading", "hero", "header" ]

    connect() {
        $(".chzn-select").chosen();
        document.getElementById("hero-header").style.display = "none";

        const welcome = this.headingTarget
        var carslist = this.carsTarget
        welcome.textContent = "Welcome to stimulus"


        // Cars select field
        const chosenselect = document.getElementById("cars_list_chosen")
        chosenselect.setAttribute("data-action", "click->chosen#greet")

    }


    greet(){
      const cars = this.carsTarget
      const heading = this.headingTarget
      heading.textContent = `${cars.value}`
    }

    callHero(){
        document.getElementById("hero-header").style.display = "block";
        const hero = this.heroTarget
        const header = this.headerTarget
        header.textContent = `${hero.value}`
    }

    removeElement(){
      $('#data-table-body').empty()
      $('#remove-table-btn').hide()
      $("#data-table").addClass("slide")
    }

    getData(){
      $("#data-table").removeClass("slide")

      fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => {
         data.forEach(function (data, index) {
           $('#data-table-body').append(`<tr><td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>${data.website}</td> <td>${data.address.city}</td></tr>`)
       });
       })
      $('#remove-table-btn').show()
    }
}