import { ArraySortPipe } from './shape-pipes.pipe';

describe('ShapePipesPipe', () => {
  it('create an instance', () => {
    const pipe = new ArraySortPipe();
    expect(pipe).toBeTruthy();
  });
});
