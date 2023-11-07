import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBtn } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragraph type="secondary">Lista de tarefas feitas com vueJS</Paragraph>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Project
