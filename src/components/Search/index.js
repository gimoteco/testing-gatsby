import React from "react"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import * as Style from "./styled"
import Hit from "./Hit"

const algoliaConfig = {
  id: process.env.GATSBY_ALGOLIA_APP_ID,
  searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}
const searchClient = algoliasearch(algoliaConfig.id, algoliaConfig.searchKey)

function Search() {
  return (
    <Style.SearchWrapper>
      <InstantSearch
        searchClient={searchClient}
        indexName={algoliaConfig.indexName}
      >
        <SearchBox
          autoFocus
          translations={{
            placeholder: "Pesquisar...",
          }}
        />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs} ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Style.SearchWrapper>
  )
}

export default Search
