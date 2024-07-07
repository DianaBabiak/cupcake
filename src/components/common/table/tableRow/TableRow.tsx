import {ComponentPropsWithoutRef, forwardRef, memo} from "react";

interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {}

export const TableRow = memo(forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className = '', ...restProps }, ref) => {

        const classNames = `tableRow ${className}`.trim()

        return <tr className={classNames} {...restProps} ref={ref} />
    }
))