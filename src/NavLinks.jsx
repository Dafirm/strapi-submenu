import React from 'react'
import { useGlobalContext } from "./Context";
import sublinks from './data';

const NavLinks = () => {
    const {setPageId} = useGlobalContext();
  return (
    <div className='nav-links'>
        {sublinks.map((item) => {
            const {pageId, page} = item;
            return(
                <button key={pageId} onMouseEnter={() => setPageId(pageId)} className='nav-link'>
                    {page}
                </button>
            )
        })

        }

    </div>
  )
}

export default NavLinks