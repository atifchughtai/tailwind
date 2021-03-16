import {css} from 'styled-components'
// import {
//   BreakpointSmall,
//   BreakpointMedium,
//   BreakpointLarge,
//   BreakpointXlarge,
//   BreakpointXxlarge,
//   BreakpointXxxlarge,
// } from '@dentsu-ui/elements';
const bp = {
  BreakpointSmall: '20em',
  BreakpointMedium: '40em',
  BreakpointLarge: '64em',
  BreakpointXlarge: '80em',
  BreakpointXxlarge: '90em',
  BreakpointXxxlarge: '120em',
}

const sizes = {
  small: bp.BreakpointSmall,
  medium: bp.BreakpointMedium,
  large: bp.BreakpointLarge,
  xlarge: bp.BreakpointXlarge,
  xxlarge: bp.BreakpointXxlarge,
  xxxlarge: bp.BreakpointXxxlarge,
}
console.log(sizes)
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `
  return acc
}, {})
