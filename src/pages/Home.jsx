import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../request"

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowId={1} title='Up Coming' fetchUrl={requests.requestUpcoming} />
        <Row rowId={2} title='Trending' fetchUrl={requests.requestTrending} />
        <Row rowId={3} title='Top Rated' fetchUrl={requests.requestTopRated} />
        <Row rowId={4} title='TV Show' fetchUrl={requests.requestTVShows} />
    </>
  )
}

export default Home
