import { ComponentProps, ReactNode } from 'react';

export function Tabela({ children }: { children: ReactNode }) {
  return (
    <table className="w-full text-center border border-zinc-400 bg-gray-200">
      {children}
    </table>
  );
}

export function CabecalhoTabela({ columns }: { columns: string[] }) {
  return (
    <thead className="uppercase text-xs border-b border-zinc-400 bg-zinc-200">
      <tr>
        {columns.map((col) => (
          <th className="px-4 py-2" key={col}>
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function CorpoTabela({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

type TableRowProps = ComponentProps<'tr'> & {
  children: ReactNode;
};

export function LinhaTabela({ children, ...props }: TableRowProps) {
  return (
    <tr {...props} className="odd:bg-gray-50 hover:bg-gray-300">
      {children}
    </tr>
  );
}

type TableCellProps = ComponentProps<'td'> & {
  children: ReactNode;
};

export function CelulaTabela({ children, ...props }: TableCellProps) {
  return (
    <td {...props} className="px-4 py-3">
      {children}
    </td>
  );
}
