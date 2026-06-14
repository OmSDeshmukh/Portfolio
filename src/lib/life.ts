import type {
  LifeChapter,
  LifeSummary,
  LifeTheme,
  LifeWeek,
  LifeWeekState,
} from '@/types/life'

export const LIFE_EXPECTANCY_YEARS = 90
export const WEEKS_PER_YEAR = 52
export const TOTAL_LIFE_WEEKS = LIFE_EXPECTANCY_YEARS * WEEKS_PER_YEAR

const birthDate = new Date('2002-01-01T00:00:00.000Z')
const weekInMs = 7 * 24 * 60 * 60 * 1000

const chapterRanges: Array<{
  chapter: LifeChapter
  start: number
  end: number
}> = [
  { chapter: 'School', start: 1, end: 936 },
  { chapter: 'College', start: 937, end: 1196 },
  { chapter: 'Research Era', start: 1197, end: 1326 },
  { chapter: 'Builder Era', start: 1327, end: 1508 },
  { chapter: 'Unwritten', start: 1509, end: TOTAL_LIFE_WEEKS },
]

const weekNotes: Record<
  number,
  Pick<LifeWeek, 'title' | 'notes' | 'mood' | 'tags'>
> = {
  52: {
    title: 'First orbit',
    notes: 'A year happened. No memory, still somehow foundational.',
    mood: 4,
    tags: ['relationships'],
  },
  936: {
    title: 'School chapter closes',
    notes: 'The first long chapter ends. More structure than freedom, more questions than answers.',
    mood: 6,
    tags: ['learning', 'relationships'],
  },
  1110: {
    title: 'Software starts feeling real',
    notes: 'Code shifts from subject to lever. A small but permanent change in attention.',
    mood: 8,
    tags: ['learning', 'building'],
  },
  1248: {
    title: 'Research mode',
    notes: 'Reading papers, chasing failures, learning that depth has a different clock speed.',
    mood: 7,
    tags: ['learning', 'career'],
  },
  1378: {
    title: 'Groundtruth',
    notes: 'A tool built from friction becomes useful to people outside the original problem.',
    mood: 8,
    tags: ['building', 'career'],
  },
  1400: {
    title: 'Diffpulse',
    notes: 'A builder branch around context, review, and making engineering work less lossy.',
    mood: 8,
    tags: ['building', 'career'],
  },
  1460: {
    title: 'Interesting problems',
    notes: 'A reminder that direction can come from pull, not planning.',
    mood: 7,
    tags: ['reflection', 'learning'],
  },
}

export const lifeThemes: LifeTheme[] = [
  'learning',
  'building',
  'relationships',
  'travel',
  'career',
  'reflection',
]

export const lifeChapters = chapterRanges.map(({ chapter }) => chapter)

export function getLifeWeeks(referenceDate = new Date()): LifeWeek[] {
  const currentWeek = getCurrentLifeWeek(referenceDate)

  return Array.from({ length: TOTAL_LIFE_WEEKS }, (_, index) => {
    const weekNumber = index + 1
    const start = new Date(birthDate.getTime() + index * weekInMs)
    const end = new Date(start.getTime() + weekInMs - 1)
    const chapter = getChapterForWeek(weekNumber)
    const note = weekNotes[weekNumber]
    const isCurrent = weekNumber === currentWeek
    const isFuture = weekNumber > currentWeek

    return {
      id: `week-${weekNumber}`,
      weekNumber,
      startDate: toDateString(start),
      endDate: toDateString(end),
      chapter,
      title:
        note?.title ||
        (isCurrent
          ? 'This week'
          : isFuture
            ? undefined
            : `Week ${weekNumber}`),
      notes:
        note?.notes ||
        (isCurrent
          ? 'The only square on the grid that can still change while you are looking at it.'
          : undefined),
      mood: note?.mood,
      tags: note?.tags || inferTagsForWeek(weekNumber, chapter),
    }
  })
}

export function getLifeSummary(
  weeks: LifeWeek[],
  referenceDate = new Date()
): LifeSummary {
  const ageInWeeks = getCurrentLifeWeek(referenceDate)
  const completedWeeks = Math.max(0, ageInWeeks - 1)
  const remainingWeeks = Math.max(0, TOTAL_LIFE_WEEKS - ageInWeeks)

  return {
    ageInWeeks,
    completedWeeks,
    remainingWeeks,
    totalWeeks: TOTAL_LIFE_WEEKS,
    currentChapter:
      weeks.find((week) => week.weekNumber === ageInWeeks)?.chapter ||
      'Unwritten',
  }
}

export function getWeekState(
  weekNumber: number,
  referenceDate = new Date()
): LifeWeekState {
  const currentWeek = getCurrentLifeWeek(referenceDate)

  if (weekNumber < currentWeek) return 'past'
  if (weekNumber === currentWeek) return 'current'
  return 'future'
}

function getCurrentLifeWeek(referenceDate: Date) {
  const elapsed = referenceDate.getTime() - birthDate.getTime()
  return Math.min(
    TOTAL_LIFE_WEEKS,
    Math.max(1, Math.floor(elapsed / weekInMs) + 1)
  )
}

function getChapterForWeek(weekNumber: number) {
  return (
    chapterRanges.find(
      ({ start, end }) => weekNumber >= start && weekNumber <= end
    )?.chapter || 'Unwritten'
  )
}

function inferTagsForWeek(
  weekNumber: number,
  chapter: LifeChapter
): LifeTheme[] {
  if (weekNumber % 383 === 0) return ['travel', 'reflection']
  if (chapter === 'School') return ['learning', 'relationships']
  if (chapter === 'College') return ['learning', 'building']
  if (chapter === 'Research Era') return ['learning', 'career']
  if (chapter === 'Builder Era') return ['building', 'career']
  return ['reflection']
}

function toDateString(date: Date) {
  return date.toISOString().slice(0, 10)
}
