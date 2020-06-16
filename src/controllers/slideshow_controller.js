// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]


    initialize() {
        this.showCurrentSlide()
    }

    next() {
        this.index++
    }

    previous() {
        this.index--
    }

    showCurrentSlide() {
        console.log(`Index is ${this.index}`)

        this.slideTargets.forEach((el, i) => {
            el.classList.toggle("slide--current", this.index == i)
        })
    }

    // when does the get method get called?
    // everytime the this.index is referenced??
    get index() {
        return parseInt(this.data.get("index"))
    }

    // so this.index++ call the setter automatically?
    set index(value) {
        this.data.set("index", value)
        this.showCurrentSlide()
    }
}