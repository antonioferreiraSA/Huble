import CardOne from './Home-Content/WhoWeAreCard'
import CardTwo from './Home-Content/YouCanDoCard'
import CardThree from './Home-Content/TitleCard'
import CardFour from './Home-Content/YouCanGrowCard'
import CardFive from './Home-Content/InspiredCard'
import CardSix from './Home-Content/ValuedCard'

export default function Dashboard() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <CardOne />
        <CardThree />
        <CardTwo />
        <CardFour />
        <CardFive />
        <CardSix />
      </div>
    </>
  )
}
