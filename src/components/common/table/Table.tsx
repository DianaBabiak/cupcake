import {ComponentPropsWithoutRef, forwardRef} from "react";

interface TableProps extends ComponentPropsWithoutRef<'table'> {
}

export const Table = forwardRef<HTMLTableElement, TableProps>((
    {className = '', ...restProps}, ref) => {

    const classNames = `table ${className}`.trim()

    return <table className={classNames} {...restProps} ref={ref}/>
})