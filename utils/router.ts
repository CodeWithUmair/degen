import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

const addParam = (
  router: AppRouterInstance,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string,
  // saveScrollPosition: () => void,
  // restoreScrollPosition: () => void
) => {
  console.log("🚀 ~ value:", value)
  console.log("🚀 ~ name:", name)
  console.log("🚀 ~ searchParams:", searchParams)
  console.log("🚀 ~ pathname:", pathname)
  console.log("🚀 ~ router:", router)
  // saveScrollPosition();
  const params = new URLSearchParams(searchParams.toString());
  params.append(name, value);
  router.replace(pathname + '?' + params.toString(),{
    scroll:false
  });
  // restoreScrollPosition();
};

const removeParam = (
  router: AppRouterInstance,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string,
  // saveScrollPosition: () => void,
  // restoreScrollPosition: () => void
) => {
  // saveScrollPosition();
  const params = new URLSearchParams(searchParams.toString());
  const values = params.getAll(name);
  
  params.delete(name);
  
  values.forEach(v => {
    if (v !== value) {
      params.append(name, v);
    }
  });

  router.replace(pathname + '?' + params.toString(),{
    scroll:false
  });
  // restoreScrollPosition();
};

const hasParam = (
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string
): boolean => {
  const params = new URLSearchParams(searchParams.toString());
  const values = params.getAll(name);
  return values.includes(value);
};

const clearAllAttributes = (
  router: AppRouterInstance,
  pathname: string,
  // saveScrollPosition: () => void,
  // restoreScrollPosition: () => void
) => {
  // saveScrollPosition();
  router.replace(pathname,{
    scroll:false
  });
  // restoreScrollPosition();
};

export { addParam, removeParam, hasParam, clearAllAttributes };