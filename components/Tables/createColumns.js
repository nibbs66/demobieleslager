import { label } from '../../utils/helpers'

export const createColumns = (events, index) => {
  const columns = []
  events.map((event, idx) => {
    columns.push({
      id: idx,
      name: label(event),
      sort: event,
        viewAll: idx === index,
    })
  })
  return columns
}
// { id: 1, name: 'Name', sort: 'name', order: 'desc', viewAll: true },
