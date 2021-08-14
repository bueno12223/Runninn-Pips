/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../frontend/components/global/layout'
import ProviderMock from '../../__mocks__/providerMock'

describe('<Layout>', () => {
  test('render del Layout', () => {
    const layout = shallow(
      <ProviderMock>
        <Layout />
      </ProviderMock>
    )
    expect(layout.length).toEqual(1)
  })
})
