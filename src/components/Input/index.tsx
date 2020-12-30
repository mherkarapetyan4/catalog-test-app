const Input = (props: InputType) => {
    return <input placeholder={props.placeholder || ""} onChange={(e) => props.onChange(e.target.value)} />
}

type InputType = {
    placeholder?: string,
    onChange: (val: string) => void,
    value: string
}

export default Input