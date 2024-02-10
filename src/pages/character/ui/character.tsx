import { Card } from 'shared/common/card/card.tsx'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Typography } from 'shared/common/typography'

import s from './character.module.scss'
import { Button } from 'shared/common/button'
import ArrowIcon from 'shared/icons/arrow-icon.tsx'
import { useGetCharacterByIdQuery } from 'entities/character/api/characters-api'

export function Character() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  if (!id) {
    return <Navigate to={'/'} />
  }

  const { data, isLoading, isError } = useGetCharacterByIdQuery({ id })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data || isError) {
    return <strong>Oooops</strong>
  }

  return (
    <Card className={s.root}>
      <Button
        onClick={() => navigate(-1)}
        className={s.backLink}
        variant={'secondary'}
        icon={<ArrowIcon />}
      />
      <div className={s.cardTop}>
        <div className={s.imageWrapper}>
          <img src={data.image} alt={`Picture with ${data.name}`} />
        </div>
        <div className={s.mainInfo}>
          <Typography variant={'h3'}>Name: {data.name}</Typography>
          <Typography variant={'h3'}>Type: {data.type || 'unknown'}</Typography>
          <Typography variant={'h3'}>Status: {data.status || 'unknown'}</Typography>
          <Typography variant={'h3'}>Species: {data.species || 'unknown'}</Typography>
          <Typography variant={'h3'}>Location: {data.location.name}</Typography>
          <Typography variant={'h3'}>Origin: {data.origin.name}</Typography>
          <Typography className={s.episodeTitle} variant={'subtitle2'}>
            Episodes
          </Typography>
          <ul className={s.episodeList}>
            {data.episode.map((episode, index) => (
              <li key={index}>
                <a href={episode}>{index}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
