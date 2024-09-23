import styled from 'styled-components'

export const TitleText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`

export const ViewText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`

export const DateText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  margin-left: 10px;
`
