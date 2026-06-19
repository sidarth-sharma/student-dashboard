export default function ActivityCard() {

  const activity = [

    1,1,1,0,1,0,1,

    0,1,1,1,0,1,0,

    1,0,1,1,1,0,1,

    0,1,0,1,1,1,0

  ]

  return (

    <article

      className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"

    >

      <h3

        className="text-white text-xl font-bold"

      >

        Activity

      </h3>


      <section

        className="grid grid-cols-7 gap-2 mt-6"

      >

        {

          activity.map((day,index)=>(

            <section

              key={index}

              className={

                day===1

                ?

                "w-6 h-6 rounded bg-white"

                :

                "w-6 h-6 rounded bg-zinc-700"

              }

            />

          ))

        }

      </section>


      <p

        className="text-zinc-400 mt-6"

      >

        Last 30 Days

      </p>

    </article>

  )

}