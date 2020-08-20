import { shallowMount } from '@vue/test-utils'
import BurgerList from '../components/BurgerList'

describe('BurgerList', () => {
    it('should render to a snapshot when list is empty', () => {
        const propsData = { burgers: [] }
        const wrapper = shallowMount(BurgerList, { propsData })
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should render to a snapshot when list has items', () => {
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