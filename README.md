
# PokeApp

Dependencies: \
npm \
\
To Run (terminal actions): \
git clone https://github.com/RaeVector/PokeApp.git \
cd PokeApp \
npm install \
npm run build \
npm run start \ 
\
Discusion: \
I assumed that using next.js would be similar to how I've used React before, but it took some getting used to the \
layout that it uses. \
Tried to keep things as modular as possible, but had some trouble modularising the page turning buttoms. \
I'm particularly proud of the automatic colour picker for each pokemon.\
It had also been quite a long time since I had use React so I had to get used to using state variables and things \
like that again but overall I found the process to be quite enjoyable actually. \
\
Second Run: \
Secondary pokemon details page: done \
Search functionality: done \
Eventually settled on sending props to pokemon details page via the url.  Took a lot of time to get the bar char \
working, because it turns out you have to use a dynamic load of apexcharts for it to work with NextJS - kept getting \
a "window is undefined" error and took some searching to realise apexcharts is often the culprit for that.\
Very annoying because it will run in dev absolutely fine, and then fail on build. \
The search functionality returns a result as soon as you type the full name of a pokemon. 



