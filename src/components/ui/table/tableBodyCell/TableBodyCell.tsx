import {ComponentPropsWithoutRef, forwardRef} from "react";

interface TableBodyCellProps extends ComponentPropsWithoutRef<'td'> {}

export const TableBodyCell = forwardRef<HTMLTableCellElement, TableBodyCellProps>(
    ({ className = '', ...restProps }, ref) => {

        const classNames = `tableBodyCell ${className}`.trim()

        return <td className={classNames} {...restProps} ref={ref} />
    }
)
