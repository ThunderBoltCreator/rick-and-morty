import { Character } from 'entities/character'
import s from 'pages/characters/ui/characters.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'shared/common/button'
import ArrowIcon from 'shared/icons/arrow-icon.tsx'
import { sliceText } from 'shared/lib/text/slice-text.ts'
import { Card } from 'shared/common/card'

type CharacterCardProps = {
  character: Character
}
export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card className={s.card}>
      <Link className={s.imageWrapper} to={`/character/${character.id}`}>
        <h2 className={s.name}>{sliceText(character.name, 20)}</h2>
        <img className={s.image} src={character.image} alt={`Picture of ${character.name}`} />
      </Link>
      <div className={s.cardBody}>
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Species: {character.species ? character.species : 'unknown'}</p>
        <p>Type: {character.type ? character.type : 'unknown'}</p>
        <p>Gender: {character.gender}</p>
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
