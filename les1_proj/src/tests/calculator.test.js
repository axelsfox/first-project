import { mount } from '@vue/test-utils'
import Calculator from '../components/calculator.vue'
 
describe('Calculator Test', () => {
 it('Test operand1 input value', async () => {
   const wrapper = mount(Calculator);
     const operand1Input = wrapper.find('input[name=operand1]');
     operand1Input.setValue('1')

expect(wrapper.vm.operand1).toBe(1)   
     
   })
     
   it('Test operand2 input value', async () => {
    const wrapper = mount(Calculator);
      const operand2Input = wrapper.find('input[name=operand2]');
      operand2Input.setValue('2')
 
 expect(wrapper.vm.operand2).toBe(2)   
      
    })

 })


 describe('Calculator Methods', () => {
  it('Test sum operation', async () => {
    const wrapper = mount(Calculator);
      const operand1Input = wrapper.find('input[name=operand1]');
      operand1Input.setValue('100')
      
         
      const operand2Input = wrapper.find('input[name=operand2]');
      operand2Input.setValue('100')

      const sumOpBtn = wrapper.find('button[name="+"]')
      sumOpBtn.trigger('click')

  
  expect(wrapper.vm.result).toBe(200)   
       
     })
     
  })
 