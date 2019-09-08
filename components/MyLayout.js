import styled from 'styled-components'
import { rem } from 'polished'

const LayoutStyle = styled.div`
  padding: ${rem(`20px`)};
`

export default function Layout(props) {
  return <LayoutStyle>{props.children}</LayoutStyle>
}
