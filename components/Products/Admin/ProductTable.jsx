import {useState} from 'react';
import Table from "../../Tables/Table";
import Pagination from "../../Tables/Pagination/Pagination";

const ProductTable = ({products, count, page, order}) => {

    const [displayProducts, setDisplayProducts] = useState(products)
    const [pageCount, setPageCount] = useState(count)
    const [query, setQuery] = useState('')
const handleChange = async(e) => {
    e.preventDefault()
    const newQuery = e.target.value

    setQuery(newQuery)
    if (newQuery.length === 0) {
        setDisplayProducts(products)
        setPageCount(count)
    }
    if (newQuery.length < 3) return
    try {

        await fetch(`/api/product_search?search=${newQuery}` )
            .then(res =>  res.json())
            .then(data => {

                setDisplayProducts(data)
                setPageCount(data.length)
            } )

    } catch (err) {
        console.log(err)
    }

}
    const columns = ['id', 'Name', 'category', 'price', 'per', 'stock', 'Aanbiedingen']
    return (
        <div className={`py-10 xl:py-5 px-5 xl:px-0`}>
            <div className={`mx-auto max-w-6xl  rounded-lg p-5 bg-white shadow-2xl`}>
                <Table data={products} page={page} columns={columns} title={'Producten'} onChange={handleChange} query={query} order={order} />
                <Pagination
                    count={count}
                    items={products?.length}
                    page={page}
                    empty={`Geen producten in de database`}
                    view={'admin/producten'}
                    events={10}

                />
            </div>
        </div>
    );
};

export default ProductTable;
