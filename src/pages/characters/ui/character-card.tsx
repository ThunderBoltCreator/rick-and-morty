import { Character } from 'entities/character'
import s from 'pages/characters/ui/characters.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'shared/common/button'
import ArrowIcon from 'shared/icons/arrow-icon.tsx'
import { sliceText } from 'shared/lib/text/slice-text.ts'
import { Card } from 'shared/common/card'
import { Typography } from 'shared/common/typography'

type CharacterCardProps = {
  character: Character
}
export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card className={s.card}>
      <Link className={s.imageWrapper} to={`/character/${character.id}`}>
        <Typography variant={'h2'} className={s.name}>
          {sliceText(character.name, 20)}
        </Typography>
        <img className={s.image} src={character.image} alt={`Picture of ${character.name}`} />
      </Link>
      <div className={s.cardBody}>
        <Typography variant={'body1'}>Name: {character.name}</Typography>
        <Typography variant={'body1'}>Status: {character.status}</Typography>
        <Typography variant={'body1'}>
          Species: {character.species ? character.species : 'unknown'}
        </Typography>
        <Typography variant={'body1'}>
          Type: {character.type ? character.type : 'unknown'}
        </Typography>
        <Typography variant={'body1'}>Gender: {character.gender}</Typography>
      </div>
      <Button
        fullWidth
        icon={<ArrowIcon />}
        iconPosition={'right'}
        as={Link}
        className={s.link}
        to={`/character/${character.id}`}
      >
        Go to {sliceText(character.name, 16)} page
      </Button>
    </Card>
  )
}
