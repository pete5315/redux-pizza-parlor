function TableItem({items}){
    return (
		<>
			<td>{items.name}</td>
			<td>{items.price}</td>
		</>
	);
}

export default TableItem