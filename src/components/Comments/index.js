import React from "react"
import * as Style from "./styled"
import ReactDisqusComments from "react-disqus-comments"
import PropTypes from "prop-types"

function Comments({ url, title }) {
  const completeUrl = `https://willianjusten.com.br${url}`
  return (
    <Style.CommentsWrapper>
      <Style.CommentsTitle>Comentários</Style.CommentsTitle>
      <ReactDisqusComments
        shortname="willianjusten"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </Style.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
