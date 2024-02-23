import { useEffect, useState } from 'react'
import './App.css'

import { Article } from '../utils/types'
import { buildGuardianContentAPI } from '../utils/helpers'

function App() {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (searchQuery) {
      fetch(buildGuardianContentAPI(searchQuery))
        .then(response => response.json())
        .then(data => {
          setArticles(data.response.results)
        })
    } else {
      setArticles([])
    }
  }, [searchQuery])

  return (
    <>
      <div className='search-query-container'>
        <label className='search-query-label' htmlFor="search-query">Search Query</label>
        <input
          className='search-query-label'
          id="search-query"
          name="search-query"
          aria-label="search-query"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} placeholder="Search Query"
        />
      </div>
      <div className='article-list'>
        {articles.map(article =>
          <div className='article-item'>
            <p className='article-item-title'>{article.webTitle}</p>
          </div>
        )}
      </div>
    </>
  )
}
export default App
