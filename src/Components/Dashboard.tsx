import CardOne from './Home-Content/CardOne'
import CardTwo from './Home-Content/CardTwo'
import CardThree from './Home-Content/CardThree'
import CardFour from './Home-Content/CardFour'
import CardFive from './Home-Content/CardFive'
import CardSix from './Home-Content/CardSix'

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
