import { useMemo } from 'react'

export const dotts = '...'
export const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({ count, events, siblingCount = 1, page }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(count / events)
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1)
    const rightSiblingIndex = Math.min(page + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, dotts, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, dotts, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, dotts, ...middleRange, dotts, lastPageIndex]
    }
  }, [count, events, siblingCount, page])

  return paginationRange
}
// page,
//     count,
//     siblingCount,
//     events,
