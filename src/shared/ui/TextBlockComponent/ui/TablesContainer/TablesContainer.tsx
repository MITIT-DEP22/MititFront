import React, {FC} from 'react';
import css from "./TablesContainer.module.scss";
import {Table} from "entities/text-block/model/types";
import HTMLReactParser from "html-react-parser";

interface TablesProps {
    tables: Table[];
    id?: number;
}

const TablesContainer: FC<TablesProps> = ({tables, id}) => {


    return (
        <div className={css.tablesContainer}>{
            tables.map((table, index) => (
                <table key={`table_${index}_${id}`} className={css.table}>
                    {table.headers &&
                        <thead>
                        <tr>
                            {table.headers.map((header, index2) => (
                                <th key={`table_${index}_header_${index2}_${id}`}
                                    colSpan={table.headers.length !== table.rows[0].elements.length ? table.rows[0].elements.length : 1}
                                    className={css.header}> {HTMLReactParser(header)}</th>
                            ))}
                        </tr>
                        </thead>
                    }
                    <tbody>
                    {table.rows.map((row, index2) => (
                        <tr key={`table_${index}_row_${index2}_${id}`} className={css.row}>
                            {row.elements.map((item, index4) => (
                                <td key={`table_${index}_row_${index2}_row-element_${index4}_${id}`}
                                    className={css.rowElement}>
                                    {
                                        item.value.map((r, index3) => (
                                            <div key={`table_${index}_row_${index2}_element_${index3}_${id}`}
                                                 className={`${css.tableElement} ${item.value.length > 1 && css.tableElementMany}`}>
                                                {HTMLReactParser(r)}
                                            </div>
                                        ))
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )
            )
        }
        </div>
);
};

export default TablesContainer;