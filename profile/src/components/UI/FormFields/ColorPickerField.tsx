import React from 'react';
import { useField, useFormikContext } from 'formik';
import styled from 'styled-components';
import { ColorResult, SketchPicker } from 'react-color';
// import { DeleteIcon } from '../DotTool/DotTool.styled';

interface Props {
    name: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    sm?: string;
}

const ColorPickerField: React.FC<Props> = (props) => {
    const [displayColorPicker, setDisplayColorPicker] = React.useState<boolean>(false);

    const { setFieldValue } = useFormikContext();
    const [field] = useField({
        name: props.name,
        type: props.name
    });

    const handleOnChange = (color: ColorResult) => {
        setFieldValue(field.name, color.hex);
    }

    const handleClose = () => {
        setDisplayColorPicker(false);
    }

    const handleClick = () => {
        if (props.disabled) return;
        setDisplayColorPicker(true);
    }

    return (
        <ColorPickerFormField sm={props.sm}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <ColorPickerButton id={props.name} onClick={handleClick} disabled={props.disabled}>
                <ColorPickerColor hexColor={field.value || undefined} />
            </ColorPickerButton>
            {displayColorPicker &&
                <ColorPickerPopOver>
                    <ColorPickerCover onClick={handleClose}>
                        <ColorPickerColor hexColor={field.value || undefined} />
                    </ColorPickerCover>
                    <SketchPicker {...field} {...props} color={field.value || undefined} onChange={handleOnChange} />
                </ColorPickerPopOver>
            }
            {/* <DeleteIcon type="button" title='Remove' disabled={props.disabled} onClick={() => {
                if (props.disabled) return;
                setFieldValue(field.name, null);
            }} /> */}
        </ColorPickerFormField>
    );
};

export default ColorPickerField;

const ColorPickerFormField = styled.div<{ sm?: string }>`
    position: relative;
    margin: 0.5rem 0;

    label {
        font-family: Montserrat;
        font-size: ${(p) => (p.sm ? 14 : 16)}px;
        height: 32px;
        color: #202834;
        text-decoration: none solid rgb(32, 40, 52);
        line-height: 32px;
        display: block;
    }
`

const ColorPickerButton = styled.div<{ disabled?: boolean }>`
    background: #fff;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
    border-radius: 1px;
    padding: 5px;
`

const ColorPickerColor = styled.div<{ hexColor?: string }>`
    width: 36px;
    height: 14px;
    border-radius: 2px;
    background-color: ${p => p.hexColor ? p.hexColor : '#fff'};
    border: 1px solid rgba(0,0,0,.1);
`

const ColorPickerPopOver = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 45px;
`

const ColorPickerCover = styled.div<{ hexColor?: string }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
