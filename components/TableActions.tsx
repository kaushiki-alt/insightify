import React from 'react'
import { Button } from './ui/button'

type TableActionsAProps = {
    showView?: boolean,
    showEdit?: boolean,
    showDelete?: boolean,
    onView?: () => void,
    onEdit?: () => void,
    onDelete?: () => void,
}

const TableActions = ({ showDelete = true, showEdit = true, showView = true, onView, onEdit, onDelete }: TableActionsAProps) => {
    return (
        <div className="flex gap-2 items-center">
            {showEdit &&
                <Button type='button' variant="outline" size="icon-sm" onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.()
                }} > ✏️  </Button>
            }
            {showDelete &&
                <Button type='button' variant="outline" size="icon-sm" onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.()
                }}>  🗑 </Button>
            }
            {showView &&
                <Button type='button' variant="outline" size="icon-sm" onClick={(e) => {
                    e.stopPropagation();
                    onView?.()
                }}> 👁  </Button>
            }
        </div>
    )
}

export default TableActions
