import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading}/>
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                    Tired of browsing the entire web for a course only to know that it doesn't exist or is very pricy. Here at cSelect, you can find any course and that too at affordable price. Customer satisfaction is our first priority. Have a smooth learning experience by shopping at world's best ecom website, cSelect. Happy learning!!  
                </p>
                <Link to="/about/">
                    <button className="btn
                    btn-warning btn-lg">
                        {heading}
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
