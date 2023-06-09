/* eslint-disable @typescript-eslint/no-explicit-any */
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-cloud9_night';
import 'ace-builds/src-noconflict/ext-language_tools';
import '../../../ui/css/Editor.css';
import {useAppDispatch} from '../../../redux/hooks';
import {setBody} from '../../../redux/features/optionActionSlice';
import {useEffect, useState} from 'react';

export default function BodyEditor() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (valueInput: string) => {
    setValue(valueInput);
  };

  useEffect(() => {
    dispatch(setBody(value));
  }, [value]);

  return (
    <div style={{display: 'flex', height: '86vh', minHeight: '86vh'}}>
      <AceEditor
        mode="json"
        theme="cloud9_night"
        style={{background: '#231f1f'}}
        name="blah2"
        fontSize={18}
        width="100%"
        height="100%"
        highlightActiveLine={false}
        value={value}
        onChange={handleChange}
        setOptions={{
          wrap: true,
          cursorStyle: 'smooth',
          showGutter: true,
          useWorker: false,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          showPrintMargin: false,
          tabSize: 2,
        }}
      />
    </div>
  );
}
