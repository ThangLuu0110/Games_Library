import React from "react";
import { Link } from "react-router-dom";
import { categoryList } from "../../Block/const/const";

interface HomePageProps {
    handleActiveTab: (e: any) => void;
}
export default function HomePage({ handleActiveTab }: HomePageProps) {
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
                                    <h1>{`${category.categoryName} Game`}</h1>
                                    <p>
                                        <b>Defination:</b> {category.defination}
                                        <br />
                                        <br />
                                        <b>Games: </b> {category.games}
                                    </p>
                                    <button 
                                        onClick={() => {handleActiveTab('Games')}}
                                    >
                                        <Link to="/games">
                                            Click
                                        </Link>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
} 