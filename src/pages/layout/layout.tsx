import s from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import { Container } from 'pages/layout/container.tsx'

type BaseLayoutProps = {}

export function BaseLayout({}: BaseLayoutProps) {
  return (
    <main className={s.root}>
      <Container className={s.container}>
        <Outlet />
      </Container>
    </main>
  )
}
