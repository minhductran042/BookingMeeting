
    import React from 'react'
    import ProductionMenu from './ProductionMenu/ProductionMenu'
    import SolutionsMenu from './SolutionsMenu'
    import ResourcesMenu from './ResourcesMenu'
    import Pricing from './Pricing'
    import styles from './NavMenu.module.css'

    const NavMenu = ({active, onMouseEnter}) => {

    return (
        <div className={styles.category}>
            <div onMouseEnter={() => onMouseEnter('production')}>
                <ProductionMenu active={active}/>
            </div>
            <div onMouseEnter={() => onMouseEnter('solutions')}>
                <SolutionsMenu active={active} />
            </div>
            <div onMouseEnter={() => onMouseEnter('resources')}>
                <ResourcesMenu active={active} />
            </div>
            <div>
                <Pricing />

            </div>
        </div>
    )
    }

    export default NavMenu