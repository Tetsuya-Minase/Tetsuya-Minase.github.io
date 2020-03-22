import React from 'react'
import styled from 'styled-components'
import { Small } from '../atoms/small'

export type Props = {
  copyright: string
}

const _footer = styled.footer``

export const Copyright: React.FC<Props> = ({ copyright }) => (
  <_footer>
    <Small text={copyright} />
  </_footer>
)
