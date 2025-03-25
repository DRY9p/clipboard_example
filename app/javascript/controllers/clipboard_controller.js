import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "source" ]

  copy(){
    navigator.clipboard.writeText(this.sourceTarget.value)
  }

  //v2 - copy action attached to <a> link, input from a <textarea>
  //   Сигнатура "(commandId: string, showUI?: boolean | undefined, value?: string | undefined): boolean" "document.execCommand" устарела.ts(6387)
  // lib.dom.d.ts(7848, 8): Объявление было отмечено как устаревшее.
  // copy(event) {
  //   event.preventDefault()
  //   this.sourceTarget.select()
  //   document.execCommand("copy")
  // }

  static classes = [ "supported" ]

    connect() {
      navigator.permissions.query({name: 'clipboard-write'}).then( (result) => {
        if (result.state == "granted") {
          this.element.classList.add(this.supportedClass)
        }
      })
    }
}
