import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoblock({heading}) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
            <div className="col-8 mx-auto">
                <p className="lead text-white b-5">
                    With one of the best competitive teams in the world, cSelect aims to make a significant difference to your learning experience. I have noticed a gap in the market when it came to online courses. Courses are either missing or very expensive. The main objective of developing cSelect is to provide good-quality,  affordable courses to customers. We at cSelect are very particular about customer experience and take their feedback seriously. Happy shopping!!
                </p>
            </div>
            <div className="col-4">
            <div className="card bg-dark">
  <img src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=400" className="card-img-top" alt="image goes here"/>
  <div className="card-body">
    <h5 className="card-title text-success">Card title</h5>
    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-warning btn-block">{heading}</a>
  </div>
</div>
            </div>
        </div>
      </div>
    </section>
  )
}
