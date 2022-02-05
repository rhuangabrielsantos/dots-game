import renderWithTheme from '../../config/renderWithTheme'
import { theme } from '../../styles/theme'

import { VerticalLine } from './VerticalLine'

describe('Test the vertical line component', () => {
  it('given the rendering of the component, when the property color is "red", then component must have red color', () => {
    const { container } = renderWithTheme(<VerticalLine color="red" />)

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.red}`
    )
  })

  it('given the rendering of the component, when the property color is "blue", then component must have blue color', () => {
    const { container } = renderWithTheme(<VerticalLine color="blue" />)

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.blue}`
    )
  })

  it('given component rendering, when color property is null then component must have default color', () => {
    const { container } = renderWithTheme(<VerticalLine />)

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.default}`
    )
  })
})
