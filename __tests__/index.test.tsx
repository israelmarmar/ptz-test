import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Home from '../pages'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByText("Cuidamos bem do seu pokémon, para ele cuidar bem de você")
    expect(heading).toBeInTheDocument()
  })

  it('renders a background image', () => {
    render(<Home />)
    const main = screen.getByTestId("main-with-image")
    expect(main).toHaveStyle('background-image: url("/images/pokemon-hero.jpg") no-repeat')
  })

  it('renders logo', () => {
    render(<Header />)
    const component = screen.getByText("Centro pokémon")
    expect(component).toBeInTheDocument()
  })

  it('renders consulta button', () => {
    render(<Header />)
    const component = screen.getByText("Agendar consulta")
    expect(component).toBeInTheDocument()
  })

  it('renders about button', () => {
    render(<Header />)
    const component = screen.getByText("Quem somos")
    expect(component).toBeInTheDocument()
  })

})