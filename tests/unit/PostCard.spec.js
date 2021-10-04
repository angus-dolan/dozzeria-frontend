import { mount } from '@vue/test-utils'

import PostCard from '@/components/ui/public/feed/PostCard.vue'
import '@/globalComponents.js'

const factory = (propsData) => {
  return mount(PostCard, {
    propsData: {
      postImg: 'pizza.jpg',
      postAuthor: 'Angus Dolan',
      postUsername: 'angus',
      title: 'Classic Neapolitan Margherita',
      date: 'Wed, 26 January 2021',
      ...propsData
    }
  })
}

describe('PostCard.vue', () => {

  // displays author name and username
  it ('displays author name and username', () => {
    const wrapper = factory()

    expect(wrapper.find('.author-name').text()).toBe('Angus Dolan')
    expect(wrapper.find('.author-username').text()).toBe('@angus') 
  })

  // like button works as expected
  it ('like button works correctly', () => {
    const wrapper = factory()
    
    wrapper.setData({ postLiked: false })
    const button = wrapper.find('.likebtn')

    // Test liking button
    button.trigger('click')
    expect(wrapper.vm.postLiked).toBe(true)
    // Test unliking button
    button.trigger('click')
    expect(wrapper.vm.postLiked).toBe(false)
  }) 

  it ('double clicking likes a post', () => {
    const wrapper = factory()

    wrapper.setData({ postLiked: false })

    const card = wrapper.find('.postcard')
    expect(wrapper.vm.postLiked).toBe(false)

    // simulate double click
    card.trigger('click')
    card.trigger('click')
  
    // check post is now liked
    expect(wrapper.vm.postLiked).toBe(true)
  })

  // displays post title and date
  it ('displays post title and date', () => {
    const wrapper = factory()

    expect(wrapper.find('.post-title').text()).toBe('Classic Neapolitan Margherita')
    expect(wrapper.find('.post-date').text()).toBe('Wed, 26 January 2021') 
  })

  // regression test
  it ('renders correctly', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

})