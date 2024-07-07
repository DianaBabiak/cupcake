import {ComponentPropsWithoutRef, forwardRef} from "react";

interface TableHeadCellProps extends ComponentPropsWithoutRef<'th'> {}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
    ({ className = '', ...restProps}, ref) => {

        const classNames = `tableHeadCell ${className}`.trim()

        return (
            <th className={classNames} {...restProps} ref={ref}/>
        )
    }
)
