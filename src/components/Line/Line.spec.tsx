import renderWithTheme, {
  renderWithThemeAndContextProvider,
} from '@/config/renderWithTheme'
import { theme } from '@/styles/theme'
import { screen } from '@testing-library/react'

import { Line } from './Line'

describe('Given the rendering of the component', () => {
  it('When the property color is "red", Then component must have red color', () => {
    const { container } = renderWithTheme(
      <Line color="red" collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.red}`
    )
  })

  it('When the property color is "blue", Then component must have blue color', () => {
    const { container } = renderWithTheme(
      <Line color="blue" collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.blue}`
    )
  })

  it('When color property is null, Then component must have default color', () => {
    const { container } = renderWithTheme(
      <Line collumn={0} row={0} isVertical />
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.colors.default}`
    )
  })
})

describe('Given click in the line', () => {
  it('When the turn is the first player, Then the line has changes its color to red', () => {
    renderWithThemeAndContextProvider(<Line collumn={0} row={0} isVertical />)

    screen.getByLabelText('vertical-line').click()

    expect(screen.getByLabelText('vertical-line')).toHaveStyle(
      `background-color: ${theme.colors.red}`
    )

    expect(screen.getByLabelText('vertical-line')).toHaveAttribute(
      'value',
      'red'
    )
  })
})
