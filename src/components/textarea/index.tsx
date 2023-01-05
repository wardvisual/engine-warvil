import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export interface TextAreaAble {
  placeholder: string;
  name: string;
  onChange: (arg: any) => void;
  onSubmit: (arg: any) => void;
  value: string;
  required: boolean;
  autoFocus: boolean;
  disabled: boolean;
  ref: HTMLTextAreaElement;
}

const TextArea = (prop: TextAreaAble) => {
  const [height, setHeight] = useState<any>();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      if (inputRef.current) {
        inputRef.current.value += '\n';
        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      prop.onSubmit(event);
    }
  };

  const handleInput = (event: any) => {
    // setHeight(null);
    prop.onChange(event);
  };

  return (
    <TextareaAutosize
      ref={inputRef}
      value={prop.value}
      required={prop.required}
      autoFocus={prop.autoFocus}
      disabled={prop.disabled}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      style={{ height }}
      onHeightChange={setHeight}
      placeholder="What's on your mind?"
      name="userRequest"
    />
  );
};

export default TextArea;
