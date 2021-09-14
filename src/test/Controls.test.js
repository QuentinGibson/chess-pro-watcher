import React from 'react'
import {render, unmountComponentAtNode} from "react-dom"
import {act} from 'react-dom/test-utils'

import Controls from 'components/Controls'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})
afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders black player", () => {
  act(() => {
    render(<Controls/>, container)
  })
  expect(container.textContent).toBeTruthy()
})

