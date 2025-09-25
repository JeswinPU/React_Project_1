import React from 'react'
import '../styles/Home.css'
import { useLocation } from 'react-router-dom'
const Home = () => {


  let loc = useLocation()
  let adminAccess = loc.pathname.startsWith('/adminportal')

  return (
    <center>
      <div id='Home'>
        <h1>HOME</h1>
        {(adminAccess) ? (<>
          <h2>WELCOME TO THE E-LIBRARY ADMIN</h2>
          <h2>WHAT DO YOU WISH TO DO?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptatem minus ipsam eius esse excepturi nostrum aspernatur alias expedita officia quos inventore repellendus nemo, iste repellat, velit asperiores, ipsa iusto soluta! Suscipit corporis alias reprehenderit quidem praesentium, est placeat officiis perspiciatis cum recusandae aperiam ipsa sapiente voluptatem iusto aspernatur laborum maxime nisi hic quasi, ex at excepturi? Esse, odit dolore reiciendis provident accusantium harum quo consequatur quisquam temporibus alias vero. Pariatur blanditiis illum quis? Quis, magnam! Magni cupiditate eius quia amet aliquid recusandae vero ut beatae omnis possimus harum eligendi aperiam nulla excepturi pariatur voluptates, sequi eos reiciendis minima quae ducimus perferendis sunt. Ullam aliquam dolorum quos debitis earum autem dolores corrupti, ducimus rem veniam aperiam voluptatem alias nisi numquam officiis fugiat quae blanditiis delectus quod veritatis! Molestiae similique eos alias ex pariatur eveniet. Maiores nisi porro hic natus facilis magnam omnis ex itaque. Sed atque eius debitis modi perspiciatis perferendis, velit similique, architecto adipisci voluptate aliquam eos sapiente odit reiciendis! Laudantium quos possimus natus autem recusandae suscipit rerum cumque eos, deleniti eius facere, architecto modi, tempora officiis amet odio ut magnam reiciendis numquam. Reiciendis, assumenda totam ipsam quae iure fuga esse praesentium fugit distinctio non deleniti dolor aliquam. Aspernatur veniam odio soluta magni optio et adipisci aliquam facere laboriosam ea alias itaque, animi ut! Reiciendis, ut. Similique reiciendis quas animi aspernatur dolorum ratione magni consectetur facere molestiae officiis. Illum eveniet dolore deserunt. Facilis corrupti ex placeat veniam earum ut quae, obcaecati et laudantium itaque reprehenderit quo laborum iste eius autem ratione? Modi esse iure eos voluptatibus adipisci placeat culpa dicta distinctio alias quae sunt quibusdam debitis iusto fugiat, nesciunt suscipit molestiae minus laudantium animi sapiente saepe. Voluptatem soluta fugiat ea, repellat non qui nesciunt voluptate accusantium id nulla. Ullam laborum dignissimos a. Enim deserunt ipsum neque expedita accusantium.</p>
        </>) : (<>
          <h2>WELCOME TO THE E-LIBRARY USER</h2>
          <h2>WHAT DO YOU WISH TO DO?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptatem minus ipsam eius esse excepturi nostrum aspernatur alias expedita officia quos inventore repellendus nemo, iste repellat, velit asperiores, ipsa iusto soluta! Suscipit corporis alias reprehenderit quidem praesentium, est placeat officiis perspiciatis cum recusandae aperiam ipsa sapiente voluptatem iusto aspernatur laborum maxime nisi hic quasi, ex at excepturi? Esse, odit dolore reiciendis provident accusantium harum quo consequatur quisquam temporibus alias vero. Pariatur blanditiis illum quis? Quis, magnam! Magni cupiditate eius quia amet aliquid recusandae vero ut beatae omnis possimus harum eligendi aperiam nulla excepturi pariatur voluptates, sequi eos reiciendis minima quae ducimus perferendis sunt. Ullam aliquam dolorum quos debitis earum autem dolores corrupti, ducimus rem veniam aperiam voluptatem alias nisi numquam officiis fugiat quae blanditiis delectus quod veritatis! Molestiae similique eos alias ex pariatur eveniet. Maiores nisi porro hic natus facilis magnam omnis ex itaque. Sed atque eius debitis modi perspiciatis perferendis, velit similique, architecto adipisci voluptate aliquam eos sapiente odit reiciendis! Laudantium quos possimus natus autem recusandae suscipit rerum cumque eos, deleniti eius facere, architecto modi, tempora officiis amet odio ut magnam reiciendis numquam. Reiciendis, assumenda totam ipsam quae iure fuga esse praesentium fugit distinctio non deleniti dolor aliquam. Aspernatur veniam odio soluta magni optio et adipisci aliquam facere laboriosam ea alias itaque, animi ut! Reiciendis, ut. Similique reiciendis quas animi aspernatur dolorum ratione magni consectetur facere molestiae officiis. Illum eveniet dolore deserunt. Facilis corrupti ex placeat veniam earum ut quae, obcaecati et laudantium itaque reprehenderit quo laborum iste eius autem ratione? Modi esse iure eos voluptatibus adipisci placeat culpa dicta distinctio alias quae sunt quibusdam debitis iusto fugiat, nesciunt suscipit molestiae minus laudantium animi sapiente saepe. Voluptatem soluta fugiat ea, repellat non qui nesciunt voluptate accusantium id nulla. Ullam laborum dignissimos a. Enim deserunt ipsum neque expedita accusantium.</p>
        </>)}
      </div>
    </center>
  )
}

export default Home
