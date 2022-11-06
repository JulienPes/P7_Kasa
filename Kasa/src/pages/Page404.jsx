import React from 'react'
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" >Retourner sur la page d'acceuil</Link>
    </section>
  )
}

export default Page404