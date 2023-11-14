// @ts-nocheck
import PropTypes from 'prop-types'

export const ComponentsWithChildren = ({title, children}) => {
  return (
    <div>
      <h1 className='title-heading'>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

ComponentsWithChildren.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}