"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import VolumeAndActivity from "./VolumeAndActivity";
import LocofyTest from "./LocofyText";
import { useCollections } from "@reservoir0x/reservoir-kit-ui";

interface  NftCollectionProps {  
  collection: NonNullable<ReturnType<typeof useCollections>['data']>['0'] | null
}
function NftCollection({collection}:NftCollectionProps) {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  return (
    <>
     <LocofyTest collection={collection} />
    </>
  );
}

export default NftCollection;

// nft_image_bg
