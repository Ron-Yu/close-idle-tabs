import { h, render } from 'preact'

import '../css/popup.sass'
import App from './popup/App'

render(<App />, document.getElementById('container'))

document.getElementById('link-to-options').addEventListener('click', function (e) {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage()
  } else {
    window.open(chrome.runtime.getURL('options.html'))
  }

  e.preventDefault()
})
