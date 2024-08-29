import Select from 'react-select';

interface DropdownProps {
    options: { id: number, name: string }[]; // Update options to include both value and label
    onInputChange: (input: string) => void;
    name: string;
    height?: number;
    width?: number;
    placeHolder: string;
}


export const DropdownSearch = ({ options, onInputChange, name,height=30, width=200, placeHolder }: DropdownProps) => {
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            width: width, // Fixed width
            height: height, // Fixed height
        }),
        menu: (provided: any) => ({
            ...provided,
            width: width, // Ensure the menu matches the width of the control
        }),
        singleValue: (provided: any) => ({
            ...provided,
            margin: 0, // Optional: adjust single value margin
        }),
        placeholder: (provided: any) => ({
            ...provided,
            margin: 0, // Optional: adjust placeholder margin
        }),
    };

    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder={placeHolder}
            isClearable={true}
            isRtl={true}
            isSearchable={true}
            options={options}
            name={name}
            onChange={(selectedOption) => {
                // Handle selection change
                if (selectedOption) {
                    onInputChange(selectedOption.name);
                }
            }}
            styles={customStyles}
        />
    );
};