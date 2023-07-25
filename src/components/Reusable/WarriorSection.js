import React from 'react'

export default function WarriorSection({img, title, subtitle, heroclass}) {
  return (
    <div
    className={heroclass}
    fluid={img}
    >
        <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
        <div>
            <h4 className="text-warning">{subtitle}</h4>
        </div>
    </div>
  )
}