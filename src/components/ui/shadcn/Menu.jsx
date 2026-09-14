import {Box, Button, Menu, Portal} from "@chakra-ui/react";

const MenuOptions = (props) => {
  const {children, menuList} = props;
  return (
    <Menu.Root>
      <Menu.Trigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content onClick={(e) => e.stopPropagation()}>
            {menuList.map((eachItem) => {
              const ItemIcon = eachItem.itemIcon;
              const performOperation = () => {
                eachItem.onClick();
              };
              return (
                <Menu.Item
                  mb={1}
                  value={eachItem.id}
                  onClick={performOperation}>
                  <ItemIcon size={18} />
                  <Box flex="1">{eachItem.itemName}</Box>
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MenuOptions;
