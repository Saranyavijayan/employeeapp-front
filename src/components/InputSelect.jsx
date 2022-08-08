const InputSelect = ({
    name,
    value,
    isEdit,
    options,
    className,
    onChange,
    placeHolder
}) => {
    return (
        <select name={name} className={className}
            onChange={(event) => onChange(event.target.value)}
            placeHolder={placeHolder}>
            <option value={options[0].val} selected={!isEdit}>{options[0].label}</option>
            {options.map((elem) => (
                <option value={elem.val} selected={elem.val === value}>{elem.label}</option>)

            )}

        </select>
    )
}
export default InputSelect;