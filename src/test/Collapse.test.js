import React from 'react'
import { create, act } from 'react-test-renderer'
import Collapse from '../components/Collapse/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Collapse component test', () => {
  test('Matches the snapshot', () => {
    const collapse = create(<Collapse />)
    expect(collapse.toJSON()).toMatchSnapshot()
  })

  test('it shows collapsed content when clicked', () => {
    const children = 'ChildrenTest'
    let component = null
    act(() => {
      component = create(
        <Collapse title='Title Test' defaultOpen buttonText='ButtonText'>
          {children}
        </Collapse>)
    })
    const instance = component.root
    // console.log(instance.props)
    // const expandIcon = instance.findByType(FontAwesomeIcon)
    // console.log(expandIcon.props.onClick)
    // act(() => expandIcon.props.onClick())
    const collapse = instance.findByProps({ className: 'contentWrapper' })
    expect(collapse.props.children.props.children).toBe(children)
  })
})
