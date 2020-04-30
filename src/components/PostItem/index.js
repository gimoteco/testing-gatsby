import React from "react"
import * as Style from "./styled"
import PropTypes from "prop-types"

function PostItem({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  background,
}) {
  return (
    <Style.PostItemLink
      to={slug}
      cover
      bg="var(--background)"
      duration={0.6}
      direction="right"
    >
      <Style.PostItemWrapper>
        <Style.PostItemTag background={background}>
          {category}
        </Style.PostItemTag>
        <Style.PostItemInfo>
          <Style.PostItemDate>
            {date} - {timeToRead} minutos de leitura
          </Style.PostItemDate>
          <Style.PostItemTitle>{title}</Style.PostItemTitle>
          <Style.PostItemDescription>{description}</Style.PostItemDescription>
        </Style.PostItemInfo>
      </Style.PostItemWrapper>
    </Style.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
