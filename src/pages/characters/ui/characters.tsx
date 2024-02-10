import s from './characters.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from 'shared/lib/useDebounce.ts'
import { useGetCharactersQuery } from 'entities/character'
import { RenderError } from 'features/render-error'
import { CharacterCard } from './character-card.tsx'
import { FilterAndSort } from './filter-and-sort.tsx'

export function Characters() {
  const [params, setParams] = useSearchParams({})
  const paramsData = {
    currentPage: params.get('page') || 1,
    searchValue: params.get('name') || '',
  }

  const debounceName = useDebounce(paramsData.searchValue)
  const { data, isLoading, error } = useGetCharactersQuery({
    name: debounceName,
    page: Number(paramsData.currentPage),
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const changePage = (newPage: number) => {
    params.set('page', newPage.toString())
    setParams(params)
  }

  const changeSearchName = (name: string) => {
    params.set('name', name)
    setParams(params)

    if (!name) {
      params.delete('name')
      setParams(params)
    }
  }

  return (
    <div className={s.root}>
      <FilterAndSort
        className={s.head}
        changeSearchName={changeSearchName}
        pagination={{
          totalPageCount: data?.info.pages || 0,
          currentPage: Number(paramsData.currentPage),
        }}
        changePage={changePage}
        searchValue={paramsData.searchValue}
      />
      <div className={s.cards}>
        {error ? (
          <RenderError error={error} />
        ) : (
          data?.results.map(character => <CharacterCard character={character} key={character.id} />)
        )}
      </div>
    </div>
  )
}
