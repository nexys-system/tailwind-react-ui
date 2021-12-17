import React from "react";

import { Filter, OptionUnit } from "@nexys/core-list/dist/types/filter";
import { GlobalSearch } from "./";
import PopoverFilter from "./popover-unit";
import Checkbox from "../../../form/inputs/boolean/checkbox";
import Radio from "../../../form/inputs/radio";
import TextInput from "../../../form/inputs/text";

interface CheckboxInputValue<A> {
  name: keyof A;
  value: {
    func: Function;
    value: number | string;
  };
}

interface FilterUnitProps<A> {
  filter?: boolean | Filter<A>;
  filters: any;
  name: keyof A | "id" | "uuid";
  onChange: (
    inputValue:
      | { name: keyof A | "id" | "uuid"; value: any; type?: string }
      | CheckboxInputValue<A>
  ) => void;
  onReset: (name: keyof A | "id" | "uuid") => void;
  debounceWait?: number;
}

const FilterUnit = <A,>(props: FilterUnitProps<A>): JSX.Element | null => {
  const { filter, filters, name, onChange, onReset } = props;

  if (typeof filter === "boolean" && filter === true) {
    return (
      <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
        <TextInput
          // name={name}
          value={filters[name]}
          onChange={(v): void => onChange({ name, value: v })}
          // wait={debounceWait}
        />
      </PopoverFilter>
    );
  }

  if (typeof filter === "object" && filter.type === "string") {
    return (
      <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
        <TextInput
          // name={name}
          value={filters[name] ? filters[name].value.value : ""}
          onChange={(v): void => {
            onChange({
              name,
              value: { value: v, func: filter.func },
            });
          }}
          placeholder="Type to filter..."
          // wait={debounceWait}
        />
      </PopoverFilter>
    );
  }

  // if (typeof filter === 'object' && Array.isArray(filter.options)) {
  if (typeof filter === "object") {
    const options: OptionUnit[] | undefined =
      filter.options && typeof filter.options === "function"
        ? filter.options(filters)
        : filter.options;

    if (filter.type === "category") {
      const v = filters[name] ? filters[name].value : [];

      return (
        <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
          {options &&
            options.map((option) => (
              <div className="flex flex-row">
                <Checkbox
                  value={v.includes(option.key)}
                  onChange={() =>
                    onChange({
                      name,
                      value: {
                        value: option.key,
                        func: filter.func,
                      },
                      type: filter.type,
                    })
                  }
                />
                <span className="font-extralight ml-1">{option.value}</span>
              </div>
              // <FormControlLabel
              //   key={i}
              //   value={option.key}
              //   control={
              //     <Checkbox
              //       checked={v.includes(option.key)}
              //       onChange={(): void =>
              //         onChange({
              //           name,
              //           value: {
              //             value: option.key,
              //             func: filter.func
              //           },
              //           type: filter.type
              //         })
              //       }
              //     />
              //   }
              //   label={option.value}
              // />
            ))}
        </PopoverFilter>
      );
    }

    if (filter.type === "select") {
      const value = filters[name] ? filters[name].value.value : "";
      return (
        <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
          {/* <FormControl component="fieldset">
            <RadioGroup aria-label={name.toString()} value={value}> */}
          {options &&
            options.map((option, i) => (
              <Radio
                id={option.key}
                label={option.value}
                checked={value === option.key}
                onChange={() =>
                  onChange({
                    name,
                    value: { value: option.key, func: filter.func },
                  })
                }
              />
            ))}
        </PopoverFilter>
      );
    }
  }

  return null;
};

export default FilterUnit;
