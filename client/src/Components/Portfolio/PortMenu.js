import React from 'react';

function PortMenu({ menuItem }) {

  return (
    <div className="portMenu" >

      {menuItem && menuItem.map((item) => {
        return (
          <div className="portMenu__menu-list" key={item.id} >
            <div className="portMenu__project-thumb" >
              <img src={item.image} alt="project-thumb" />
            </div>

            <div className="portMenu__project-content" >
              <div className="portMenu__project-title-website" >
                <div className="portMenu__project-name project-name-hover">
                  <h4>{item.title}</h4>
                </div>
                <div className="portMenu__project-website project-website-hover" >
                  <a href={item.link1} >{item.icon1}</a>
                </div>
              </div>

              <div className="portMenu__project-description" >
                <p>{item.description}</p>
              </div>

              {item.techStacks && item.techStacks.map((stacks, id) => {
                return (
                  <div className="portMenu__project-stacks stack-hover-color" key={id} >
                    <h4>{stacks.stack1}</h4>
                    <h4>{stacks.stack2}</h4>
                    <h4>{stacks.stack3}</h4>
                    <h4>{stacks.stack4}</h4>
                    <h4>{stacks.stack5}</h4>
                    <h4>{stacks.stack6}</h4>
                    <h4>{stacks.stack7}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default PortMenu;

