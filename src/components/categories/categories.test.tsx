import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpeers/test.helper'
import Categories from './categories.component'

jest.mock('firebase/firestore')

describe('Categories', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any
    mockedFirestore.getDocs.mockReturnValue([
      {
        data() {
          return {
            id: '1',
            displayName: 'Lorem Ipsum'
          }
        }
      }
    ])
    mockedFirestore.collection.mockReturnValue({
      withConverter: () => {}
    })

    const { getByText, findByText } = renderWithRedux(<Categories />, {})
    await findByText('Lorem Ipsum')
    getByText(/Explorar/i)
  })
})
