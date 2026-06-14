import Timeline, { type TimelineVersion } from '@/components/Timeline'

const versions: TimelineVersion[] = [
  {
    id: 'v1-0',
    version: 'v1.0',
    title: 'Factory reset',
    description:
      'Born in Pune. No roadmap, no architecture docs, just a lot of curiosity and a surprisingly durable attention span.',
    tags: [],
    branches: [
      {
        title: 'Question collector',
        description:
          'Early habit of saving strange questions before knowing what any of them were good for.',
        status: 'merged',
        duration: 'always-on',
        projects: [],
        experiments: [],
        notes: [
          {
            title: 'The thing about interesting problems',
            description:
              'The operating principle: follow the problems that keep pulling you back.',
            href: '/blog/interesting-problems',
            meta: 'note',
          },
        ],
      },
    ],
  },
  {
    id: 'v2-0',
    version: 'v2.0',
    title: 'First compile',
    description:
      'Learned to code. Realized software could be a lever for almost anything, then started pulling every lever within reach.',
    tags: ['Python', 'web'],
    branches: [
      {
        title: 'Tiny tools branch',
        description:
          'Small utilities and web experiments built because some local annoyance got loud enough.',
        status: 'merged',
        duration: '1 year',
        projects: [],
        experiments: [],
        notes: [
          {
            title: 'On building tools nobody asked for',
            description:
              'A note on building from personal friction before trying to generalize.',
            href: '/blog/building-for-yourself',
            meta: 'essay',
          },
        ],
      },
      {
        title: 'Framework tourism',
        description:
          'Tried too many stacks too quickly. Useful for taste, less useful for finishing things.',
        status: 'abandoned',
        duration: 'many weekends',
        projects: [],
        experiments: [
          {
            title: 'Half-finished clones',
            description:
              'A graveyard of almost-products that taught scope control the slow way.',
            meta: 'local-only',
          },
        ],
        notes: [],
      },
    ],
  },
  {
    id: 'v3-0',
    version: 'v3.0',
    title: 'Research mode',
    description:
      'Went deep on ML and systems. Published. Failed a lot. Learned more from the failures.',
    tags: ['ML', 'research', 'NLP'],
    branches: [
      {
        title: 'NLP rabbit hole',
        description:
          'Datasets, annotation, retrieval, evaluation, and the weird places language models become overconfident.',
        status: 'merged',
        duration: '8 months',
        defaultOpen: true,
        projects: [
          {
            title: 'Groundtruth',
            description:
              'Lightweight annotation tool for NLP datasets, used by two research labs.',
            href: '/built/groundtruth',
            meta: 'built',
          },
        ],
        experiments: [
          {
            title: 'Calibration Failures in RAG Systems',
            description:
              'Published work on overconfidence when retrieved context conflicts with model memory.',
            href: '/research',
            meta: 'paper',
          },
          {
            title: 'LLMs as automated paper reviewers',
            description:
              'Looked plausible, missed expert-level errors, abandoned after testing on 20 papers.',
            href: '/research',
            meta: 'abandoned',
          },
        ],
        notes: [],
      },
      {
        title: 'Expertise structure',
        description:
          'Trying to understand why great engineers see the same problem differently before they can explain why.',
        status: 'exploring',
        duration: 'open',
        projects: [],
        experiments: [],
        notes: [
          {
            title: 'The structure of expertise',
            description:
              'A live curiosity file on tacit knowledge, judgment, and whether it can be transferred.',
            href: '/curious',
            meta: 'curious',
          },
        ],
      },
    ],
  },
  {
    id: 'v4-0',
    version: 'v4.0',
    title: 'Builder era',
    description:
      'Shipping products, thinking about systems at scale, still asking too many questions.',
    tags: ['Next.js', 'distributed systems', 'product'],
    branches: [
      {
        title: 'Developer systems',
        description:
          'Tools that reduce context reconstruction and make teams faster without pretending humans are optional.',
        status: 'active',
        duration: 'now',
        defaultOpen: true,
        projects: [
          {
            title: 'Diffpulse',
            description:
              'Real-time code review assistant that cut review time by 40% across three teams.',
            href: '/built/diffpulse',
            meta: 'built',
          },
        ],
        experiments: [],
        notes: [],
      },
      {
        title: 'Idea propagation',
        description:
          'Why some ideas spread while better ones die. Not just quality, not just truth, something about carrier fit.',
        status: 'exploring',
        duration: 'open',
        projects: [],
        experiments: [],
        notes: [
          {
            title: 'Why do some ideas spread and others die?',
            description:
              'A second-brain thread on transmission, institutions, and the strange survival function of ideas.',
            href: '/curious',
            meta: 'curious',
          },
        ],
      },
    ],
  },
  {
    id: 'v5-0',
    version: 'v5.0',
    title: '???',
    description:
      'In progress. The next major version is still compiling, which is either exciting or suspicious.',
    tags: [],
    inProgress: true,
    branches: [
      {
        title: 'Unreleased branch',
        description:
          'Open to problems that would justify a major version bump.',
        status: 'active',
        duration: 'HEAD',
        projects: [],
        experiments: [],
        notes: [
          {
            title: 'Contact',
            description:
              'Best entry point if you have a problem, research thread, or odd little tool idea worth chasing.',
            href: '/contact',
            meta: 'ping',
          },
        ],
      },
    ],
  },
]

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="space-y-5 pt-4">
        <div>
          <h1 className="mb-3 text-3xl font-medium tracking-tight text-text">
            Om Deshmukh
          </h1>
          <p className="text-xl italic leading-snug text-dim">
            Still becoming something interesting.
          </p>
        </div>
        <p className="max-w-xl leading-relaxed text-muted">
          I don&apos;t have a 10-year plan. I follow interesting problems and
          occasionally get obsessed with them. This is the commit graph.
        </p>
      </section>

      <Timeline versions={versions} />
    </div>
  )
}
