import React, { useState } from 'react';
import { Stack, TextField, DefaultButton, Dropdown, IDropdownOption } from '@fluentui/react';
import styles from './SidebarContent.module.css';

const formOptions: IDropdownOption[] = [
  { key: 'formA', text: 'Form A' },
  { key: 'formB', text: 'Form B' }
];

const SidebarContent = () => {
  const [selectedForm, setSelectedForm] = useState<string | undefined>(undefined);

  const handleFormChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    setSelectedForm(option?.key as string);
  };

  return (
    <Stack className={styles.sidebarContent} tokens={{ childrenGap: 20 }} verticalFill>
      <Dropdown
        placeholder="Select a form"
        label="Choose a form"
        options={formOptions}
        selectedKey={selectedForm}
        onChange={handleFormChange}
      />
      <Stack.Item grow={1} />
      <Stack tokens={{ childrenGap: 10 }} horizontalAlign="stretch">
        <TextField label="Username" placeholder="Enter your username" />
        <TextField label="Password" type="password" placeholder="Enter your password" />
        <DefaultButton text="Log In" />
      </Stack>
    </Stack>
  );
};

export default SidebarContent;
