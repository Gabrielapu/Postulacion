import { shallowMount } from '@vue/test-utils'
import BurgerList from '../components/BurgerList'

// Prueba hacia el arreglo burgers, cuando esta vacio al no haber hamburguesas y al estar con hamburguesas.
// No logre ejecutar el comando para hacer funcionar la prueba. Pero me guie por un articulo de internet.
describe('BurgerList', () => {
    it('should render to a snapshot when burger list is empty', () => {
        const propsData = { burgers: [] }
        const wrapper = shallowMount(BurgerList, { propsData })
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should render to a snapshot when burger list has items', () => {
        const propsData = {
            burgers: [{
                nombre: 'BurgerTest',
                ingredientes: ['Palta', 'Queso'],
                calorias: 500,
            }]
        }
        const wrapper = shallowMount(BurgerList, { propsData })
        expect(wrapper.element).toMatchSnapshot()
    })
})