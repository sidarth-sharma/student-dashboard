"use client"

import { BookOpen, Monitor, Database, Code } from "lucide-react"

import { motion } from "framer-motion"

const icons = {

  BookOpen,

  Monitor,

  Database,

  Code

}

export default function CourseCard({

title,

progress,

iconName,

delay

}) {

  const Icon = icons[iconName] || BookOpen

  return (

    <motion.article

    initial={{

opacity: 0,

y: 20

}}

animate={{

opacity: 1,

y: 0

}}

transition={{

type: "spring",

stiffness: 300,

duration: 0.5,

delay

}}

whileHover={{

scale:1.02,

y:-8

}}


className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"

>

      <Icon

        className="text-white mb-4"

      />

      <h3

        className="text-white font-bold text-xl"

      >

        {title}

      </h3>

      <p

        className="text-zinc-400 mt-3"

      >

        Progress

      </p>

      <p

        className="text-white text-3xl font-bold mt-2"

      >

        {progress}%

      </p>

      <section

        className="mt-4 h-3 bg-zinc-800 rounded-full overflow-hidden"

      >

        <motion.section

          initial={{ width: 0 }}

          animate={{ width: `${progress}%` }}

          transition={{ duration: 1 }}

          className="h-full bg-white rounded-full"

        />

      </section>

    </motion.article>

  )

}