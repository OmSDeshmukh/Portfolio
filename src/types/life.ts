export type LifeChapter =
  | 'School'
  | 'College'
  | 'Research Era'
  | 'Builder Era'
  | 'Unwritten'

export type LifeTheme =
  | 'learning'
  | 'building'
  | 'relationships'
  | 'travel'
  | 'career'
  | 'reflection'

export type LifeWeek = {
  id: string
  weekNumber: number
  startDate: string
  endDate: string
  title?: string
  notes?: string
  mood?: number
  tags?: LifeTheme[]
  chapter?: LifeChapter
}

export type LifeWeekState = 'past' | 'current' | 'future'

export type LifeSummary = {
  ageInWeeks: number
  completedWeeks: number
  remainingWeeks: number
  totalWeeks: number
  currentChapter: LifeChapter
}

export type LifeView = 'life' | 'chapters' | 'themes'
