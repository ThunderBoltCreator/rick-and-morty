import { usePagination, UsePaginationProps } from './usePagination'

import s from './pagination.module.scss'
import { clsx } from 'clsx'
import ChevronLeftIcon from 'shared/icons/chevron-left-icon.tsx'
import { Typography } from 'shared/common/typography'

type PaginationProps = {
  paginationInfo: UsePaginationProps
  onChangePage: (newPage: number) => void
  className?: string
}
export function Pagination({ paginationInfo, onChangePage, className }: PaginationProps) {
  const pagination = usePagination(paginationInfo)

  const styles = {
    buttonPrev: clsx(s.arrow, s.prevPage, paginationInfo.currentPage === 1 ? s.disabled : ''),
    dots: s.dots,
    root: clsx(s.pagination, paginationInfo.disabled ? s.disabled : '', className),
    itemActive: clsx(s.item, s.active),
    item: clsx(s.item),
    buttonNext: clsx(
      s.arrow,
      s.nextPage,
      paginationInfo.currentPage === paginationInfo.totalPageCount ? s.disabled : ''
    ),
  }

  const onClickPrev = () => {
    onChangePage(paginationInfo.currentPage - 1)
  }
  const onClickNext = () => {
    onChangePage(paginationInfo.currentPage + 1)
  }

  console.log('paginationInfo.totalPageCount', paginationInfo.totalPageCount)
  console.log('paginationInfo.currentPage', paginationInfo.currentPage)

  return (
    <div className={styles.root}>
      <button
        className={styles.buttonPrev}
        disabled={paginationInfo.currentPage === 1 || paginationInfo.disabled}
        onClick={onClickPrev}
      >
        <ChevronLeftIcon />
      </button>
      {pagination?.map((el, i) => {
        if (typeof el === 'string') {
          return (
            <Typography as={'span'} className={styles.dots} key={i}>
              {el}
            </Typography>
          )
        }

        if (el === paginationInfo.currentPage) {
          return (
            <Typography as={'span'} className={styles.itemActive} key={i}>
              {el}
            </Typography>
          )
        }

        return (
          <button
            disabled={paginationInfo.disabled}
            className={styles.item}
            key={i}
            onClick={() => onChangePage(el)}
          >
            <Typography as={'span'}>{el}</Typography>
          </button>
        )
      })}
      <button
        className={styles.buttonNext}
        disabled={
          paginationInfo.currentPage === paginationInfo.totalPageCount || paginationInfo.disabled
        }
        onClick={onClickNext}
      >
        <ChevronLeftIcon />
      </button>
    </div>
  )
}
