import { useMemo } from "react"

export const useSortedGoals = (goals, sort) => {
  const sortedGoals = useMemo(() => {
    if (sort) {
      if (sort === "importance") {
        return ([...goals].sort((a, b) => b[sort] - a[sort]
        ))
      } else if (sort === "title") {
        return ([...goals].sort((a, b) => a[sort].localeCompare(b[sort])))
      } else if (sort === "date") {
        return ([...goals].sort((a, b) => new Date(a[sort]) - new Date(b[sort])
        ))
      }

    } return goals

  }, [goals, sort])
  return sortedGoals
}

export const useGoals = (goals, sort, query) => {
  const sortedGoals = useSortedGoals(goals, sort)
  const sortedAndSearchedGoals = useMemo(() => {
    return sortedGoals.filter((goal) => goal.title.toLowerCase().includes(query) && goal.achieved !== true)
  }, [sortedGoals, query])
  return sortedAndSearchedGoals
}

