import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, BtnTheme, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Lucas Heck</Title>
      <Paragraph type="secondary" fontSize={12}>
        lucas-heck-acosta
      </Paragraph>
      <Description type="main" fontSize={12}>
        Junior Developer
      </Description>
      <BtnTheme>Trocar tema</BtnTheme>
    </SidebarContainer>
  </aside>
)

export default SideBar
