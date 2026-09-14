import {RadioGroup, Stack, HStack} from "@chakra-ui/react";

{
  /* <Radio gap = "" stack = "" value = "" data = "" stateControl = "" /> */
}

// gap = "" => gap between items
// stack = "" => alignment of items
// value = "" => selected value for controlled input
// data = "" => {
//     label: ""
//     value: ""
// }
// stateControl = () => Event handler Function

const Radio = (props) => {
  const {gap, stack, value, data, stateControl} = props;

  const StackRender = stack === "v" ? Stack : HStack;

  return (
    <RadioGroup.Root
      colorPalette="red"
      variant="outline"
      size="md"
      value={value}
      onChange={stateControl}>
      <StackRender gap={gap}>
        {data.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText color="#fff" fontSize="16px">
              {item.label}
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </StackRender>
    </RadioGroup.Root>
  );
};

export default Radio;
