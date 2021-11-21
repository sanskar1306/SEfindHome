import { render, screen, cleanup } from '@testing-library/react'
import Header from '../header'
import { Provider } from "react-redux";
import store from '../../Redux/store'
test('Should render header component', () => {
    render(
        <Provider store={store}>
            
        <Header />
      </Provider>
    );
    const headerElement = screen.getByTestId("header");
    
    expect(headerElement).toBeInTheDocument();
})


