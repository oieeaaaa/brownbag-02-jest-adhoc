import { getBreakpoint, MOBILE, TABLET, DESKTOP } from './index'

window.innerWidth = 1280;

test('getBreakpoint - Mobile', () => {
  const mobileBreakpoint = getBreakpoint(MOBILE);

  expect(mobileBreakpoint).toBeLessThan(window.innerWidth);
  expect(mobileBreakpoint).toBeLessThanOrEqual(375);
});

test('getBreakpoint - Tablet', () => {
  const tabletBreakpoint = getBreakpoint(TABLET);

  expect(tabletBreakpoint).toBeLessThan(window.innerWidth);
  expect(tabletBreakpoint).toBeLessThanOrEqual(768);
});

test('getBreakpoint - Desktop', () => {
  const tabletBreakpoint = getBreakpoint(DESKTOP);

  expect(tabletBreakpoint).toBeGreaterThan(getBreakpoint(TABLET));
  expect(tabletBreakpoint).toBeGreaterThanOrEqual(1280);
});

test('getBreakpoint - Invalid Breakpoint', () => {
  const breakpoint = getBreakpoint('TABLET_LANDSCAPE');

  expect(breakpoint).toBe('Invalid Breakpoint');
});

test('Weird js', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})
