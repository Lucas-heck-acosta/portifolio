import P from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <P type="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, corporis!
      Distinctio ex reprehenderit hic aut assumenda iste sint. Sapiente
      aspernatur pariatur dolore mollitia accusantium sint alias dolorem
      molestias beatae facilis?
    </P>
    <GithubSection>
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=lucas-heck-acosta&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucas-heck-acosta&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
