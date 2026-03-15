'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TablePagination } from "@/components/users/TablePagination";
import { UserSearch } from "@/components/SearchBar";
import { Address, Column, User } from "@/lib/types";
import { getData } from "@/lib/utils";
import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import Row from "@/components/Row";

function page() {
  const base_url = 'https://dummyjson.com//users?limit=100';

  const [rawUsers, setRawUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [sortKey, setSortKey] = useState<keyof User | null>('username')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchData = await getData<{ users: User[] }>(base_url)
        const data = fetchData.users
        setRawUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [])

  // filtering logic
  const filteredUsers =
    rawUsers.filter((user) => {
      const name = user.firstName + user.lastName
      const query = searchQuery.toLowerCase();

      return (
        name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query)
      )
    })

  // sorting logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortKey) {
      return 0;
    }
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortDir === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortDir === 'asc'
        ? valueA - valueB
        : valueB - valueA
    }
    return 0;
  })

  const handleSort = (key: keyof User) => {
    if (sortKey === key) {
      setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
    setCurrentPage(1);
  }

  // pagination maths
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex)
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  // reseting the current page
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const userColumns: Column<User>[] = [
    { key: "username", label: "Username", sortable: true },
    { key: "firstName", label: "Name", sortable: true },
    { key: "age", label: "Age", sortable: true },
    { key: "gender", label: "Gender" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "country", label: "Country" },
    { key: "role", label: "Role" },
    { key: "actions", label: "Actions" }
  ]

  const renderUserRow = (user: User) => (
    <Row key={user.id} user={user} />
  )
  return (
    <>
      <Card className="p-8">
        {/* header */}
        <div className="header  mb-6">
          <h2 className='text-xl font-semibold tracking-tight capitalize'> Users </h2>
          <p className="text-sm text-muted-foreground mt-1">Manage and monitor user accounts</p>
        </div>

        {/* toolbar */}
        <div className="toolabar flex flex-col md:justify-between gap-4 md:flex-row md:items-center mb-6">
          <UserSearch value={searchQuery} onSearchChange={setSearchQuery} placeholder="Search Users...." />
          <Button variant="secondary" className="w-full md:w-auto">Add User</Button>
        </div>

        {/* table */}
        <div className="mb-6 overflow-x-scroll">
          {paginatedUsers.length === 0 ? (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
              <p className="text-lg font-medium">No users found</p>
            </div>
          ) : (
            <DataTable
              data={paginatedUsers}
              columns={userColumns}
              sortFn={handleSort}
              renderRow={renderUserRow}
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

export default page;


// cpmplex pagination remains