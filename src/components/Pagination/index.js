import React from "react"
import * as Style from "./styled"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function Pagination({
  isFirst,
  isLast,
  currentPage,
  total,
  prevPage,
  nextPage,
}) {
  return (
    <Style.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>← página anterior</Link>}
      {currentPage} de {total}
      {!isLast && <Link to={nextPage}>próxima página →</Link>}
    </Style.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
