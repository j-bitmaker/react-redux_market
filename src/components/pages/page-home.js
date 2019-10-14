import React from 'react';
import { Link } from 'react-router-dom'
import ItemList from '../item-list';
import CountBar from '../count-bar';
const PageHome = () =>{

    return (
        <div>
                It's Home Page, my dear friend :)
                <br/>
                    <ItemList/>
                <div>
                    <CountBar/>
                </div>
        </div>
  )
}
export default PageHome;