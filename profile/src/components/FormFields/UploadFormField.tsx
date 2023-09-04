import prettyBytes from 'pretty-bytes';
import React, { useCallback } from 'react';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { DeleteIconButton } from '../UI/Button.styled';
import { useField } from 'formik';
interface UploadFormFieldProps {
    name: string;
    label?: string;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    setFieldTouched: (field: string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined) => void;
    sm?: string;
    accept?: string | string[] | undefined;
    className?: string;
    handleSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    showFiles?: boolean;
    hint?: string;
}

const UploadFormField: React.FC<UploadFormFieldProps> = (props) => {
    const { setFieldValue, handleSubmit, setFieldTouched } = props;

    // eslint-disable-next-line
    const [field, { error, touched }] = useField({
        name: props.name,
    });

    const isInvalid = error && touched;

    const onDrop = useCallback(
        async (acceptedFiles) => {
            // setFieldValue and setFieldTouched have incorrect exported
            // interfaces. They do return promises.
            await setFieldValue(props.name, acceptedFiles[0]);
            await setFieldTouched(props.name, true);
            if (handleSubmit) handleSubmit();
        },
        [setFieldValue, props.name, handleSubmit]
    );

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open, acceptedFiles } = useDropzone({
        accept: props.accept,
        onDrop,
        multiple: false,
        noClick: true,
        noKeyboard: true,
    });

    const showFiles = props.showFiles && acceptedFiles.length >= 1;

    const onRemove = React.useCallback(
        (file: any) => {
            if (acceptedFiles.length > 0) {
                acceptedFiles.splice(file, 1);
                setFieldValue(props.name, null);
            }
        },
        [props.name, setFieldValue, acceptedFiles]
    );

    const columns = React.useMemo((): IDataTableColumn<File>[] => {
        return [
            {
                name: 'Name',
                selector: 'path',
            },
            {
                name: 'Size',
                cell: (row) => <p>{prettyBytes(row.size)}</p>,
            },
            {
                name: 'Actions',
                button: true,
                cell: (row) => (
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <DeleteIconButton title={`Remove ${row.name}`} onClick={() => onRemove(row)} />
                    </div>
                ),
            },
        ];
    }, [onRemove]);

    return (
        <FormField sm={props.sm} className={props.className}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            {props.hint && <p className="hint">{props.hint}</p>}
            <div>
                {!showFiles && (
                    <Container
                        {...getRootProps({
                            isDragActive,
                            isDragAccept,
                            isDragReject,
                        })}
                    >
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop a file here, or</p>
                        <Button type="button" onClick={open}>
                            Browse Files
                        </Button>
                    </Container>
                )}
                {isInvalid && <div className="error">{error}</div>}
                {showFiles && <DataTable columns={columns} data={acceptedFiles} responsive striped noHeader />}
            </div>
        </FormField>
    );
};

export default UploadFormField;

export const getColor = (props: any) => {
    if (props.isDragAccept) {
        return '#21467e';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#21467e';
    }
    return '#eeeeee';
};

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
`;

const FormField = styled.div<{ sm?: string; disabled?: boolean }>`
    margin: 0.5rem 0;
    label {
        font-family: Montserrat;
        font-size: ${(p) => (p.sm ? 14 : 16)}px;
        height: 32px;
        color: #202834;
        text-decoration: none solid rgb(32, 40, 52);
        line-height: 32px;
    }
    .error {
        border-color: #d63831;
        color: #d63831;
    }
    p.hint {
        font-size : 14px;
        color: #9c9c9c;
        font-weight: 500;
    }
`;

const Button = styled.button`
    padding: 1em;
    font-family: Montserrat;
    font-size: 20px;
    color: #9c9c9c;
    text-decoration: underline;
    cursor: pointer;
    border: none;
    background: none;
    transition: 0.1s linear;
    outline: none;
    &:hover {
        color: #f09d39;
    }
`;
