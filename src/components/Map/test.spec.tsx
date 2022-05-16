import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('Should render whitout any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Recife',
      slug: 'recife',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Rio de janeiro',
      slug: 'rio-de-janeiro',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/recife/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Rio de janeiro/i)).toBeInTheDocument()
  })
})
