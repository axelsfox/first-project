import { mount } from '@vue/test-utils'
import Calculator from '../components/calculator.vue'
import 'regenerator-runtime/runtime'
 
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

     it('Test substr operation', async () => {
      const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('100')
        
           
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('50')
  
        const subOpBtn = wrapper.find('button[name="-"]')
        subOpBtn.trigger('click')
  
    
    expect(wrapper.vm.result).toBe(50)   
         
       })
      it('Test multi operation', async () => {
        const wrapper = mount(Calculator);
          const operand1Input = wrapper.find('input[name=operand1]');
          operand1Input.setValue('10')
          
             
          const operand2Input = wrapper.find('input[name=operand2]');
          operand2Input.setValue('10')
    
          const multiOpBtn = wrapper.find('button[name="*"]')
          multiOpBtn.trigger('click')
    
      
      expect(wrapper.vm.result).toBe(100)   
           
         })

      it('Test divis operation', async () => {
            const wrapper = mount(Calculator);
              const operand1Input = wrapper.find('input[name=operand1]');
              operand1Input.setValue('10')
              
                 
              const operand2Input = wrapper.find('input[name=operand2]');
              operand2Input.setValue('2')
        
              const divisOpBtn = wrapper.find('button[name="/"]')
              divisOpBtn.trigger('click')
        
          
          expect(wrapper.vm.result).toBe(5)   
               
             })


      it('Test exponen operation', async () => {
              
        const wrapper = mount(Calculator);

              const operand1Input = wrapper.find('input[name=operand1]');
              operand1Input.setValue('3')
              
                 
              const operand2Input = wrapper.find('input[name=operand2]');
              operand2Input.setValue('2')
        
              const expOpBtn = wrapper.find('button[name="^"]')
              expOpBtn.trigger('click')
        
          
          expect(wrapper.vm.result).toBe(9)   
               
             })
  })
 //При вводе нуля выведется ошибка

  describe('Calculator Messag Tests', () => {
    it('Test error mess', async () => {
      const wrapper = mount(Calculator);
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('0')
  
        const Btn = wrapper.find('button[name="/"]')
        Btn.trigger('click')
  
    
    expect(wrapper.vm.error).toContain(
      'На ноль делить нельзя!')   
         
       })  

    })
    //Проверка работы метода экранной клавиатуры

    describe('Calculator Keyboard Tests', () => {
      it('Test boardButton', async () => {

        const wrapper = mount(Calculator);
        const CheckInput = wrapper.find('input[type="checkbox"]')
        await CheckInput.setChecked()

        const key1Btn = wrapper.find('button[name="1"]')
        key1Btn.trigger('click')

        const key2Btn = wrapper.find('button[name="2"]')
        key2Btn.trigger('click')

     expect(wrapper.vm.operand1).toBe("12")   
     
         })  

         it('Test delButton', async () => {

          const wrapper = mount(Calculator);
          const CheckInput = wrapper.find('input[type="checkbox"]')
          await CheckInput.setChecked()
  
          const key5Btn = wrapper.find('button[name="5"]')
        key5Btn.trigger('click')

        const key3Btn = wrapper.find('button[name="3"]')
        key3Btn.trigger('click')

          const delBtn = wrapper.find('button[name="CE"]')
          delBtn.trigger('click')
  
       expect(wrapper.vm.operand1).toBe("5")   
       
           })  
    
  
      })
 