"use client"
import { useEffect, useRef, useState } from "react";
import { dropdownOptions } from "@/assets/mock";
import Image from "next/image";

type Props = {
  state: {
    [key: string]: any;
  };
  isDisabled: boolean
};

const Select = ({ state: { value, setValue }, isDisabled = false }: Props) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  const toggleOpen = () => {
    if(!isDisabled) setOpen((prev) => !prev);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))  setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
    
  }, []);

  const handleSelect = (option: (typeof dropdownOptions)[0]) => {
    setValue(option);
    setOpen(false);
  };

  return (
    <div className="relative text-neutral-300" ref={dropdownRef}>
      <div className="border-muted flex items-center justify-between overflow-hidden rounded-md border px-1 py-2">
        <button
          onClick={toggleOpen}
          className={`flex h-full w-full justify-between p-1 text-xs _uppercase_ ${isDisabled && "cursor-auto"}`}
        >
          <span className="sr-only">Menu</span>

          <div className="flex items-center gap-1.5">
            <span>
              <Image width={20} height={20} src={value.icon} alt="moola icon" />
            </span>
            <span>{value.label}</span>
          </div>
          {!isDisabled && <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>}
        </button>
      </div>

      <div
        className={`absolute start-0 z-10 mt-2 w-56 w-full rounded-md bg-white shadow-lg ${
          open ? "" : "hidden"
        }`}
        role="menu"
      >
        <div className="p-2">
          {dropdownOptions.map(({ id, icon, label }) => {
            return (
              <button
                key={id}
                className="text-md block flex w-full items-center gap-2 rounded-lg p-2 text-[11px] font-medium text-neutral-800 hover:bg-gray-50"
                role="menuitem"
                onClick={() => handleSelect({ id, icon, label })}
              >
                <span>
                  <Image width={20} height={20} src={icon} alt="moola icon" />
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
