import { useFetchImageURI } from '../src/hooks/useFetchImageURI';
import { renderHook } from '@testing-library/react-hooks';

describe('Thing', () => {
  it('Should be able to fetch imageURI using the useFetchImageURI hook', () => {
    const result = renderHook(() =>
      useFetchImageURI('0x6B6C84503FE808fd91ad5087793038Ef81b37f12')
    );
    console.log(result);
    expect(result).toBeTruthy();
  });
});
