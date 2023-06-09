import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-cloud9_night';
import 'ace-builds/src-noconflict/ext-language_tools';
import {useAppSelector} from '../../redux/hooks';
import '../../ui/css/Editor.css';

export default function Response() {
  const value = useAppSelector(state => state.editorReducer.value);

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
        setOptions={{
          wrap: true,
          readOnly: true,
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
