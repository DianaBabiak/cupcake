import {ComponentPropsWithoutRef, forwardRef} from "react";

interface TableHeadProps extends ComponentPropsWithoutRef<'thead'> {}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
    ({ className= '', ...restProps }, ref) => {

        const classNames = `tableHead ${className}`.trim()

        return <thead className={classNames} {...restProps} ref={ref} />
    }
)