export default function HeroCard({ totalCourses }) {

  return (

    <section

      className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-800"

    >

      <h2

        className="text-4xl font-bold text-white"

      >

        Welcome Back

      </h2>


      <section

className="mt-4"

>

<p

className="text-zinc-400"

>

Keep learning every day.

</p>

<p

className="text-orange-400 mt-3 font-semibold"

>

Daily Streak: 7 Days

</p>

</section>


      <p

        className="text-zinc-300 mt-8 text-lg"

      >

        {totalCourses} Courses Available

      </p>

    </section>

  )

}