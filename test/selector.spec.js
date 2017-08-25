import {makeGetVisibleTechies} from '../src/js/reselect/selectors'

describe('selector', () => {

   const mockedState = {
      techies: {
         techies: [{id:"1",name:"a"},{id:"2",name:"b"}]
      },
    };
    const mockedProps =  {
      match: {
         params: {id:"3"}
      },
    }

  let expectedResult = []
  const getVisibleTechies = makeGetVisibleTechies();
  it("selector unit test", () => {
    expect(getVisibleTechies(mockedState,mockedProps)).toEqual(expectedResult)
  })
})