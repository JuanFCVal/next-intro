import * as pokemonApi from '../src/utils/getPokemonInfo'
import DemoPage from '../src/pages/demo'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react'
// jest.spyOn('../src/utils/getPokemonInfo', () => ({
//   ...jest.requireActual('../src/utils/getPokemonInfo'),
//   getPokemonInfo: jest.fn(),
// }))

const mockPokemonInfo = jest.fn().mockImplementation(pokemonApi, () => ({
  return: {
    id: '1',
    name: 'Perro',
    sprites: {
      back_default: '',
    },
  },
}))

describe('Calculator', () => {
  beforeEach(() => {
    mockPokemonInfo.mockReturnValue({
      id: '1',
      name: 'Perro',
      sprites: {
        back_default: '',
      },
    })
  })
  it('renders a calculator', () => {
    render(<DemoPage />)
    // check if all components are rendered
    expect(screen.getByTestId('result')).toBeInTheDocument()
    expect(screen.getByTestId('num1')).toBeInTheDocument()
    expect(screen.getByTestId('num2')).toBeInTheDocument()
    expect(screen.getByTestId('add')).toBeInTheDocument()
    expect(screen.getByTestId('subtract')).toBeInTheDocument()
    expect(screen.getByTestId('multiply')).toBeInTheDocument()
    expect(screen.getByTestId('divide')).toBeInTheDocument()
  })
  it('should show "Resultado 0"  as initial value', () => {
    const component = render(<DemoPage />)
    expect(component.getByText(/Resultado 0/)).toBeInTheDocument()
  })
  it('Should show "Resultado 7" when add is pressed', () => {
    const component = render(<DemoPage />)
    console.log(prettyDOM(component))
    const num1 = component.getByPlaceholderText('Enter number 1')
    const num2 = component.getByPlaceholderText('Enter number 2')
    const addButton = component.getByText('Add')
    fireEvent.change(num1, {
      target: {
        value: 2,
      },
    })
    fireEvent.change(num2, {
      target: {
        value: 5,
      },
    })
    fireEvent.click(addButton)
    expect(component.getByText(/Resultado 7/)).toBeInTheDocument()
    // check if all components are rendered
  })

  it.only('Should show pokemon name when search is press', () => {
    const component = render(<DemoPage />)
    const { container } = render(<DemoPage />)
    expect(component.getByText(/No hay nada/)).toBeInTheDocument()
    const searchBtt = component.getByText('Search')
    fireEvent.click(searchBtt)
    waitFor(() => {
      expect(component.getByText(/Perro/)).toBeInTheDocument()
    }) //timeout

    // check if all components are rendered
  })
})
