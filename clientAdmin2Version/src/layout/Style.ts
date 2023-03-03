import styled from 'styled-components'
import { convertPxToRem } from '../utils/convertor'

export default styled.div`
  margin-left: ${convertPxToRem(200)};
    @media (max-width: 991px) {
        margin-left: ${convertPxToRem(50)};
    }
`
