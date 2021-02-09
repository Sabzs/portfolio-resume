import React from 'react';

function PortMenu({ menuItem }) {

  return (

    <div className="portMenu" >

      {menuItem.map((item) => {
        return <div className="portMenu__menu-list" key={item.id}>

          <div className="portMenu__menu-items" >
            <img className="portMenu__port-thumb" src={item.image} alt="" />
            <ul className="portMenu__hover-items" id="hover-items">
              <li >
                <a href={item.link1} >{item.icon1}</a>
                <a href={item.link2} >{item.icon2}</a>
              </li>
            </ul>

          </div>
          <h5 className="portMenu__item-title" >{item.title}</h5>

          <p className="portMenu__port-description" >
            Place-holder for short description of porfolio!!
            </p>
        </div>
      })}

    </div>
  )
}

export default PortMenu;




//======================================================//

