import {ComponentPropsWithoutRef, forwardRef} from "react";

interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({className = '', ...restProps}, ref) => {

        const classNames = `${className}`.trim()

        return <tbody className={classNames} {...restProps} ref={ref}/>
    }
)
