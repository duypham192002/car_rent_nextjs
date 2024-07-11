"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  Transition,
} from "@headlessui/react";

import Image from "next/image";

import { SearchManufacturerProps } from "@/types";

const SearchManufacture = ({
  manufacturer,
  setmanufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="m1-4"
              alt="Car Logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
          ></ComboboxInput>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
