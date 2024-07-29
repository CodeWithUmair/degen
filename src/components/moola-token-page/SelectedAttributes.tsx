import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useCollections } from "@reservoir0x/reservoir-kit-ui";
import { clearAllAttributes, removeParam } from "../../../utils/router";
import Button from "../ui/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";

type Attribute = {
  key: string;
  value: string;
}[];

type Props = {
  // collection: ReturnType<typeof useCollections>["data"][0];
  // mutate: ReturnType<typeof useCollections>["mutate"];
};

const SelectedAttributes: FC<Props> = ({}) => {
  const [filters, setFilters] = useState<Attribute>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const { saveScrollPosition, restoreScrollPosition } = useScrollPosition();

  const handleRemoveParam = (name: string, value: string) => {
    removeParam(
      router,
      pathname,
      searchParams,
      name,
      value,
      // saveScrollPosition,
      // restoreScrollPosition,
    );
  };

  useEffect(() => {
    let filters = [] as Attribute;

    // Extract all queries of attribute type
    // and convert into token format
    searchParams.forEach((value, key) => {
      if (key.startsWith("attributes[") && key.endsWith("]") && value !== "") {
        if (Array.isArray(value)) {
          let values = value as string[];
          values.forEach((value) => {
            filters.push({ key: key.slice(11, -1), value: value });
          });
        } else {
          filters.push({
            key: key.slice(11, -1),
            value: value as string,
          });
        }
      }
    });

    setFilters(filters);
  }, [searchParams]);

  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap">
      {filters.map(({ key, value }) => (
        <Button
          key={key + value}
          onClick={() => {
            handleRemoveParam(`attributes[${key}]`, value);
          }}
          customVariant="bg-gray-600 p-2 rounded-lg flex items-center m-1"
        >
          <p className="text-[15px]">{key}:&nbsp;</p>
          <p className="text-[15px]">{value}</p>
          <p className="text-[15px]">
            <FontAwesomeIcon icon={faClose} width="16" height="16" />
          </p>
        </Button>
      ))}

      {filters.length > 1 && (
        <Button
          onClick={() => {
            clearAllAttributes(
              router,
              pathname,
              // saveScrollPosition,
              // restoreScrollPosition,
            );
          }}
          customVariant="rounded-lg bg-gradient-to-br from-[#F8A55F] via-[#E43345] via-[#E43345] to-[#CB4CC4] m-1 p-2 text-[15px]"
        >
          Clear all
        </Button>
      )}
    </div>
  );
};

export default SelectedAttributes;
