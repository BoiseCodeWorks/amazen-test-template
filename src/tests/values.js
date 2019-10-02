
import { Test, Suite, TestReport } from "../Test.js"
import { api } from "../utils.js"

const PATH = "values"

export class ValuesSuite extends Suite {
  constructor() {
    super("ValuesController", "This is a test Controller", "values")
    this.addTests(
      new Test(
        "Can Get values",
        PATH,
        async () => {
          let res = await this.get()
          this.values = res.data
          return new TestReport(true, "Able to get values")
        },
        'GET request. This should get a list of strings.',
        "string[]"
      ),
      new Test(
        'Can Create values',
        PATH,
        () => {
          throw new Error("Whoops something failed")
        },
        'string',
        'POST request. This should create a new value in your database. Your backend should attach a userId.',
        'value object { id, name, description }',
      ),
      new Test(
        'Can Get value by value Id',
        PATH + '/:id',
        () => {

        },
        'string',
        'GET request. This should get one value by its id.'
      ),
      new Test(
        'Can Edit value by value Id',
        PATH + '/:id',
        () => {
          return new TestReport(true, "Woot able to edit value successfully")
        },
        'string',
        'PUT request. This should update one value by its id.'
      ),
      new Test(
        'Can delete value by value Id',
        PATH + '/:id',
        async () => {
          let res = await api.get("https://api.boisecodeworks.com/courses")
          return new TestReport(true, "Woot able to delete value successfully")

        },
        'string',
        'DELETE request. This should delete one value by its id.'
      )
    )
  }
}