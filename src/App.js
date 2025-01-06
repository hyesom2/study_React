import Heading from "./Heading";

export default function App() {
  return (
    <div>
      <MyComponent value={"test"} />
      <MyComponent2>MyComponent2의 children</MyComponent2>
      <Heading type="h1">Hello,</Heading>
      <Heading type="h2">World!</Heading>
    </div>
  );
}

function MyComponent(props) {
  return <h1>{props.value}</h1>;
}

function MyComponent2(props) {
  return <h1>{props.children}</h1>;
}
