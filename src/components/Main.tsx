import styled from 'styled-components'

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

type MainProps = React.PropsWithChildren;

export function Main(props: MainProps) {
  return <StyledMain>{props.children}</StyledMain>;
}