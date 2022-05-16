import React from "react";
import { categoryList } from "../../Block/const/const";

export default function HomePage(){
    const categoryListName: Array<any> = categoryList;

    return (
        <div className="content grid wide">
            <div className="content__homepage grid">
               <div className="content__homepage-title">
                   <h1> CATEGORY </h1>
               </div>
               <ul className="content__homepage-category-list">
                   {
                       categoryListName.map(category => (
                           <li key={category.index} className="category-item">
                               <img src={category.image} alt="" />
                               <div className="category-item__info">
                                   
                               </div>
                           </li>
                       ))
                   }
               </ul>
            </div>
        </div>
    )
} 