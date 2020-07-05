import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FilteringMenu = ({onChange, filter}) => {

    return (
        <div className="filtering-menu mb-2">
            <FontAwesomeIcon 
                className='clickable hoverable'
                size='2x'
                icon={filter.view.list ? 'border-all' : 'list'}
                onClick={() => onChange('view', {list: +!filter.view.list})} 
            />
        </div>
    )
}

export default FilteringMenu;