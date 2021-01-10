import React from "react";
import './TableData.css'
import SubstitutesPopUp from './SubstitutesPopUp'

class TableData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleIngredients: [
                {Possess: 'yes', ingredient: 'Flour'},
                {Possess: 'no', ingredient: 'Eggs'},
                {Possess: 'no', ingredient: 'Chicken'}
            ],
            title : ['Test title']
        }
    }
    
    renderTableContent(){

        return this.state.singleIngredients.map((singleIngredient, index) =>{
            const {Possess, ingredient} = singleIngredient
            return(
                <tr key={ingredient}> 
                    <td>{Possess}</td>
                    <td>{ingredient}</td>
                    <SubstitutesPopUp/>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.singleIngredients[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    
    render() {
        const {title} = this.state;

        return (
            <div className="ingredient-data">
                <h3 id="title">{title}</h3>
                <table id='ingredients'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableContent()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TableData;