import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('the page html', () => {
  render(<App />);
  screen.debug();
});


test('gets by id',()=>{
    render(<App />);
    screen.debug();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    
})
test('render h1 element', () => {
    render(<App />);
  
    screen.debug();
  
    expect(screen.getByText('Learn to code by watching others')).toBeInTheDocument();
  });
 test('the submit button',()=>{
     render(<App />);
  
     screen.debug();

     expect(screen.getByText('CLAIM YOUR FREE TRIAL')).toBeInTheDocument();
 })
 
