export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';

export const getBreakpoint = (device) => {
  switch (device) {
    case MOBILE:
      return 375;

    case TABLET:
      return 768;

    case DESKTOP:
      return 1280;

    default:
      return 'Invalid Breakpoint';
  }
}
