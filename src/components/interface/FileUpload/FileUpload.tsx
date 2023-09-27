import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FileUploadIcon } from '../../icons';

interface CustomFileUploadProps {
  disabled: boolean;
}

interface UploadedFile {
  fileName: string;
  type: string;
  previewURL?: string;
  file?: File;
  id: string;
}
interface FileUploadProps {
  handleAdd: (data: UploadedFile) => void;
  disabled?: boolean;
  fileTypes: string[];
}

const CustomFileUpload = styled.label<CustomFileUploadProps>`
  display: flex;
  flex-shrink: 0;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 148px;
  height: 148px;
  background: #5f5f5f;
  border-radius: 12px;
  cursor: pointer;
`;

const CustomButton = styled.div`
  background-color: rgba(242, 242, 242, 0.4);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileUpload: React.FC<FileUploadProps> = ({ handleAdd, disabled, fileTypes }) => {
  const [file, setFile] = useState<any>();
  const fileInputRef = useRef(null);

  const genRanHex = (size) =>
    [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  const handleFileChange = (e) => {
    const [fileData] = e.target.files;
    setFile(fileData);
    addFile(fileData);
  };

  const addFile = (fileData) => {
    const id = genRanHex(32);
    const { name } = fileData;
    const newFile = new File([fileData], id);
    const data = {
      fileName: name,
      pointer: name,
      type: fileData.type,
      previewURL: URL.createObjectURL(fileData),
      file: newFile,
      id,
    };
    handleAdd(data);
    setFile(undefined);
    fileInputRef.current.value = '';
  };

  return (
    <CustomFileUpload disabled={disabled}>
      <input
        disabled={disabled}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept={fileTypes.join(',')}
      />

      <CustomButton>
        <FileUploadIcon />
      </CustomButton>
    </CustomFileUpload>
  );
};

export default FileUpload;
