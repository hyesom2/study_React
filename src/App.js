import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import Checkbox from "./components/CheckBox";
import UnControlledTextInput from "./components/UnControlledTextInput";

export default function App() {
  return (
    <div className="App">
      <TextInput />
      <TextArea />
      <Select />
      <Checkbox />
      <UnControlledTextInput />
    </div>
  );
}
