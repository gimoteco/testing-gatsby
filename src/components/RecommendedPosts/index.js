import React from "react"
import * as Style from "./styled"
import PropTypes from "prop-types"

function RecommendedPosts({ next, previous }) {
  return (
    <Style.RecommendedWrapper>
      {previous && (
        <Style.RecommendedLink
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          to={previous.fields.slug}
          className="previous"
        >
          {previous.frontmatter.title}
        </Style.RecommendedLink>
      )}
      {next && (
        <Style.RecommendedLink
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
          to={next.fields.slug}
          className="next"
        >
          {next.frontmatter.title}
        </Style.RecommendedLink>
      )}
    </Style.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
