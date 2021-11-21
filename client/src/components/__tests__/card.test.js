import { render, screen, cleanup } from '@testing-library/react'
import Card from '../card'
test('Should render card component', () => {
    render(<Card />);
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toBeInTheDocument();
})