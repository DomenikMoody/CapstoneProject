import { NavLink, useHistory, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import "./SearchResults.css"
import { useEffect } from "react"
import { getAllVideosThunk } from '../../store/videos';

function SearchResults() {
  const params = useParams()
  const dispatch = useDispatch()
  const query = params["search"]
  const allVideos = useSelector(state => state.video)
  const allVideoArray = Object.values(allVideos)
  const searchedAnime = allVideoArray.filter((anime) => {
    if (query.length === 0) {
        return anime
    }
    else if (
      anime?.title?.toLowerCase().includes(query?.toLowerCase()) ||
      anime?.aboutVideo?.toLowerCase().includes(query?.toLowerCase()) ||
      anime?.artist?.toLowerCase().includes(query?.toLowerCase()) ||
      anime?.genre?.toLowerCase().includes(query?.toLowerCase())
    )
      return anime;
  });

  useEffect(() => {
    dispatch(getAllVideosThunk())
  }, [dispatch])

  return (
    <div className="EntireSearchpage">
      <div className="titletoSearchPage">
        <h1>Search Results</h1>
      </div>
      <div className="SearchResultsContainer">
        {searchedAnime.length > 0 ? (
          searchedAnime.map(Anime => (
            <NavLink className="navlink" to={`/video/${Anime.id}`} key={Anime.id}>
              <div className="SearchAnimeCard">
                <div>
                  <img className="SearchAnimeimage" src={Anime.videoImage} alt={Anime.title} />
                </div>
                <div className="SearchAnimeCardInfo">
                  <div className="SearchAnimeTitle">
                    {Anime.title}
                  </div>
                  <div>
                    Studio: {Anime.artist}
                  </div>
                  <div>
                    Description: {Anime.aboutVideo}
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div className="NoResultsMessage">No results for that search. Please try again.</div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
