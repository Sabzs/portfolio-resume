import React, { useState } from 'react';
import PortCategories from '../Components/Portfolio/PortCategories';
import PortMenu from '../Components/Portfolio/PortMenu';
import Portfolios from "../Components/Portfolio/PortfolioList"
import Title from '../Components/Title';



const categoryList = ["All", ...new Set(Portfolios.map(item => item.category))]

function PortfolioPage() {
  const [categories] = useState(categoryList);
  // const [categories,setCategories] = useState(categoryList);
  const [menuItems, setMenuItems] = useState(Portfolios);


  const filter = (category) => {
    if (category === "All") {
      setMenuItems(Portfolios)
      return;
    }
    const filteredData = Portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData)
  }



  return (
    <div className="portfolioPage" >

      <div className="portfolioPage__porfolio-title">
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>

      <div className="portfolioPage__porfolio-content" >
        <PortCategories filter={filter} categories={categories} />
        <PortMenu menuItem={menuItems} />
      </div>




    </div>
  )
}
export default PortfolioPage;
