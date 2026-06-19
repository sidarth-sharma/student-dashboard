import { supabase } from "@/lib/supabase"

import Sidebar from "@/components/Sidebar"

import HeroCard from "@/components/HeroCard"

import CourseCard from "@/components/CourseCard"

import ActivityCard from "@/components/ActivityCard"


export default async function Page() {

  const { data: courses, error } =

  await supabase

    .from("courses")

    .select("*")


  if (error) {

    return (

      <main className="min-h-screen bg-zinc-950 text-white p-6">

        Something went wrong while loading courses.

      </main>

    )

  }


  return (

    <main

      className="min-h-screen bg-zinc-950 p-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6"

    >

      <Sidebar />


      <section className="grid gap-6">

        <h1

          className="text-white text-4xl font-bold"

        >

          Student Dashboard

        </h1>


        <HeroCard

          totalCourses={courses?.length || 0}

        />

        <ActivityCard />


        <section

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"

        >

          {

            courses.map((course,index)=>(

            <CourseCard

            key={course.id}

            title={course.title}

            progress={course.progress}

            iconName={course.icon_name}

            delay={index * 0.1}

            />

            ))

          }

        </section>

      </section>

    </main>

  )

}