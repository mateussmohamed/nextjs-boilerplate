import { render, screen } from '@testing-library/react'

import Greeting from '.'

describe('<Greeting>', () => {
  it('should render the greeting', () => {
    render(<Greeting />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('shoulder render correctly', () => {
    const container = render(<Greeting />)

    expect(container).toMatchSnapshot()
  })
})
