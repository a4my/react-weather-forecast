import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LondonImage from '../public/images/london.jpg'
import NewYorkImage from '../public/images/new-york.jpg'
import ParisImage from '../public/images/paris.jpg'
import TokyoImage from '../public/images/tokyo.jpg'
import SydneyImage from '../public/images/sydney.jpg'
import CapeTownImage from '../public/images/cape-town.jpg'
import AucklandImage from '../public/images/auckland.jpg'
import RioDeJaneiroImage from '../public/images/rio-de-janeiro.jpg'
import RomeImage from '../public/images/rome.jpg'
import MontrealImage from '../public/images/montreal.jpg'
import StockholmImage from '../public/images/stockholm.jpg'
import MoscowImage from '../public/images/moscow.jpg'

const places = [
  {
    name: 'London',
    image: LondonImage,
    url: '/location/london-2643743'
  },
  {
    name: 'New York',
    image: NewYorkImage,
    url: '/location/new-york-5128638'
  },
  {
    name: 'Paris',
    image: ParisImage,
    url: '/location/paris-2988506'
  },
  {
    name: 'Tokyo',
    image: TokyoImage,
    url: '/location/tokyo-1850147'
  },
  {
    name: 'Sydney',
    image: SydneyImage,
    url: '/location/sydney-2147714'
  },
  {
    name: 'Cape Town',
    image: CapeTownImage,
    url: '/location/cape-town-3369157'
  },
  {
    name: 'Auckland',
    image: AucklandImage,
    url: '/location/auckland-2193732'
  },
  {
    name: 'Rio De Janeiro',
    image: RioDeJaneiroImage,
    url: '/location/rio-de-janeiro-3451189'
  },
  {
    name: 'Rome',
    image: RomeImage,
    url: '/location/rome-3169070'
  },
  {
    name: 'Montreal',
    image: MontrealImage,
    url: '/location/montreal-lake-6077260'
  },
  {
    name: 'Stockholm',
    image: StockholmImage,
    url: '/location/stockholm-2673722'
  },
  {
    name: 'Moscow',
    image: MoscowImage,
    url: '/location/moscow-524894'
  }
]

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
