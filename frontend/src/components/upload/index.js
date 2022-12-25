/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import React, { useState, useRef, useCallback } from 'react';
import { useUpload } from '../../hooks/upload';
import {
  Container,
  ImagePreview,
  MessagePreview,
  Body,
  Button,
} from './styles';

export default function Upload() {
  const inputFile = useRef(null);
  const inputBody = useRef(null);
  const inputService = useRef(null)
  const { error, loading, resetValues, uploadPhotoAction } = useUpload();
  const [serviceName,setserviceName]=useState("")
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleUpload = useCallback(
    (e) => {
      e.preventDefault();
      const dataImage = {
        file: inputFile.current.files[0],
        body,
        serviceName,
      };
      uploadPhotoAction(dataImage);

      setDisabled(true);
    },
    [body,serviceName]
  );

  const handleInputFile = useCallback(
    (file) => {
      resetValues();
      if (file.target.files[0]) {
        setImage(URL.createObjectURL(file.target.files[0]));
        setDisabled(false);
      } else {
        setImage('');
      }
      inputBody.current.focus();
      inputService.current.focus();
    },
    [resetValues]
  );

  const handleBody = useCallback(
    (e) => {
      setBody(e.target.value);
      if (body.trim().length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [body]
  );
  const handleService = useCallback(
    (e) => {
      setserviceName(e.target.value);
      if (serviceName.trim().length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [serviceName]
  );

  return (
    <Container onSubmit={handleUpload} enctype="multipart/form-data">
      {image ? (
        <ImagePreview
          src={image}
          title="image preview"
          onClick={() => inputFile.current.click()}
        />
      ) : (
        <MessagePreview onClick={() => inputFile.current.click()}>
          Select your photo
        </MessagePreview>
      )}

      <input
        ref={inputFile}
        name="file"
        type="file"
        onChange={handleInputFile}
        accept="image/*"
        style={{ display: 'none' }}
      />

      <Body
        placeholder="Enter some description"
        value={body}
        onChange={handleBody}
        ref={inputBody}
      />
      <input
        value={serviceName}
        
        ref={inputService}
      />
      <select  id="serviceName" onChange={handleService}>  
              <option value="Equipment repair">Equipment repair</option>
              <option value="Consulting">Consulting</option>
          </select> 

      <Button type="submit" disabled={disabled} error={error}>
        {loading ? <p>Loading...</p> : error ? 'Image too big' : 'Publish'}
      </Button>
    </Container>
  );
}
