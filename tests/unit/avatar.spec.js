import { mount } from "@vue/test-utils"
import Avatar from '@/components/common/Avatar.vue'

describe('Avatar.vue', () => {
  // First and last name
  it ('Gets initials from name', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        name: 'Angus Dolan',
        size: 64,
      }
    })

    expect(wrapper.text()).toBe("AD")
  })
  // First name only
  it ('Gets initials from first name only', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        name: 'Angus',
        size: 64,
      }
    })

    expect(wrapper.text()).toBe("A")
  })
  // Double barrell first name only
  it ('Gets initials from double barrell first name only', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        name: 'Angus-James',
        size: 64,
      }
    })

    expect(wrapper.text()).toBe("AJ")
  })
  // Tripe and double barrell name 
  it ('Gets initials from double/triple barrell complex name', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        name: 'Angus-James Anstruther-Gough-Calthorpe',
        size: 64,
      }
    })

    expect(wrapper.text()).toBe("AC")
  })
  // Names with a comma
  it ('Gets initials from a name with a comma', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        name: "Angus O'Dolan",
        size: 64,
      }
    })

    expect(wrapper.text()).toBe("AD")
  })
})