export default function Loading() {

  return (

    <main

      className="min-h-screen bg-zinc-950 p-6"

    >

      <section

        className="animate-pulse"

      >

        <section

          className="
          h-12
          w-72
          bg-zinc-800
          rounded-xl
          "

        />

        <section

          className="
          mt-8
          h-48
          bg-zinc-900
          rounded-3xl
          "

        />

        <section

          className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "

        >

          {

            [1,2,3,4].map((item)=>(

              <section

                key={item}

                className="
                h-56
                bg-zinc-900
                rounded-3xl
                "

              />

            ))

          }

        </section>

      </section>

    </main>

  )

}