import { render, screen } from '@testing-library/react'

import Greeting from '.'

describe('<Greeting>', () => {
  it('should render the greeting', () => {
    render(<Greeting />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()
  })

  it('shoulder render correctly', () => {
    const container = render(<Greeting />)

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Greeting />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '06092b' })
  })
})
