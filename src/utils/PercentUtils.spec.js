import {getWidthAsPercentOfTotalWidth} from './PercentUtils';

describe('getWidthAsPercentOfTotalWidth', ()=>{
  test('getWidthAsPercentOfTotalWidth should return 2500 with total width of 500 and percent of 50',()=>{
    
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});