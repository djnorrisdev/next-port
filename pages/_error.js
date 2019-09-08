import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const _error = () => {
  return (
    <Wrapper>
      <h1>What did you think you'd find here?</h1>
    </Wrapper>
  )
}

export default _error
