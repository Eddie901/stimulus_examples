import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import 'bootstrap/dist/css/bootstrap.min.css';

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
