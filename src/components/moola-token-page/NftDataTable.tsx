"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Checkbox } from "../ui/Checkbox";
import Button from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Input } from "../ui/Input";
import Image from "next/image";
import { useTokens } from "@reservoir0x/reservoir-kit-ui";
import { shortenWalletAddress } from "@/helpers/common";
import { DEGEN_TOKEN_ADDRESS } from "@/config";

// const data: NftData[] = [
//   {
//     id: "1",
//     listed: "Metamorph",
//     rarity: 5703,
//     tokenPrice: "12.389",
//     lastSale: 12.07,
//     topBid: 11.8,
//     owner: "a69833",
//     held: 5,
//   },
//   {
//     id: "2",
//     listed: "Metamorph",
//     rarity: 5703,
//     tokenPrice: "12.389",
//     lastSale: 12.07,
//     topBid: 11.8,
//     owner: "a69833",
//     held: 5,
//   },
//   {
//     id: "3",
//     listed: "Metamorph",
//     rarity: 5713,
//     tokenPrice: "12.389",
//     lastSale: 12.07,
//     topBid: 11.8,
//     owner: "a69833",
//     held: 5,
//   },
//   {
//     id: "4",
//     listed: "Metamorph",
//     rarity: 5703,
//     tokenPrice: "12.389",
//     lastSale: 12.07,
//     topBid: 11.8,
//     owner: "a69833",
//     held: 5,
//   },
// ];

export type NftData = {
  id: string;
  image: string;
  name: string;
  rarity: number;
  tokenPrice: string;
  tokenPriceSourceIcon: string;
  tokenPriceSourceUrl: string;
  lastSale: string;
  topBid: string;
  owner: string;
};

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};


export const columns: ColumnDef<NftData>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("image")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "rarity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          style={{padding: "0 20px 0 0"}}
        >
          Rarity
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("rarity")}</div>
    ),
  },
  {
    accessorKey: "tokenPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          style={{padding: "0 20px 0 0"}}
        >
          Price
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("tokenPrice")}</div>
    ),
  },
  {
    accessorKey: "lastSale",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          style={{padding: "0 20px 0 0"}}
        >
          Last Sale
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("lastSale")}</div>
    ),
  },
  {
    accessorKey: "topBid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          style={{padding: "0 20px 0 0"}}
        >
          Top Bid
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("topBid")}</div>
    ),
  },
  {
    accessorKey: "owner",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          style={{padding: "0 20px 0 0"}}
        >
          Owner
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("owner")}</div>,
  },
];

interface NftDataTableProps {
  tokens: NonNullable<ReturnType<typeof useTokens>["data"]>;
  loadMoreRef: (node?: Element | null) => void;
  isFetchingPage: boolean;
  hasNextPage: boolean;
}
export function NftDataTable({
  tokens,
  loadMoreRef,
  isFetchingPage,
  hasNextPage,
}: NftDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [testState, setTestState] = React.useState(0);

  const [data, setData] = React.useState<NftData[]>([]);
  React.useEffect(() => {
    let tokenData: NftData[] = [];
    tokenData = tokens.map((token) => {
      return {
        id: token?.token?.tokenId || "#",
        image: token?.token?.imageSmall || "",
        name: token?.token?.name || "Unknown",
        rarity: token?.token?.rarityRank || 0,
        tokenPrice: token?.market?.floorAsk?.price?.amount?.native
          ? `${token?.market?.floorAsk?.price?.amount?.native} ETH`
          : "--",
        tokenPriceSourceIcon: token?.market?.floorAsk?.source?.icon
          ? token?.market?.floorAsk?.source?.icon
          : "",
        tokenPriceSourceUrl: `https://opensea.io/assets/ethereum/${DEGEN_TOKEN_ADDRESS}/${token?.token?.tokenId}`,
        lastSale: token.token?.lastSale?.price?.amount?.native
          ? String(token.token?.lastSale?.price?.amount?.native)
          : "--",
        topBid: token?.market?.topBid?.price?.amount?.native
          ? (token?.market?.topBid?.price?.amount?.native).toString()
          : "--",
        owner: shortenWalletAddress(token?.token?.owner) || "0x000...0000",
      };
    });
    setData(tokenData);
  }, [tokens]);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 7
      }
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // console.log("🚀 ~ table:", table);
  return (
    <div className="h-ull w-full max-w-full">
      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      <div className="rounded-md">
        <Table>
          <TableHeader className="gradient-border-top-bottom">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header, index) => {
                  // console.log(
                  //   "🚀 ~ {headerGroup.headers.map ~ header:",
                  //   header.id,
                  // );
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-bold text-[16px] ${header.id === "rarity" ? "text-start p-0" : "" }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length > 0
              ? table.getRowModel().rows.map((row) => {
                  // console.log("🚀 ~ table.getRowModel ~ row:", row)
                  return (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className={`${row.original.id ? "text-start" : "text-center"} border-none`}
                    >
                      {row.getVisibleCells().map((cell) => {
                        // console.log("🚀 ~ {row.getVisibleCells ~ cell:", cell);
                        return (
                          <TableCell
                            key={cell.id}
                            className={`${cell.id.includes("0_") ? "" : ""}`} // this is for padding-top for first row
                          >
                            {cell.column.id === "image" ? (
                              <div className="m-0 h-[40px] w-[40px] p-0">
                                <Image
                                  src={`${cell.row.original.image}`}
                                  alt="nft_image"
                                  width={40}
                                  height={40}
                                  className="rounded-xl"
                                />
                              </div>
                            ) : (
                              <div
                              className={`flex gap-2 w-fit ${cell.column.id === "tokenPrice" ? `${cell.row.original.tokenPrice == "--"?"w-100":"w-16"} cursor-pointer rounded-md bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#cb4cc4] px-2 py-1` : ""}`}
                              onClick={() => {
                                if (cell.column.id === "tokenPrice") {
                                  window.open(
                                    cell.row.original.tokenPriceSourceUrl,
                                    "_blank",
                                  );
                                }
                              }}
                            >
                              {cell.column.id === "tokenPrice"
                                ? cell.row.original.tokenPrice !== "--"
                                  ? `${cell.row.original.tokenPrice}`
                                  : "Make Offer"
                                : flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                  )}

                              {(cell.column.id === "lastSale" &&
                                cell.row.original.lastSale !== "--") ||
                              (cell.column.id === "topBid" &&
                                cell.row.original.topBid !== "--") ? (
                                <Image
                                  src="/images/icons/eth-icon.png"
                                  width={24}
                                  height={16}
                                  alt="eth-icon"
                                  className="flex h-[20px] w-[20px] items-center"
                                />
                              ) : null}

                              {cell.column.id === "tokenPrice" &&
                              cell.row.original.tokenPrice !== "--"  ? (
                                <Image
                                  src={`${cell.row.original.tokenPriceSourceIcon}`}
                                  width={15}
                                  height={15}
                                  alt="eth-icon"
                                  className="float-right flex h-[18px] w-[18px]"
                                />
                              ) : null}
                            </div>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              : !isFetchingPage && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
            {/* {!table.getCanNextPage() && hasNextPage && !isFetchingPage && (
              <TableRow
                ref={loadMoreRef}
                style={{
                  display: isFetchingPage ? "none" : "block",
                }}
              ></TableRow>
            )} */}
          </TableBody>
        </Table>
      </div>

      {isFetchingPage &&  <div className="flex items-center justify-center w-full py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#E43345]"></div>
    </div>}
      <div className="flex items-center justify-end space-x-2 pt-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length * 10} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="flex gap-2 space-x-2">
          {table.getCanPreviousPage() &&
          <Button
          variant={`${!table.getCanPreviousPage() ? "" : "tableButton"}`}
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`${!table.getCanPreviousPage() ? "px-5" : ""}`}
          >
            Previous
          </Button>
          }
          {table.getCanNextPage() &&
          <Button
          variant={`${!table.getCanNextPage() ? "" : "tableButton"}`}
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`${!table.getCanNextPage() ? "" : ""}`}
          >
            Next
          </Button>
          }
        </div>
      </div>
    </div>
  );
}
