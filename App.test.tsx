import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'  // Now imports from separate file

describe('App Component', () => {
  test('renders main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { 
      name: /soundscape player/i 
    })).toBeInTheDocument()
  })

  test('contains test button', () => {
    render(<App />)
    expect(screen.getByRole('button', {
      name: /test button/i
    })).toBeInTheDocument()
  })
})