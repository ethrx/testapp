export default function HookWrapper(props) {
  if (props.value !== 0) {
    console.log(props.value);
    console.log(props.hook(props.value));
  }
  return <div></div>;
}
