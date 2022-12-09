import { render, screen, waitFor } from '@testing-library/react';
import Main from './Main';
import userEvent from '@testing-library/user-event'
import onewimActions from '../redux/onewimActions';
import cartAction from '../redux/action'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '../redux/rootReducer'

const mockStore = createStore(reducer)

// jest.mock('../redux/action', () =>({
//     emptyCart:jest.fn(),
//     addToCart:jest.fn(),
//     removeToCart:jest.fn()
// }))
jest.mock('../redux/onewimActions', () =>({
  updateVarifivationData:jest.fn(),
  submitData:jest.fn()
}))

describe('MainPage',() =>{
    it('renders welcome message', async() => {
        const initialState = {
            onewim:{
        payload :'orange'}}
        // let store = mockStore(initialState); 
    
        render(<Provider store={mockStore}><Main /></Provider>,{initialState});
        expect(screen.getByText('Home')).toBeInTheDocument();

        // const emptyButton = screen.getByText('Empty Cart')
        // userEvent.click(emptyButton)
        //  await waitFor(() => expect(cartAction.emptyCart).toBeCalled())
        //  const removeToCartButton = screen.getByText('Remove to Cart')
        //  userEvent.click(removeToCartButton)
        //  await waitFor(() => expect(onewimActions.removeToCart).toBeCalled())
      });

      it('render add to cart button', async() =>{
        const initialState = {
          onewim:{
      payload :'orange'}}
        render(<Provider store={mockStore}><Main /></Provider>,{initialState});
        const submitForm = screen.getByTestId("changeValue")
        userEvent.click(submitForm)
        await waitFor(() => expect(onewimActions.submitData).toBeCalled())


       })
})

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
