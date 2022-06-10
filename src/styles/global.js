import {Global, css} from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');
      body {
        font-family: "Roboto", sans-serif;
        margin: 0
      }
    `}
  />
)
