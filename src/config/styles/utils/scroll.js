import { css } from 'styled-components'

export const scrollStyled = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border);
    box-shadow: inset var(--shadow);
    border-radius: 10px;
  }
`
