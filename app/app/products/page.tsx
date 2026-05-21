'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UserSearch } from "@/components/SearchBar"
import { useEffect, useState } from "react"
import DataTable from "@/components/DataTable"
import type { Column, Product } from "@/lib/types"
import { getData } from "@/lib/utils"
import Row from "@/components/products/ProductRow"
import { TablePagination } from "@/components/users/TablePagination"

const productsPage = () => {
  const base_url = 'https://dummyjson.com//products?limit=100';

  const [rawProducts, setRawProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<keyof Product | null>('title')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchData = await getData<{ products: Product[] }>(base_url);
        const data = fetchData.products
        setRawProducts(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [])

  // table working
  const productColumns: Column<Product>[] = [
    { key: "image", label: "Image" },
    { key: "title", label: "Title", sortable: true },
    { key: "category", label: "Category", sortable: true },
    { key: "brand", label: "Brand", sortable: true },
    { key: "price", label: "Price", sortable: true },
    { key: "rating", label: "Rating" },
    { key: "stock", label: "Stock", sortable: true },
    { key: "actions", label: "Actions" }
  ]

  const renderProductRow = (product: Product) => (
    <Row key={product.id} product={product} />
  )

  // filtering products
  const query = searchQuery.toLowerCase();
  const filteredProducts = rawProducts.filter((product) => {
    return (
      product.title?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    )
  })

  // sorting the products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortKey) {
      return 0;
    }
    const valueA = a[sortKey]
    const valueB = b[sortKey]

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortDir === 'asc'
        ? valueA - valueB
        : valueB - valueA
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortDir === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    }

    return 0;
  })

  const handleSort = (key: keyof Product) => {
    if (sortKey === key) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  // pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatdProducts = sortedProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery])

  return (
    <>
      <Card className="p-8">
        {/* header */}
        <div className="mb-6">
          <div className="flex justify-between items-center gap-x-2">
            <h2 className='text-xl font-semibold tracking-tight capitalize'>Products</h2>
            <Button variant="secondary" className="w-full md:w-auto" onClick={() => console.log('Add Product')}>Add Product</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Manage your products, pricing, and inventory</p>
        </div>
        {/* Search bar */}
        <UserSearch value={searchQuery} onSearchChange={setSearchQuery} placeholder="Search Products..." />

        {/* table */}
        <div className="mb-6 overflow-x-scroll">
          {paginatdProducts.length === 0 ? (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
              <p className="text-lg font-medium">No Products found</p>
            </div>
          ) : (
            <DataTable
              data={paginatdProducts}
              columns={productColumns}
              sortFn={handleSort}
              renderRow={renderProductRow}
            />)}
        </div>

        {/* pagination */}
        <div className="align-baseline">
          <TablePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </Card>
    </>
  )
}

export default productsPage
