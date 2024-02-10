import s from 'pages/characters/ui/characters.module.scss'
import { Pagination, UsePaginationProps } from 'features/pagination'
import { TextFields } from 'shared/common/input'

type FilterAndSortProps = {
  changeSearchName: (newSearchValue: string) => void
  pagination: UsePaginationProps
  changePage: (newPage: number) => void
  searchValue: string
  className?: string
}
export function FilterAndSort({
  changeSearchName,
  pagination,
  changePage,
  searchValue,
  className,
}: FilterAndSortProps) {
  return (
    <div className={className}>
      <TextFields.search
        value={searchValue || ''}
        onValueChange={changeSearchName}
        placeholder={'Input search'}
      />
      <Pagination
        paginationInfo={{
          currentPage: Number(pagination.currentPage),
          totalPageCount: pagination.totalPageCount,
          disabled: pagination.disabled,
        }}
        onChangePage={changePage}
        className={s.pagination}
      />
    </div>
  )
}
