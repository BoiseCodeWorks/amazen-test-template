import store from '../store'
import { ValuesSuite } from './values'


export function loadSuites() {
  store.commit("reloadSuites")
  new ValuesSuite()
}


