'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/spotlight'
import { Magnetic } from '@/components/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/animated-background'
import { WORK_EXPERIENCE, EDUCATIONS, SKILLS, SOCIAL_LINKS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="mb-2 text-zinc-600 dark:text-zinc-400">
            I have over 5 years of hands-on experience developing and
            maintaining projects, from large-scale government tax automation
            systems to modern web platforms. My expertise includes JavaScript,
            TypeScript, React, and other modern technologies, ensuring scalable
            and efficient solutions.
          </p>
          <p className="mb-2 text-zinc-600 dark:text-zinc-400">
            I am committed to meeting deadlines and embracing challenges with a
            solution-oriented mindset. Before jumping to solutions, I prioritize
            deeply understanding problems to ensure the best possible outcome.
          </p>
          <p className="mb-2 text-zinc-600 dark:text-zinc-400">
            Programming isn’t just my job - it’s my passion, I love what I do.
            If you're looking for someone who integrates technical expertise
            with business-oriented solutions, let’s connect!
          </p>
          <a href="CV_Zakir_Maharramov.pdf" target="_blank">
            <span>&darr; Download CV</span>
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={job.id}
            >
              <Spotlight
                className="blur-4xl from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-medium dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.location}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
                <h4 className="mt-4 font-thin dark:text-zinc-100">
                  {job.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {EDUCATIONS.map((education) => (
              <div
                key={education.id}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={education.id}
                style={{ cursor: 'default' }}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-medium dark:text-zinc-100">
                    {education.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {education.description}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {education.date}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Skills</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={skill.id}
                style={{ cursor: 'default' }}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-medium dark:text-zinc-100">
                    {skill.title}
                  </h4>
                  <pre className="text-zinc-500 dark:text-zinc-400">
                    {skill.description}
                  </pre>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-1 flex items-center text-zinc-600 dark:text-zinc-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M6.62 10.79C7.06 12.17 7.94 13.44 9.17 14.67C10.4 15.9 11.67 16.78 13.05 17.22C13.56 17.38 14.12 17.38 14.64 17.22C15.16 17.06 15.61 16.71 15.95 16.26L17.07 14.82C17.32 14.49 17.74 14.36 18.1 14.48C19.79 15.02 21.27 15.9 22.54 17.13C22.89 17.48 22.94 18.05 22.65 18.46L20.36 21.53C20.07 21.94 19.6 22.12 19.16 22.04C14.34 21.14 9.98 18.68 6.34 15.04C2.7 11.4 0.24 7.04 -0.66 2.22C-0.74 1.78 -0.56 1.31 -0.15 1.02L2.92 -1.27C3.33 -1.56 3.9 -1.51 4.25 -1.16C5.48 0.11 6.36 1.59 6.9 3.28C7.02 3.64 6.89 4.06 6.56 4.31L5.12 5.43C4.67 5.77 4.32 6.22 4.16 6.74C4 7.26 4 7.82 4.16 8.34C4.6 9.72 5.48 10.99 6.62 10.79Z"
              fill="currentColor"
            />
          </svg>
          <span>(+994) 70 266 33 60</span>
        </p>
        <p className="mb-1 flex items-center text-zinc-600 dark:text-zinc-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
              fill="currentColor"
            />
          </svg>
          <span>zakir.mhv@gmail.com</span>
        </p>
        <p className="mb-5 flex items-center text-zinc-600 dark:text-zinc-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
          <span>Baku, Azerbaijan</span>
        </p>
        <br />
        <div className="flex flex-col justify-start gap-4 space-x-3 md:flex-row md:items-center md:gap-0">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
