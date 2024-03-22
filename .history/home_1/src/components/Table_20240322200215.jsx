import { Fragment } from 'react';
import  './style.css';
import './carsTable.html';


const  Table=({brand,models})=>{

    return
    <>
    < div>
    <tr classname="tableContainer"></tr>
        <td className="brand">{brand}
        </td>
    <div>
    {models.map((item)=>{
        return <TableItem
        name={item.name}
        colllection={item.collection}
        />

    })}
    </div>
    </div>
    </>
}
export default Table;