import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FilteringMenu = ({onChange, filter}) => {

    return (
        <div className="filtering-menu mb-2">
            <FontAwesomeIcon 
                className='clickable hoverable mr-3'
                size='2x'
                icon={filter.view.list ? 'border-all' : 'list'}
                onClick={() => onChange('view', {list: +!filter.view.list})} 
            />
            <FontAwesomeIcon
                className='clickable hoverable'
                size='2x'
                icon={!filter.order ? 'sort-alpha-down' : 'sort-alpha-up'}
                onClick={() => onChange('order', +!filter.order)}
            />
        </div>
    )
}

export default FilteringMenu;