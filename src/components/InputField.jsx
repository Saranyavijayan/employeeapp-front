import styles from "../styles/CreateEmployeeStyle.css";
const InputField = ({
    onChange,
    placeHolder,
    className,
    type,
    isRequired,
    value

}) => {
console.log({placeHolder, value});
    return (
        <div className={className}>
            {/* <label className={`styles.${className}`}>
                {label}
            </label> */}
            <input
                className={className}
                isRequired={isRequired}
                value={value}
                type={type}
                onChange={(event) => onChange(event.target.value)}
                placeHolder={placeHolder}
            />
        </div>
    );
};
export default InputField;
