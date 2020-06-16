// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]


    initialize() {
        const index = parseInt(this.data.get("index"))
        this.showSlide(index)
        console.log(`Index is ${this.index}`)

    }

    next() {
        this.showSlide(this.index + 1)
        console.log(`Index is, ${this.index}`)

    }

    previous() {
        this.showSlide(this.index - 1)
        console.log(`Index is, ${this.index}`)

    }

    showSlide(index) {
        this.index = index
        // here's what I think the method toggle(token, boolean) is doing
        // if the token is in the element's classlist, it toggles it
        // and if it doesn't but boolean is true it applies it
        // so for the current slide slide--current class is removed
        // and for the target slide it is applied
        // for the other slides there is no effect since no token and boolean is false
        // BUT THIS IS PROBABLY THE WRONG EXPLANATION
        // How are the other slides being hidden???
        this.slideTargets.forEach((el, i) => {
            el.classList.toggle("slide--current", index == i)
        })
    }
}