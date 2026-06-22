import {

LayoutDashboard,

BookOpen,

Settings

}

from "lucide-react"


export default function Sidebar(){

return(

<nav

className="
bg-zinc-900
rounded-3xl
p-6
border
border-zinc-800
h-fit
md:sticky
md:top-6
"

>

<h2

className="
text-white
text-2xl
font-bold
mb-10
"

>

LearnX

</h2>


<ul

className="
space-y-8
"

>

<li

className="
text-zinc-300
flex
items-center
gap-3
"

>

<LayoutDashboard />

Dashboard

</li>


<li

className="
text-zinc-300
flex
items-center
gap-3
"

>

<BookOpen />

Courses

</li>


<li

className="
text-zinc-300
flex
items-center
gap-3
"

>

<Settings />

Settings

</li>


</ul>

</nav>

)

}