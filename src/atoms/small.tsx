import React from 'react'
import styled from 'styled-components'

export type Props = {
  text: string
}

const _small = styled.small`
  font-size: 10px;
`
export const Small: React.FC<Props> = props => <_small>{props.text}</_small>
