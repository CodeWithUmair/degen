import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordian";
import { Checkbox } from "../ui/Checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addParam, hasParam, removeParam } from "../../../utils/router";

type NftFilterType = {
  attributes: any;
};

const NFTFilter = ({ attributes }: NftFilterType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleAddParam = (name: string, value: string) => {
    addParam(router, pathname, searchParams, name, value);
  };

  const handleRemoveParam = (name: string, value: string) => {
    removeParam(router, pathname, searchParams, name, value);
  };

  // Handle wheel event to scroll within the div
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (container) {
        e.preventDefault();
        container.scrollTop += e.deltaY;
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Scroll to the bottom of the opened dropdown
  useEffect(() => {
    if (containerRef.current && openDropdown !== null) {
      const dropdownIndex = attributes.findIndex((attr: any) => attr.key === openDropdown);
      const dropdownElement = dropdownRefs.current[dropdownIndex];
      if (dropdownElement) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const dropdownRect = dropdownElement.getBoundingClientRect();
        if (dropdownRect.bottom > containerRect.bottom) {
          containerRef.current.scrollTop += dropdownRect.bottom - containerRect.bottom;
        }
      }
    }
  }, [openDropdown, attributes]);

  return (
    <motion.div
      className="nft-filter-scrollbar w-full overflow-y-auto pr-1"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onWheel={(e) => {
        e.stopPropagation(); // Prevent scrolling the main page
      }}
    >
      <Accordion
        type="multiple"
        className="inline-block w-full max-w-full leading-[128.76%] tracking-[0.01em]"
      >
        {attributes.length > 0 &&
          attributes.map((attr: any, index: number) => (
            <AccordionItem
              key={attr.key}
              value={attr.key}
              className="border-none"
              ref={(el) => { dropdownRefs.current[index] = el; }}
            >
              <AccordionTrigger
                className="py-2 text-lg"
                onClick={() => setOpenDropdown(attr.key)}
              >
                {attr.key}
              </AccordionTrigger>
              <AccordionContent className="py-2 pb-0">
                <div className="flex flex-col gap-3 pl-2">
                  {attr.values &&
                    attr.values.length > 0 &&
                    attr.values
                      .sort((a: any, b: any) => (b.count || 0) - (a.count || 0))
                      .map((singleTrait: any, indLower: any) => (
                        <div
                          key={`attr-key-${indLower}`}
                          className="items-top flex cursor-pointer space-x-2"
                          onClick={() => {
                            if (
                              hasParam(
                                searchParams,
                                `attributes[${attr.key}]`,
                                singleTrait.value,
                              )
                            ) {
                              handleRemoveParam(
                                `attributes[${attr.key}]`,
                                singleTrait.value,
                              );
                            } else {
                              handleAddParam(
                                `attributes[${attr.key}]`,
                                singleTrait.value,
                              );
                            }
                          }}
                        >
                          <Checkbox
                            id={singleTrait.value}
                            checked={hasParam(
                              searchParams,
                              `attributes[${attr.key}]`,
                              singleTrait.value,
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleAddParam(
                                  `attributes[${attr.key}]`,
                                  singleTrait.value,
                                );
                              } else {
                                handleRemoveParam(
                                  `attributes[${attr.key}]`,
                                  singleTrait.value,
                                );
                              }
                            }}
                          />
                          <div className="grid cursor-pointer gap-1.5 leading-none">
                            <label
                              htmlFor={singleTrait.value}
                              className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {singleTrait.value}
                              <span className="ml-3 cursor-pointer">
                                ( {singleTrait?.count ?? "--"} )
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </motion.div>
  );
};

export default NFTFilter;
