import { FC, useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { describes } from "../../enums/describes";

const describesOpts = describes.map(level => ({ value: level, label: level }));

const ValueContainer = ({ children, ...props }) => {
  let [values, input] = children;

  if (Array.isArray(values)) {
    const plural = values.length === 1 ? "" : "s";
    values = `${values.length} item${plural} selected`;
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

export default function ProfileDescribeInput({}) {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = e => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <>
      <Select
        isMulti
        className="text-[18px] mt-[1px] p-0 m-0 form-select border-0 rounded-lg"
        placeholder="Tell us who you are"
        classNamePrefix="react-select"
        components={{ ValueContainer }}
        options={describesOpts}
        hideSelectedOptions={false}
        isClearable={true}
        closeMenuOnSelect={false}
        isSearchable={true}
        onChange={handleChange}
        isOptionDisabled={() => (selectedValue.length === 20 ? true : false)}
        // value={describesOpts.filter(obj => selectedValue.includes(obj.value))}
      />
      <style jsx global>{`
        .react-select__placeholder {
          color: #a5a5a5;
        }

        .react-select__control {
          border: 2px solid #c9c9c9;
          border-radius: 8px;
        }

        .react-select__indicator-separator {
          display: flex;
          align-self: stretch;
          background-color: #e5e7eb;
          margin-left: 5px;
          box-sizing: border-box;
          width: 1px;
        }

        .react-select__dropdown-indicator {
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 25 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4019 21.5542L0.267673 0.508415L24.5361 0.508415L12.4019 21.5542Z' fill='%238A8A8A'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 80%;
          margin-right: 7px;
          margin-left: 7px;
        }

        .react-select__dropdown-indicator > svg {
          display: none;
        }
      `}</style>
    </>
  );
}
