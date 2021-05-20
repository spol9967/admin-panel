import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
    return (
        <header className='header'>
            <div>
            <h1>{title}</h1>
            <h3>Product list</h3>
            </div>
            <Button text="Add" color='#14693D' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default',
}

Header.propTypes = {
    title: PropTypes.string.isRequired ,
}

export default Header
