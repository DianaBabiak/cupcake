import {ComponentPropsWithoutRef, forwardRef, memo} from "react";

interface TableBodyCellProps extends ComponentPropsWithoutRef<'td'> {
}

export const TableBodyCell = memo(forwardRef<HTMLTableCellElement, TableBodyCellProps>(
    ({className = '', ...restProps}, ref) => {

        const classNames = `tableBodyCell ${className}`.trim()

        return <td className={classNames} {...restProps} ref={ref}/>
    }
))
