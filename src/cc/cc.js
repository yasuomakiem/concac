import React from "react";
import clsx from "clsx";
import style from '../cc.module.css'
class Cc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Son: [  
                {name: 'son' , status: false}              
            ],
            item:'',
            check:-1

            
        }
    } 
    // concac = this.state.Son.status;
    getValue(e){
        this.setState({ item: e.target.value})
       
    }   
    cc(e){
        let list = this.state.Son;
        list.push({name:this.state.item , status: Boolean(Math.round(Math.random())) })
        this.setState({
            Son: list
        }) 
        
    } 
    upDate(e,key){
        this.setState({
            check:key,
            item: e.target.value
        })

    } 
    updateName(e){
        let list = this.state.Son
        list.find((item, index) => {
            return index == this.state.check
        }).name = this.state.item;
        this.setState({
            Son: list,
            check:-1
        })
    } 
    delete(e,index){
        let list = this.state.Son;
        list.splice(index,1)
        this.setState({
            Son: list
        })
    }
    render() { 
        return ( 
            <>
            <input onChange={(e) => this.getValue(e)} type="text"/>
            <button onClick={(e) => this.cc(e)}>+</button>
            <table border={1} >
                     <thead>
                    <tr>
                        <td></td>
                        <td>STT</td>
                        <td>Ten</td>
                        <td>Trang thai</td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </thead>
                {
                    this.state.Son.map((item,index)=> {
                        
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>{index +1}</td>
                                    {(this.state.check == index) ?
                                        <td><input defaultValue={item.name} onChange={(e) => this.getValue(e)} onBlur={(e) => this.updateName(e)} type="text"/></td>
                                        :
                                        <td className="red">{item.name}</td>
                                    }
                                    
                                    <td><button onClick={(e) => this.upDate(e,index)}    className="c">Update</button></td>
                                    <td className={(item.status) ? style.green : style.red}>•</td>   
                                    <td><button onClick={(e) => this.delete(e,index)} className="c">X</button></td>
                                </tr>
                                
                                               
                            
                            </tbody>
                           
                        )
                        
                        
                    })
                }
            </table>
            </>
         );
    }
}
 
export default Cc;
