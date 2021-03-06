import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import { PageTemplateProps } from './utils'

const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}

export default PageTemplate
