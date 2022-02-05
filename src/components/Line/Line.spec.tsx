import renderWithTheme from '../../config/renderWithTheme'
import { theme } from '../../styles/theme'

import { Line } from './Line'

describe('Test the horizontal line component', () => {
  it('given the rendering of the component, when the property color is "red", then component must have red color', () => {
    const { container } = renderWithTheme(
      <Line color="red" collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.red}`
    )
  })

  it('given the rendering of the component, when the property color is "blue", then component must have blue color', () => {
    const { container } = renderWithTheme(
      <Line color="blue" collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.blue}`
    )
  })

  it('given component rendering, when color property is null then component must have default color', () => {
    const { container } = renderWithTheme(
      <Line collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.default}`
    )
  })
})
