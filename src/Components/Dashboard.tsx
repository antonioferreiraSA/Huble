import React from 'react'
import { useSpring, animated } from 'react-spring'
import CardOne from './Home-Content/WhoWeAreCard'
import CardTwo from './Home-Content/YouCanDoCard'
import CardThree from './Home-Content/TitleCard'
import CardFour from './Home-Content/YouCanGrowCard'
import CardFive from './Home-Content/InspiredCard'
import CardSix from './Home-Content/ValuedCard'

const AnimatedCard = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 120, friction: 40 },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default function Dashboard() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <AnimatedCard>
          <CardOne />
        </AnimatedCard>
        <AnimatedCard>
          <CardThree />
        </AnimatedCard>
        <AnimatedCard>
          <CardTwo />
        </AnimatedCard>
        <AnimatedCard>
          <CardFour />
        </AnimatedCard>
        <AnimatedCard>
          <CardFive />
        </AnimatedCard>
        <AnimatedCard>
          <CardSix />
        </AnimatedCard>
      </div>
    </>
  )
}
